
# Semana 04 - Arrays, DOM e Eventos

## Descrição do Projeto

Este projeto foi desenvolvido como atividade prática da Semana 04 de Desenvolvimento Web.

O objetivo é praticar os conceitos de Arrays, manipulação do DOM e Eventos utilizando JavaScript, HTML e CSS.

A aplicação permite visualizar resultados no console do navegador, interagir com botões e adicionar tarefas dinamicamente em uma lista.

## Tecnologias Utilizadas

- HTML5: estrutura da página.
- CSS3: estilização dos elementos.
- JavaScript: lógica e interatividade.

## Bloco 1 - Arrays e Métodos

Foram utilizados os principais métodos de arrays do JavaScript:

### forEach()
Percorre todos os elementos de um array, executando uma função para cada elemento.

Exemplo: imprimir uma saudação para cada nome.

### map()
Percorre um array e retorna um novo array com os elementos transformados.

Exemplo: transformar os nomes em letras maiúsculas.

### filter()
Retorna um novo array contendo apenas os elementos que atendem a uma condição.

Exemplo: selecionar preços maiores que R$ 20.

### reduce()
Percorre os elementos e acumula os valores em um único resultado.

Exemplo: somar todos os preços de um array.

## Bloco 2 - Manipulação do DOM

O DOM (Document Object Model) permite acessar e modificar os elementos HTML utilizando JavaScript.

Foram utilizados:

- querySelector(): seleciona um elemento HTML.
- querySelectorAll(): seleciona vários elementos.
- innerHTML: insere conteúdo HTML.
- createElement(): cria novos elementos.
- append(): adiciona elementos à página.
- textContent: altera ou define textos.
- classList.add(): adiciona uma classe CSS.
- classList.contains(): verifica uma classe.

Na atividade, o título da página é alterado, novos itens são inseridos na lista e classes CSS são aplicadas dinamicamente.

## Bloco 3 - Eventos

Os eventos permitem executar ações quando o usuário interage com a página.

Foram implementados:

- click: identifica cliques no botão e nos itens.
- mouseover: altera o texto do botão ao passar o mouse.
- keyup: mostra no console o texto digitado.
- submit: permite adicionar novas tarefas pelo formulário.
- preventDefault(): impede o recarregamento da página.

## Event Delegation

Event Delegation é uma técnica que utiliza um único listener de evento em um elemento pai para controlar os eventos de seus elementos filhos.

Neste projeto, foi utilizado apenas um addEventListener("click") na lista.

Quando um item é clicado, o JavaScript verifica se o elemento é um LI e alterna a classe "feito".

Essa técnica é importante porque:

- Evita criar vários listeners individuais.
- Melhora a organização e pode otimizar a performance.
- Permite que elementos criados dinamicamente também respondam aos cliques.
- Facilita a manutenção do código.

## Formulário de Tarefas

O formulário permite adicionar novas tarefas à lista.

Funcionamento:

1. O usuário digita uma tarefa.
2. O JavaScript captura o texto.
3. O método trim() remove espaços extras.
4. Se o campo estiver vazio, nada é adicionado.
5. Um novo elemento li é criado.
6. A tarefa é adicionada à lista.
7. O campo é limpo automaticamente.

As tarefas também podem ser marcadas como concluídas ao receberem um clique.

## Estrutura do Projeto

semana-04/
  index.html
  app.js
  README.md

## Como Executar

1. Baixe ou clone o repositório.
2. Abra a pasta do projeto.
3. Execute o arquivo index.html no navegador.
4. Pressione F12 para abrir as ferramentas do desenvolvedor.
5. Acesse a aba Console.
6. Observe os resultados dos métodos de arrays.
7. Teste o botão, os campos e a lista de tarefas.

## Resultados Esperados

- Exibição dos nomes no console.
- Transformação dos nomes em maiúsculas.
- Filtragem e soma dos preços.
- Alteração do título da página.
- Criação dinâmica dos itens da lista.
- Aplicação das classes destaque e feito.
- Funcionamento dos eventos de clique, mouse e teclado.
- Adição de tarefas sem recarregar a página.
- Funcionamento do Event Delegation.

## Conclusão

A atividade permitiu compreender como utilizar os métodos de arrays, manipular elementos HTML através do DOM e implementar eventos com JavaScript.

Também demonstrou a importância do Event Delegation para criar aplicações dinâmicas, organizadas e eficientes.

## Autor

Seu Nome

Atividade de Desenvolvimento Web - Semana 04.
