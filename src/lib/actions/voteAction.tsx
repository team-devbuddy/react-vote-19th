export const voteAction = async (teamId: number) => {
  const response = await fetch(`http://43.201.123.205:8080/votes/demo/${teamId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      teamId,
    }),
  });
  return response;
};
