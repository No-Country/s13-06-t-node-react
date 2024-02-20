const { User } = require('../database/models');

// Preparar la autenticación
const getUser = async (email) => {
  return await User.findOne({
    where: { email }
  });
};

module.exports = {
  getUser
};
