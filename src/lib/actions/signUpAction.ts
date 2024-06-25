import { FormData } from '../types';
import { teamOptions } from '../data';

export const signUpRequest = async (values: FormData) => {
  const team = teamOptions.find(option => option.name === values.team);
  if (!team) {
    throw new Error(`Invalid team: ${values.team}`);
  }

  const response = await fetch('https://hyeongjun.store/members/join', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: values.name,
      loginId: values.userId,
      password: values.password,
      email: values.email,
      part: values.department,
      teamId: team.id,
    }),
  });

  return response;
};
