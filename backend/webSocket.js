const { WebSocketServer, OPEN } = require('ws');
const {
  getSeatsByScheduleId,
  checkScheduleExistsById,
  isSeatLocked,
  lockSeat,
  unlockSeat
} = require('./services/webSocket');

const WS_HOST = process.env.WS_HOST || 'ws://localhost:3000';
const WS_PATH = '/ws/v1/seats/schedule';
const LOCK_SEAT_DELAY = process.env.LOCK_SEAT_DELAY || '5000'; // 5 seconds

const wsServer = new WebSocketServer({ noServer: true });

wsServer.on('error', console.error);

wsServer.on('connection', async (ws, req) => {
  const address = req.socket.remoteAddress;
  const { searchParams } = new URL(req.url, WS_HOST);

  if (!(searchParams.has('scheduleId') && searchParams.has('date'))) {
    //TODO Add sanitization and validation of the params
    ws.close();
    return;
  }

  const scheduleId = Number(searchParams.get('scheduleId'));
  const date = new Date(searchParams.get('date'));

  const scheduleIdExists = await checkScheduleExistsById(scheduleId);

  if (!scheduleIdExists) {
    ws.close();
    return;
  } else {
    ws.send(
      JSON.stringify({
        status: 'success',
        message: 'Conexión establecida, y se han enviado los asientos!',
        body: { seats: await getSeatsByScheduleId(scheduleId, date) }
      })
    );
  }

  console.log('Client connected: ', address);

  ws.on('error', console.error);

  ws.on('close', () => {
    console.log('Client disconnected: ', address);
  });

  ws.on('message', async (data) => {
    const {
      scheduleId: scheduleIdClient,
      seatId,
      type,
      date: dateClient
    } = JSON.parse(data);

    if (!(scheduleIdClient && seatId && type && dateClient)) {
      ws.send(
        JSON.stringify({
          status: 'error',
          message: 'Faltan datos para actualizar los asientos'
        })
      );
      return;
    }

    const dateClientParsed = new Date(dateClient);

    const notifyClients = async () => {
      const seats = await getSeatsByScheduleId(
        scheduleIdClient,
        dateClientParsed
      );
      wsServer.clients.forEach((client) => {
        if (
          client.readyState === OPEN &&
          scheduleIdClient === scheduleId &&
          dateClientParsed.getTime() === date.getTime()
        ) {
          client.send(
            JSON.stringify({
              status: 'update',
              message: 'Asientos actualizados!',
              body: { seats }
            })
          );
        }
      });
    };

    if (type === 'lock') {
      const isSeatLockedResponse = await isSeatLocked(
        seatId,
        scheduleIdClient,
        dateClientParsed
      );

      if (isSeatLockedResponse) {
        await unlockSeat(seatId, scheduleIdClient, dateClientParsed);
        notifyClients();
      } else {
        await lockSeat(seatId, scheduleIdClient, dateClientParsed);
        notifyClients();

        setTimeout(async () => {
          await unlockSeat(seatId, scheduleIdClient, dateClientParsed);
          notifyClients();
        }, Number(LOCK_SEAT_DELAY));
      }
    }
  });
});

/**
 * Upgrade request to WebSocket for the path /api/v1/seats/live
 * Reference: https://www.npmjs.com/package/ws#multiple-servers-sharing-a-single-https-server
 */

function upgradeHandler(req, socket, head) {
  const { pathname } = new URL(req.url, WS_HOST);

  if (pathname === WS_PATH) {
    //TODO add authentication, reference: https://www.npmjs.com/package/ws#client-authentication
    wsServer.handleUpgrade(req, socket, head, (socket) => {
      wsServer.emit('connection', socket, req);
    });
  } else {
    socket.destroy();
  }
}

module.exports = upgradeHandler;
