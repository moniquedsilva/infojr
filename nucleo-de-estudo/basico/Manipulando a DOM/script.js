/*
* Instruções:
  - A atividade possui o intuito de testar seus conhecimentos 
  relacionados a manipulação da DOM.
  - A atividade estará finalizada quando concluir todas as etapas.
* Observação: 
  - Não altere o arquivo index.html, 
  - As alterações devem ser feitas apenas no arquivo script.js
* Etapas:
  1) Alterar o titulo da página
  2) Adicione um novo item na lista
  3) Remover o parágrafo
  4) Adicionar um novo parágrafo
  5) Mudar o link dentro do href e inclua o atributo title="Novo Link" 
  6) Mudar a cor de fundo da body

  - Observe que no arquivo HTML cada etapa possui seu respectivo botão, 
  o que significa que as modificações serão acionadas através do click (evento) no botão, 
  então realize todas as alterações necessárias para que o botão se torne funcional.
*/

//Etapa 1
let botaoTitulo = document.getElementById('btn-titulo')
botaoTitulo.addEventListener('click', function handleClick(){
    let titulo = document.getElementById('titulo')
    titulo.innerText = "Javascript DOM"
})

//Etapa 2
let botaoLista = document.getElementById('btn-lista')
botaoLista.addEventListener('click', function handleClick(){
  let lista = document.getElementById('lista')
  let novoItem = document.createElement('li')
  novoItem.innerText = "Novo Item"
  novoItem.classList.add("item")
  lista.appendChild(novoItem)
})

//Etapa 3
let botaoRemover = document.getElementById('btn-remover')
botaoRemover.addEventListener('click', function handleClick(){
  let paragrafo = document.getElementsByClassName('conteudo-paragrafo')
  for (let i = 0; i < paragrafo.length; i++) {
    paragrafo[i].remove()
  }
})

//Etapa 4
let botaoAdicionar = document.getElementById('btn-adicionar')
botaoAdicionar.addEventListener('click', function handleClick(){
  let novoParagrafo = document.getElementById('paragrafo')
  let texto = document.createElement('p')
  texto.innerText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus accusamus assumenda voluptate 
  necessitatibus at harum voluptatem, minima doloribus adipisci quas voluptatibus ipsa nulla amet iusto consequatur 
  officia doloremque quae?`
  texto.classList.add("conteudo-paragrafo")
  novoParagrafo.appendChild(texto)
})

//Etapa 5
let botaoLink = document.getElementById('btn-link')
botaoLink.addEventListener('click', function handleClick(){
  let link = document.getElementById('link')
  link.setAttribute("href", "https://www.google.com")
  link.setAttribute("title", "Novo Site")
  console.log(link);
})

//Etapa 6
let botaoBackground = document.getElementById('btn-background')
botaoBackground.addEventListener('click', function handleClick(){
  let background = document.body
  background.style.backgroundColor = 'beige'
})

