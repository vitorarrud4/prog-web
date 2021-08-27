(async () => {
  const token = localStorage.getItem("token");
  if (!token) window.location = "/login";
  try {
    const response = await validateToken(token);
    if (response.status !== 200) window.location = "/login";
  } catch (error) {
    console.log("ERRO: ", error);
    window.location = "/login";
  }
})();
