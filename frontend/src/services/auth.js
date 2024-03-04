import { REGISTER_URL } from './api';
import { LOGIN_URL } from './api';

export async function registerUser(data) {
  const response = await fetch(REGISTER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  const responseData = await response.json();

  if (responseData.code === 409 || responseData.code === 500) {
    throw new Error(responseData.message);
  }

  return responseData;
}

export async function loginUser(credentials) {
  const response = await fetch(LOGIN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  });

  const responseData = await response.json();

  if (responseData.code === 401 || responseData.code === 500) {
    throw new Error(responseData.message);
  }

  return responseData;
}
