
//* "querySelectorAll" pega todos os elementos

const elementos = document.querySelectorAll(".texto");

console.log(elementos);

//* Percorrendo a lista e pegando cada elemento "p"
elementos.forEach(elemento => console.log(elemento));

//* Percorrendo a lista e pegando o texto
elementos.forEach(elemento => console.log(elemento.innerText));
//elementos.forEach(elemento => console.log(elemento.textContent));g

//* alterando textos
elementos.forEach(elemento => {
    elemento.innerText = "Alterado";
    // elemento.textContent = "Alterado";
});

//* "innerHTML" - trocar as tags
elementos.forEach(elemento => {
    elemento.innerHTML = "<h2>Item</h2>"
})

//* Trocar a cor do elemento
elementos.forEach(elemento => {
    elemento.style.color = "#0000FF";
})

//! EVENTOS COM JS
//? o que são eventos? -> ações do usuáirio

//* EVENTO CLICK
const botao = document.getElementById("btn");

botao.addEventListener("click", () => {
    alert("Você clicou!");
})

//* EVENTO DE DIGITAÇÃO ( input / keyup )

//? evento input -> dispara sempre que digita, em tempo real
const campo = document.getElementById("campo");
const resultado = document.getElementById("resultado");

campo.addEventListener("input", () => {
    // value -> o que está sendo digitado dentro do campo
    resultado.innerText = campo.value;
})

