const senha = document.getElementById("senha");
const copiar = document.getElementById("copiar");
const tamanho = document.getElementById("tamanho");
const maiuscula = document.getElementById("maiusculas");
const minuscula = document.getElementById("minusculas");
const numero = document.getElementById("numeros");
const simbolo = document.getElementById("simbolos");
const gerador = document.getElementById("gerador");

const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()_+=";

function gerarLetrasMinusculas() {
    return letrasMinusculas[Math.floor(Math.random() * letrasMinusculas.length)];
}

function gerarLetrasMaiusculas() {
    return letrasMaiusculas[Math.floor(Math.random() * letrasMaiusculas.length)];
}

function gerarNumeros() {
    return numeros[Math.floor(Math.random() * numeros.length)];
}

function gerarSimbolos() {
    return simbolos[Math.floor(Math.random() * simbolos.length)];
}

function gerarSenha() {
    const tam = tamanho.value;

    let senhaGerada = "";

    if (maiuscula.checked) {
        senhaGerada += gerarLetrasMaiusculas();
    }

    if (minuscula.checked) {
        senhaGerada += gerarLetrasMinusculas();
    }

    if (numero.checked) {
        senhaGerada += gerarNumeros();
    }

    if (simbolo.checked) {
        senhaGerada += gerarSimbolos();
    }

    for (let i = senhaGerada.length; i < tam; i++) {
        const x = gerarX();
        senhaGerada += x;
    }

    senha.innerText = senhaGerada;
}

function gerarX() {
    const xs = [];

    if (maiuscula.checked) {
        xs.push(gerarLetrasMaiusculas());
    }

    if (minuscula.checked) {
        xs.push(gerarLetrasMinusculas());
    }

    if (numero.checked) {
        xs.push(gerarNumeros());
    }

    if (simbolo.checked) {
        xs.push(gerarSimbolos());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

gerador.addEventListener("click", gerarSenha);

copiar.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const senhaCopiada = senha.innerText;

    if (!senhaCopiada) {
        return;
    }

    textarea.value = senhaCopiada;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Senha copiada para a área de transferência!");
});
