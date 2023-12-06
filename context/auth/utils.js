import { API_URL } from '../../constants/api';

export const login = async (email, password) => {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      return { success: true, data };
    } else {
      return { success: false, message: data.message };
    }
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const logout = () => {
  dispatch({ type: 'LOGOUT' });
};

export const getUserInfo = async (token) => {
  const response = await fetch(API_URL + 'userInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(token),
    credentials: 'include',
  });

  if (response.status === 204) {
    return false;
  }

  if (response.status === 200) {
    const json = await response.json();
    return json;
  }
};

export const getCharacteristics = async (id, token) => {
  let json = null;
  const response = await fetch(API_URL + 'getUserChar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(id),
    credentials: 'include',
  });

  if (response.status === 204) {
    return false;
  }

  if (response.status === 200) {
    json = await response.json();
  }

  return json;
};
