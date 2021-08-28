const validateEmail = (email) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email.toLowerCase());
};

const login = async (email, password) => {
  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) throw new Error("Email ou senha inválidos");
    const { token } = await response.json();
    return token;
  } catch (error) {
    alert(error.message);
  }
};

const loginButton = document.getElementById("login");
loginButton.addEventListener("click", async () => {
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
  const token = await login(email, password);
  localStorage.setItem("token", token);
  console.log("Login efetuado com sucesso!");
  window.location = "/home";
});
