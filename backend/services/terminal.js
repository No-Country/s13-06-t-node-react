const { Terminal } = require('../database/models');

const getTerminalById = async (id) =>
  await Terminal.findByPk(id, {
    include: ['city']
  });

const getTerminals = async () => await Terminal.findAll({ include: ['city'] });

const createTerminal = async (lat, lon, cityId, terminalName, terminalCode) =>
  await Terminal.create({
    lat,
    lon,
    cityId,
    terminalName,
    terminalCode
  });

const updateTerminal = async (
  id,
  lat,
  lon,
  cityId,
  terminalName,
  terminalCode
) =>
  await Terminal.update(
    {
      lat,
      lon,
      cityId,
      terminalName,
      terminalCode
    },
    {
      where: { id },
      returning: true,
      plain: true
    }
  );

const deleteTerminal = async (id) => await Terminal.destroy({ where: { id } });

const checkTerminalExistsByCode = async (terminalCode) =>
  Boolean(await Terminal.findOne({ where: { terminalCode } }));

module.exports = {
  getTerminalById,
  getTerminals,
  createTerminal,
  updateTerminal,
  deleteTerminal,
  checkTerminalExistsByCode
};
