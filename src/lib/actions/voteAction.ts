export const voteAction = async (teamId: number, token: string) => {
  const response = await fetch(`http://43.201.123.205:8080/votes/demo/${teamId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Access: `Bearer ${token}`,
    },
    body: JSON.stringify({
      teamId,
    }),
  });
  return response;
};

export const voteResult = async (token: string) => {
  const response = await fetch(`http://43.201.123.205:8080/votes/teams`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Access: `Bearer ${token}`,
    },
  });
  return response;
};

export const candiateList = async (token: string) => {
  const response = await fetch(`http://43.201.123.205:8080/votes/candidates`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Access: `Bearer ${token}`,
    },
  });
  return response.json();
};
