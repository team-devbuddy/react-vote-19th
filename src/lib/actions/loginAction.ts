import { LoginFormData } from '../types';

export const loginRequest = async (values: LoginFormData) => {
  const response = await fetch('https://hyeongjun.store/login', {
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

  return response;
};
