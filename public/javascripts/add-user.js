const validateEmail = (email) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email.toLowerCase());
};

const addUser = async (email, password) => {
  const token = localStorage.getItem("token");
  const response = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ email, password }),
  });
  if (response.status === 403)
    throw new Error("Sessão expirada, realize login novamente");
  if (response.status === 400) throw new Error("Email já cadastrado!");
  return true;
};

const addUserButton = document.getElementById("addUser");
addUserButton.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (!email || !password) {
    alert("Email ou senha não podem ser vazios");
    return;
  }
  if (!validateEmail(email)) {
    alert("Digite um email válido");
    return;
  }
  try {
    await addUser(email, password);
    alert(`Usuário ${email} cadastrado com sucesso!`);
    window.location = "/home";
  } catch (error) {
    alert(error.message);
    if (error.message === "Sessão expirada, realize login novamente")
      window.location = "/login";
    if (error.message === "Email já cadastrado!")
      window.location = "/usuario/novo";
  }
});
