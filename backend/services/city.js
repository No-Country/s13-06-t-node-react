const { City } = require('../database/models');

const getCityById = async (cityId) => await City.findByPk(cityId);

const getCities = async () => await City.findAll();

const createCity = async (name) =>
  await City.create({
    name
  });

const updateCity = async (cityId, name) =>
  await City.update(
    {
      name
    },
    {
      where: { id: cityId }
    }
  );

const deleteCity = async (cityId) =>
  // TODO Posible error for foreign keys
  await City.destroy({
    where: { id: cityId }
  });

const checkCityExistsByName = async (name) =>
  Boolean(await City.findOne({ where: { name } }));

module.exports = {
  getCityById,
  getCities,
  createCity,
  updateCity,
  deleteCity,
  checkCityExistsByName
};
