const resPesquisa = document.querySelector(".resultadoPesquisa");
const barraPesquisa = document.querySelector(".barraPesquisa");

const resultadoPesquisa = document.querySelector(".resultadoPesquisa");
document.querySelector(".botaoPesquisa").addEventListener("click", function () {
  resultadoPesquisa.innerHTML = "";
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "https://aws.random.cat/meow", true);
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      for (var i = 0; i < barraPesquisa.value; i++) {
        cat = JSON.parse(xmlhttp.responseText);
        var li = document.createElement("li");
        var img = document.createElement("img");
        img.style.width = "200px";
        li.innerHTML = "Gato >> " + i + " ";

        img.src = cat.file;
        li.appendChild(img);
        resultadoPesquisa.appendChild(li);
      }
    } else {
      console.log("Erro ao acessar a API");
    }
  };
  xmlhttp.send();
});