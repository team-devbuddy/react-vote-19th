import { LoginFormData } from '../types';

export const loginRequest = async (values: LoginFormData) => {
  const url = 'http://43.201.123.205:8080/login';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      loginId: values.userId,
      password: values.password,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`API call failed with status: ${response.status}, message: ${errorText}`);
    throw new Error(`API call failed with status: ${response.status}, message: ${errorText}`);
  }
  const result = await response.json();

  localStorage.setItem('token', result.token);
  localStorage.setItem('username', result.username);

  return result;
};
