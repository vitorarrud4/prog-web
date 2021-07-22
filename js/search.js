const resPesquisa = document.querySelector(".resultadoPesquisa");
const barraPesquisa = document.querySelector(".barraPesquisa");


const resultadoPesquisa = document.querySelector(".resultadoPesquisa")
document.querySelector(".botaoPesquisa").addEventListener("click", function() {
    resultadoPesquisa.innerHTML = ""
    for(var i = 0; i < barraPesquisa.value; i++) {
        var li = document.createElement('li') 
        var img = document.createElement('img')
        img.style.width = "200px"
        li.innerHTML = "gato" + i + " "

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "https://aws.random.cat/meow", true);
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 &&  xmlhttp.status === 200) {
                cat = JSON.parse(xmlhttp.responseText)
                img.src = cat.file
                li.appendChild(img)
                resultadoPesquisa.appendChild(li) 
            } else {
                console.log("Erro ao acessar a API")
                // console.log(xmlhttp.status)
                // console.log(xmlhttp.readyState)
            }
        }
        xmlhttp.send()
    }
})
