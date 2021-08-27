const validateToken = async (token) => {
  const response = await fetch("http://localhost:3000/token/validate", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }),
  });
  return response;
};
