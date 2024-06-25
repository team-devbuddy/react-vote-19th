import { FormData } from '../types';
import { teamOptions } from '../data';

export const signUpRequest = async (values: FormData) => {
  const url = `http://43.201.123.205:8080/members/join`;

  const team = teamOptions.find((option) => option.name === values.team);
  const teamId = team ? team.id : null;

  if (!teamId) {
    throw new Error(`Invalid team: ${values.team}`);
  }

  const requestBody = {
    name: values.name,
    loginId: values.userId,
    password: values.password,
    email: values.email,
    part: values.department.toUpperCase(),
    teamId: teamId,
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`API call failed with status: ${response.status}, message: ${errorText}`);
    throw new Error(`API call failed with status: ${response.status}, message: ${errorText}`);
  }

  return await response.json();
};
