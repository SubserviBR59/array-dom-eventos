
"use strict";

// ======================================
// BLOCO 1 - ARRAYS E MÉTODOS
// ======================================

console.log("=== BLOCO 1: ARRAYS ===");

// 1. Array de nomes
const nomes = ["Ana", "Pedro", "Julia"];

// forEach: percorre cada nome
nomes.forEach((nome) => {
  console.log(`Olá, ${nome}!`);
});

// map: transforma os nomes em maiúsculas
const nomesMaiusculos = nomes.map((nome) => {
  return nome.toUpperCase();
});

console.log("Nomes maiúsculos:", nomesMaiusculos);

// 2. Array de preços
const precos = [10, 25, 40, 5, 60];

// filter: preços maiores que 20
const precosMaiores20 = precos.filter((preco) => {
  return preco > 20;
});

console.log("Preços acima de 20:", precosMaiores20);

// reduce: soma todos os preços
const somaPrecos = precos.reduce((total, preco) => {
  return total + preco;
}, 0);

console.log("Soma dos preços:", somaPrecos);

// 3. Array de objetos
const produtos = [
  { nome: "Caderno", preco: 15 },
  { nome: "Mochila", preco: 120 },
  { nome: "Caneta", preco: 5 },
  { nome: "Livro", preco: 45 }
];

// map: extrai os nomes dos produtos
const nomesProdutos = produtos.map((produto) => {
  return produto.nome;
});

console.log("Nomes dos produtos:", nomesProdutos);

// filter: produtos com preço menor que 50
const produtosBaratos = produtos.filter((produto) => {
  return produto.preco < 50;
});

console.log("Produtos abaixo de R$ 50:", produtosBaratos);

// reduce: soma os preços dos produtos
const totalProdutos = produtos.reduce((total, produto) => {
  return total + produto.preco;
}, 0);

console.log("Total dos produtos: R$", totalProdutos);

// forEach: imprime nome e preço
produtos.forEach((produto) => {
  console.log(`${produto.nome}: R$ ${produto.preco}`);
});


// ======================================
// BLOCO 2 - MANIPULAÇÃO DO DOM
// ======================================

console.log("=== BLOCO 2: DOM ===");

// 1. Selecionar e alterar o título
const titulo = document.querySelector("#titulo");

titulo.textContent = "Blog do Seu Nome";

// 2. Selecionar todos os parágrafos
const paragrafos = document.querySelectorAll(".texto");

paragrafos.forEach((paragrafo) => {
  console.log("Parágrafo:", paragrafo.textContent.trim());
});

// 3. Selecionar a lista
const lista = document.querySelector("#lista");

// Adicionar 2 itens usando innerHTML
lista.innerHTML += `
  <li>Item adicionado 1</li>
  <li>Item adicionado 2</li>
`;

// 4. Criar um novo li
const novoItem = document.createElement("li");

novoItem.textContent = "Terceiro item";

// Adicionar à lista
lista.append(novoItem);

// 5. Adicionar a classe destaque
novoItem.classList.add("destaque");

// Verificar se possui a classe
console.log(
  "Possui destaque?",
  novoItem.classList.contains("destaque")
);

// 6. Array de tarefas
const tarefas = [
  "Estudar JS",
  "Fazer exercícios",
  "Revisar DOM"
];

// Criar um li para cada tarefa
tarefas.forEach((tarefa) => {
  const item = document.createElement("li");

  item.textContent = tarefa;

  lista.append(item);
});

// Aplicar classe feito ao primeiro li
const primeiroItem = lista.querySelector("li");

primeiroItem.classList.add("feito");

// Mostrar quantidade de itens
const quantidadeItens = lista.querySelectorAll("li").length;

console.log("Quantidade total de itens:", quantidadeItens);


// ======================================
// BLOCO 3 - EVENTOS
// ======================================

console.log("=== BLOCO 3: EVENTOS ===");

// 1. Evento de clique no botão
const botao = document.querySelector("#botao");

botao.addEventListener("click", () => {
  console.log("Clicou!");
});

// 2. Evento mouseover
botao.addEventListener("mouseover", () => {
  botao.textContent = "Pode clicar!";
});

// 3. Evento keyup no campo nome
const campoNome = document.querySelector("#nome");

campoNome.addEventListener("keyup", () => {
  console.log("Nome digitado:", campoNome.value);
});


// ======================================
// EVENT DELEGATION
// ======================================

// Um único evento de clique para toda a lista
lista.addEventListener("click", (e) => {

  // Verificar se o elemento clicado é um LI
  if (e.target.tagName === "LI") {

    // Alternar a classe feito
    e.target.classList.toggle("feito");

    // Mostrar o texto do item clicado
    console.log("Item clicado:", e.target.textContent);
  }

});

// Criar um novo item dinamicamente
const itemDinamico = document.createElement("li");

itemDinamico.textContent = "Novo item dinâmico";

lista.append(itemDinamico);

// O novo item também funciona ao clicar,
// graças ao Event Delegation.


// ======================================
// FORMULÁRIO
// ======================================

const formulario = document.querySelector("#formulario");

const campoTarefa = document.querySelector("#tarefa");

// Evento de envio do formulário
formulario.addEventListener("submit", (e) => {

  // Impedir recarregamento da página
  e.preventDefault();

  // Capturar o texto sem espaços extras
  const textoTarefa = campoTarefa.value.trim();

  // Não adicionar tarefa vazia
  if (textoTarefa === "") {
    console.log("Digite uma tarefa válida!");
    return;
  }

  // Criar novo elemento li
  const novaTarefa = document.createElement("li");

  // Adicionar texto da tarefa
  novaTarefa.textContent = textoTarefa;

  // Adicionar tarefa à lista
  lista.append(novaTarefa);

  // Limpar o campo
  campoTarefa.value = "";

  console.log("Tarefa adicionada:", textoTarefa);

  // Atualizar quantidade total
  console.log(
    "Total de itens:",
    lista.querySelectorAll("li").length
  );

});
