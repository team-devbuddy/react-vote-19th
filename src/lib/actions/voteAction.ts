export const voteAction = async (teamId: number, token: string) => {
  const response = await fetch(`http://43.201.123.205:8080/votes/demo/${teamId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      teamId,
    }),
  });
  return response;
};

export const voteResult = async () => {
  const response = await fetch(`http://43.201.123.205:8080/votes/teams`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};
