const main = document.querySelector("main");
const texto = document.querySelector("#textoTarefa");
const botao = document.querySelector("#addTarefa");
const cards = document.getElementsByClassName("card");
let contar = 0;

botao.addEventListener("click", function () {
	let tarefa = texto.value.trim();
	if (tarefa == "") {
		alert("campo de tarefa vazia");
	} else {
		contar++;
        main.innerHTML += 
        `<div class="card ${contar}">
            <div class="card-body">
                <p>${tarefa}</p>
                <button class="btn btn-success" onclick="finalizar(${contar})">Finalizar Tarefa</button>
            </div>
        </div>`;
		texto.value = "";
	}
});

function finalizar(position) {
	let localizador = document.getElementsByClassName(position);
	localizador[0].remove();
}