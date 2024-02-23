const {
  getTerminalById: getTerminalByIdService,
  createTerminal: createTerminalService,
  deleteTerminal: deleteTerminalService,
  getTerminals: getTerminalsService,
  updateTerminal: updateTerminalService,
  checkTerminalExistsByCode
} = require('../services/terminal');
const { catchAsync } = require('../helpers/catchAsync');
const { endpointResponse } = require('../helpers/success');
const { ErrorObject } = require('../helpers/error');

const getAll = catchAsync(async (_, res) => {
  try {
    const terminals = await getTerminalsService();

    if (!terminals) {
      throw new ErrorObject('No se pudieron obtener los terminales!', 500);
    }

    endpointResponse({
      res,
      status: 'success',
      message: 'Terminales obtenidas con éxito!',
      body: { terminals }
    });
  } catch (error) {
    endpointResponse({
      res,
      status: error.status || 'error',
      code: error.statusCode || 500,
      message: error.message || 'Error al obtener los terminales!'
    });
  }
});

const getTerminalById = catchAsync(async (req, res) => {
  try {
    const { id } = req.params;
    const terminal = await getTerminalByIdService(id);

    if (!terminal) {
      throw new ErrorObject(`No se encontró terminal con el ID: ${id}`, 404);
    }

    endpointResponse({
      res,
      status: 'success',
      message: 'Terminal obtenida con éxito!',
      body: terminal
    });
  } catch (error) {
    endpointResponse({
      res,
      status: error.status || 'error',
      code: error.statusCode || 500,
      message: error.message || 'Error al obtener la terminal!'
    });
  }
});

const createTerminal = catchAsync(async (req, res) => {
  try {
    const { lat, lon, cityId, terminalName, terminalCode } = req.body;

    const terminalExists = await checkTerminalExistsByCode(terminalCode);

    if (terminalExists) {
      throw new ErrorObject(
        `Ya existe una terminal con el código: ${terminalCode}`,
        409
      );
    }

    const newTerminal = await createTerminalService(
      lat,
      lon,
      cityId,
      terminalName,
      terminalCode
    );

    if (!newTerminal) {
      throw new ErrorObject('No se pudo crear la terminal!', 500);
    }

    endpointResponse({
      res,
      status: 'success',
      message: 'Terminal creada con éxito!',
      body: newTerminal
    });
  } catch (error) {
    endpointResponse({
      res,
      status: error.status || 'error',
      code: error.statusCode || 500,
      message: error.message || 'Error al crear la terminal!'
    });
  }
});

const updateTerminal = catchAsync(async (req, res) => {
  try {
    const { id } = req.params;
    const { lat, lon, cityId, terminalName, terminalCode } = req.body;

    const terminalExists = await checkTerminalExistsByCode(terminalCode);

    if (terminalExists) {
      throw new ErrorObject(
        `Ya existe una terminal con el código: ${terminalCode}`,
        409
      );
    }

    const updatedTerminal = await updateTerminalService(
      id,
      lat,
      lon,
      cityId,
      terminalName,
      terminalCode
    );

    if (!updatedTerminal) {
      throw new ErrorObject('No se pudo actualizar la terminal!', 500);
    }

    endpointResponse({
      res,
      status: 'success',
      message: 'Terminal actualizada con éxito!',
      body: updatedTerminal
    });
  } catch (error) {
    endpointResponse({
      res,
      status: error.status || 'error',
      code: error.statusCode || 500,
      message: error.message || 'Error al actualizar la terminal!'
    });
  }
});

const deleteTerminal = catchAsync(async (req, res) => {
  try {
    const { id } = req.params;

    await deleteTerminalService(id);

    endpointResponse({
      res,
      status: 'success',
      message: 'Terminal eliminada con éxito!'
    });
  } catch (error) {
    endpointResponse({
      res,
      status: error.status || 'error',
      code: error.statusCode || 500,
      message: error.message || 'Error al eliminar la terminal!'
    });
  }
});

module.exports = {
  getAll,
  getTerminalById,
  createTerminal,
  updateTerminal,
  deleteTerminal
};
