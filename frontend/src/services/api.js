export const API_LOCALHOST_URL = 'http://localhost:3000/api/v1';
export const API_DEPLOY_URL =
  'https://ticket-bus-api-dev.up.railway.app/api/v1';
export const REGISTER_URL = `${API_DEPLOY_URL}/auth/register`;

export async function getCities() {
  const response = await fetch(`${API_DEPLOY_URL}/cities`);
  const data = await response.json();

  const cities = data.body.cities.map((city) => city.name);
  return cities;
}
