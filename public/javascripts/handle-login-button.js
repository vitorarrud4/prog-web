(async () => {
  const enterButton = document.querySelector(".botaoEntrar");
  const token = localStorage.getItem("token");
  if (!token) {
    enterButton.addEventListener("click", () => (window.location = "/login"));
  }
  if (token) {
    const response = await validateToken(token);
    if (response.status === 200) {
      enterButton.textContent = "Sair";
      enterButton.addEventListener("click", () => {
        localStorage.clear();
        window.location = "/";
      });
    }
  }
})();
