const { City } = require('../database/models');

const getCityById = async (cityId) => {
  const city = await City.findByPk(cityId);

  if (!city) {
    return null;
  }

  return city;
};

const getCities = async () => {
  const cities = await City.findAll();

  return cities;
};

const createCity = async (name) => {
  const city = await City.create({
    name
  });

  return city;
};

const updateCity = async (cityId, name) => {
  const city = await City.findByPk(cityId);

  if (!city) {
    return null;
  }

  city.name = name;

  await city.save();

  return city;
};

const deleteCity = async (cityId) => {
  const city = await City.findByPk(cityId);

  if (!city) {
    return null;
  }

  await city.destroy();

  return city;
};

module.exports = {
  getCityById,
  getCities,
  createCity,
  updateCity,
  deleteCity
};
