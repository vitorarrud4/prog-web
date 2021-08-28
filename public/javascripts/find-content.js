const searchButton = document.getElementById("searchButton");

const findContent = async (name) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:3000/contents/find", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name }),
    });
    if (response.status === 401)
      throw new Error("Sessão expirada, realize login novamente");
    if (response.status === 400) throw new Error("Conteúdo não encontrado");
    return response.json();
  } catch (error) {
    alert(error.message);
  }
};

const renderContent = (content) => {
  const list = document.getElementById("resultContainer");
  list.innerHTML = "";
  const li = document.createElement("li");
  li.setAttribute("class", "resultItem");
  const img = document.createElement("img");
  img.setAttribute("class", "resultContent");
  img.setAttribute("src", `/contents/${content.filename}`);
  const figcaption = document.createElement("figcaption");
  figcaption.setAttribute("class", "resultName");
  figcaption.textContent = content.name;

  li.appendChild(img);
  li.appendChild(figcaption);
  list.appendChild(li);
};

searchButton.addEventListener("click", async () => {
  const name = document.getElementById("name").value;
  if (!name) {
    alert("Busca não pode ser vazia!");
    return;
  }
  const content = await findContent(name);
  renderContent(content);
});
