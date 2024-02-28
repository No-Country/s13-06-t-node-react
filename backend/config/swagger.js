const { resolve } = require('node:path');
const { readFileSync } = require('node:fs');

const swaggerDefinition = {
  // openapi: '3.0.3',
  info: {
    title: 'Express API for the backend',
    version: '1.0.0',
    description:
      'Esta es una aplicación de API REST hecha con Express. Recupera datos del backend.',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html'
    },
    contact: {
      name: 'Ticket Bus API',
      url: 'undefined/api-docs',
      email: 'ticket-db@gmail.com'
    }
  },
  servers: [
    {
      url: process.env.API_HOST || 'http://localhost:3000/api/v1',
      description: 'Development server'
    }
  ]
};

const getSwaggerSpec = () => {
  try {
    // Get the file path
    const openApiFilePath = resolve('docs', 'api-docs.json');

    // Read the file
    const openApiFileContent = readFileSync(openApiFilePath, {
      encoding: 'utf8'
    });

    // Parse the file to JSON
    const openApiJSON = JSON.parse(openApiFileContent);

    // Merge the file with the swagger definition
    Object.assign(openApiJSON, swaggerDefinition);

    return openApiJSON;
  } catch (error) {
    console.log('error', error);
    return {};
  }
};

module.exports = {
  getSwaggerSpec
};
