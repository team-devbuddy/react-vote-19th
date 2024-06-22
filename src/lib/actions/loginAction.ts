import { LoginFormData } from '../types';

export const loginRequest = async (values: LoginFormData) => {
  const url = 'http://43.201.123.205:8080/login';

  console.log('Sending login request to URL:', url);
  console.log('Request body:', {
    loginId: values.userId,
    password: values.password,
  });

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

  console.log('Response status:', response.status);

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`API call failed with status: ${response.status}, message: ${errorText}`);
    throw new Error(`API call failed with status: ${response.status}, message: ${errorText}`);
  }
  const result = await response.json();
  console.log('Response result:', result);

  localStorage.setItem('token', result.token);
  localStorage.setItem('username', result.username);

  return result;
};
