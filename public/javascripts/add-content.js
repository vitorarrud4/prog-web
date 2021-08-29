const addContent = async (filename, content) => {
  const token = localStorage.getItem("token");
  const formData = new FormData();
  formData.append("filename", filename);
  formData.append("content", content);
  const response = await fetch("http://localhost:3000/contents", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  if (response.status === 401)
    throw new Error("Sessão expirada, realize login novamente");
  if (response.status === 500) throw new Error("Erro ao gravar o conteúdo");
  return true;
};

const publishButton = document.getElementById("publishButton");
publishButton.addEventListener("click", async (event) => {
  event.preventDefault();
  const filename = document.getElementById("filename").value;
  const content = document.getElementById("content").files[0];
  if (!filename || !content) {
    alert("Arquivo vazio ou nome vazio");
    return;
  }
  try {
    await addContent(filename, content);
    alert("Conteúdo cadastrado");
    window.location = "/home";
  } catch (error) {
    alert(error.message);
  }
});
