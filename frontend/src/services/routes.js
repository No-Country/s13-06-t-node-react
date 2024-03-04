import { ROUTES_URL } from './api';

export async function fetchRoutes() {
  const response = await fetch(ROUTES_URL);
  const data = await response.json();

  if (!response.ok) {
    throw new Error('Could not fetch routes');
  }

  return data;
}
