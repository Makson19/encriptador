let criptografia = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

function criptografar() {
    let texto = document.getElementById("texto").value.split("");
    let textoCriptografado = document.getElementById("texto-criptografado");
    let containerNotFound = document.querySelector(".container-notfound");
    let btnCopiar = document.querySelector(".btn-copiar");

    containerNotFound.style.display = "none";
    btnCopiar.style.display = "initial";
    
    texto.map((item, index) => {
        if(item === "a") {
            texto[index] = "ai";
        } else if(item === "e") {
            texto[index] = "enter";
        } else if(item === "i") {
            texto[index] = "imes";
        } else if(item === "o") {
            texto[index] = "ober";
        } else if(item === "u") {
            texto[index] = "ufat";
        }
    })

    textoCriptografado.style.minHeight = "20rem";
    textoCriptografado.textContent = texto.join("");
}


function descriptografar() {
    let texto = document.getElementById("texto").value;
    let textoCriptografado = document.getElementById("texto-criptografado");
    let containerNotFound = document.querySelector(".container-notfound");
    let btnCopiar = document.querySelector(".btn-copiar");

    containerNotFound.style.display = "none";
    btnCopiar.style.display = "initial";
    
    for(var i = 0; i < criptografia.length; i++) {
        if(texto.includes(criptografia[i][1])) {
            texto = texto.replaceAll(criptografia[i][1], criptografia[i][0]);
        }
    }

    textoCriptografado.style.minHeight = "20rem";
    textoCriptografado.textContent = texto;
}


function copiar() {
    let textoCriptografado = document.getElementById("texto-criptografado");
    textoCriptografado.select()
    document.execCommand('copy');
}


// ==== Outra forma de copiar um texto usando JavaScript ==== //
// function copiar() {
//     let textoCriptografado = document.getElementById("texto-criptografado").innerHTML;

//     navigator.clipboard.writeText(textoCriptografado)
//     .then(() => {
//         console.log("Texto copiado com sucesso!")
//     })
//     .catch(err => {
//         console.log("Algo deu errado!!", err);
//     })
// }