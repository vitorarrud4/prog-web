const bEntrar = document.querySelector(".botaoEntrar");
const modalContainer = document.querySelector(".modal-container");
const bClose = document.querySelector(".closeButton");
const bEnter = document.querySelector(".enterButton")
const messageError = document.querySelector(".messageError")
const container = document.querySelector(".container")
const footer = document.querySelector(".footer")
const searchContainer = document.querySelector(".searchContainer")

// funcionalidade nos botões e nos moldes

// quando clicar no botao entrar, abre o molde de Login
bEntrar.onclick = () => {
    modalContainer.style.display = "flex";
}

bClose.onclick = () => {
    modalContainer.style.display = "none";
}

bEnter.onclick = () => {
    var xmlhttp = new XMLHttpRequest();
    const emailElement = document.querySelector(".login-email");
    const passwordElement = document.querySelector(".login-password");
    xmlhttp.open("POST", "https://reqres.in/api/login", true);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            modalContainer.style.display = "none";
            container.style.display = "none";
            footer.style.display = "none";
            searchContainer.style.display = "flex";
        } else {
            messageError.innerHTML = "Erro ao entrar"
        }
    
    }
    xmlhttp.send(JSON.stringify({
        "email": emailElement.value,
        "password": passwordElement.value
    }))
}
