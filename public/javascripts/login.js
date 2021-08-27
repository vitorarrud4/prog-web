// const bEntrar = document.querySelector(".botaoEntrar");
// const modalContainer = document.querySelector(".modal-container");
// const bClose = document.querySelector(".closeButton");
// const bEnter = document.querySelector(".enterButton");
// const messageError = document.querySelector(".messageError");
// const container = document.querySelector(".container");
// const footer = document.querySelector(".footer");
// const searchContainer = document.querySelector(".searchContainer");
// const btnSair = document.querySelector(".btnEntrar");
// const divMC = document.querySelector("div.modal-container");

// // funcionalidade nos botões e nos moldes

// // quando clicar no botao entrar, abre o molde de Login
// bEntrar.onclick = async () => {
//   const token = localStorage.getItem("token");
//   if (!token) {
//     modalContainer.style.display = "flex";
//     return;
//   }
//   const response = await fetch("http://localhost:3000/token/validate", {
//     method: "POST",
//     headers: new Headers({
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     }),
//   });
//   try {
//     if (response.status !== 200) throw new Error("Token invalido");
//     modalContainer.style.display = "none";
//     container.style.display = "none";
//     // footer.style.display = "none";
//     searchContainer.style.display = "flex";
//     btnSair.innerHTML = "Sair";
//     btnSair.onclick = () => {
//       btnSair.innerHTML = "Entrar";
//       modalContainer.style.display = "none";
//       localStorage.clear();
//     };
//   } catch (error) {
//     console.log("error", "token invalido, realize login");
//   }
// };

// bClose.onclick = () => {
//   modalContainer.style.display = "none";
// };

// bEnter.onclick = async () => {
//   const email = document.querySelector(".login-email").value;
//   const password = document.querySelector(".login-password").value;
//   try {
// const response = await fetch("http://localhost:3000/login", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ email, password }),
// });
// const { token } = await response.json();
// localStorage.setItem("token", token);
//     modalContainer.style.display = "none";
//     container.style.display = "none";
//     // footer.style.display = "none";
//     searchContainer.style.display = "flex";
//     btnSair.innerHTML = "Sair";
//     btnSair.onclick = () => {
//       btnSair.innerHTML = "Entrar";
//       modalContainer.style.display = "none";
//       localStorage.clear();
//     };
//   } catch (_) {
//     messageError.innerHTML = "Erro ao entrar";
//   }
// };

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
