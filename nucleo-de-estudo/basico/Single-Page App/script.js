const navbar = document.querySelector('.nav-area')

function userOption(e) {

  const clickHandler = e.target.getAttribute('id')

  if (clickHandler === 'inicio'){
    const pageTitle = document.querySelector('#content-title')
    pageTitle.innerText = 'Hunter x Hunter'
    const pageText = document.querySelector('#content-text')
    pageText.innerHTML = 
    `<img src="./imagens/indice.jpg" alt="" width="500px" class="img">
    Hunter × Hunter é uma série de mangá escrita e ilustrada por
    Yoshihiro Togashi. Os capítulos são serializados na revista Weekly
    Shōnen Jump desde 3 de março de 1998, onde são compilados e
    publicados em formato tankobon pela editora Shueisha, embora o mangá
    tenha frequentemente entrado em hiato desde 2006.`
  }
  else if (clickHandler === 'personagens'){
    const pageTitle = document.querySelector('#content-title')
    pageTitle.innerText = 'Personagens'
    const pageText = document.querySelector('#content-text')
    pageText.innerHTML = 
    `<img src="./imagens/gon.jpg" alt="Gon" class="img" />
    <br />
    <b>Gon Freecss</b> 
    <br />
    Protagonista de Hunter x Hunter, Gon é um jovem que foi criado por sua tia. 
    Após passar sua vida acreditando que seu pai estava morto, Gon descobre que, 
    na verdade, ele está vivo e é um lendário Hunter - profissionais pagos para missões 
    diversas, que podem ir desde encontrar um tesouro ou recuperar objetos valiosos até 
    assassinados.
    <br />
    <br />
    <img src="./imagens/killua.jpg" alt="Killua" class="img" />
    <br />
    <b>Killua Zaoldyeck</b> 
    <br />
    Um dos quatro personagens principais, Killua conhece Gon durante o Exame Hunter 287,
    no qual eles e outros jovens tentavam obter sua licença Hunter para seguir 
    a profissão. O jovem é o terceiro filho, de cinco, da família de assassinos 
    Zaoldyeck.
    <br />
    <br />
    <img src="./imagens/kurapika.jpg" alt="Kurapika" class="img" />
    <br />
    <b>Kurapika</b>
    <br />
    Um dos quatro protagonistas, Kurapika já também possui uma grande trajetória até se tornar 
    o Hunter que conhecemos. Último sobrevivente da tribo Kuruta, ele já trabalhou 
    como um blacklist Hunter, que são aqueles responsáveis por transportar ou matar 
    criminosos extremamente perigosos.
    <br />
    <br />
    <img src="./imagens/leorio.jpg" alt="Leorio" class="img" />
    <br />
    <b>Leorio Paradinight</b>
    <br />
    O quarto integrante do grupo de personagens principais do anime, Leorio disfarça 
    sua grande força e seu bom coração com suas brincadeiras mais infantis. Contudo, 
    é o único participante do Exame Hunter a se preocupar com os outros. Ele brinca, 
    por exemplo, que quer se tornar um Hunter para ficar rico, quando, na verdade, 
    seu objetivo é poder custear sua faculdade de Medicina para ajudar outras pessoas.
    `
  }
  else if(clickHandler === 'galeria') {
    const pageTitle = document.querySelector('#content-title')
    pageTitle.innerText = 'Galeria de Imagens'
    const pageText = document.querySelector('#content-text')
    pageText.innerHTML = 
    `<div id="galeria_imagens">
    <img src="./imagens/Galeria/1.jpeg" alt="" class="img_galeria">
    <img src="./imagens/Galeria/2.jpg" alt="" class="img_galeria">
    <img src="./imagens/Galeria/3.jpeg" alt="" class="img_galeria">
    <img src="./imagens/Galeria/4.jpg" alt="" class="img_galeria">
    <img src="./imagens/Galeria/5.jpg" alt="" class="img_galeria">
    <img src="./imagens/Galeria/6.jpg" alt="" class="img_galeria">
    <img src="./imagens/Galeria/7.jpg" alt="" class="img_galeria">
    <img src="./imagens/Galeria/8.jpg" alt="" class="img_galeria">
    <img src="./imagens/Galeria/9.jpg" alt="" class="img_galeria">
    <img src="./imagens/Galeria/10.jpg" alt="" class="img_galeria">
    </div>
    <br />
    <hr />
    <br />
    <div>
    <p>Quer ver sua fanart ou imagem de Hunter x Hunter na galeria do Hunter Express?
      <br />
      <b>Envie agora mesmo!</b> </p>
      <br />
       <form action="" id="galeria">
        <input type="file" name="imagem" id="img">
        <button id="button-form" onclick="alert('Foto enviada com sucesso!')"> Enviar </button>
       </form>
    </div>
    `
  }
  else if(clickHandler === 'exameHunter') {
    const pageTitle = document.querySelector('#content-title')
    pageTitle.innerText = 'Exame Hunter: Inscrição 2021.1'
    const pageText = document.querySelector('#content-text')
    pageText.innerHTML = 
    `<img src="./imagens/licenca.png" alt="licença_hunter" class="img" />
    <form action="" id="plugHunter">
    <label for="nome">Nome completo</label>
    <input type="text" name="nome" id="nome" size="30px"/>
    <br />
    <label for="idade">Idade</label>
    <input type="number" name="idade" id="idade" />
    <br />
    <label for="genero">Masculino</label>
    <input type="radio" name="genero" id="genero" value="homem" />
    <label for="genero">Feminino</label>
    <input type="radio" name="genero" id="genero" value="mulher" />
    <br />
    <label for="email">E-mail</label>
    <input type="email" name="email" id="email" size="33px" />
    <br />
    <label for="endereco">Endereço</label>
    <input type="text" name="endereco" id="endereco" size="30px" />
    <br />
    <br />
    <button id="button-form" onclick="alert('Enviado com sucesso!')"> Enviar </button>
    </form> `
  }
  else if(clickHandler === 'quiz'){
    const pageTitle = document.querySelector('#content-title')
    pageTitle.innerText = 'Quiz x Quiz'
    const pageText = document.querySelector('#content-text')
    pageText.innerHTML = 
    `<img src="./imagens/gon_quiz.jpg" alt="Kurapika" class="img" width="500px"/>
    <br />
    O Quiz é composto de 5 perguntas. O nível das perguntas varia de fácil a médio. Respostas corretas valem 1 ponto e erradas não geram pontuação.
    <br/>
    <br/>
    <form action="" id="FormQuiz" >
            <label for="name">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Insira seu nome"
            />
            <br />
            <br />
            <p id="quest1">1) Qual é o nome do personagem que vem de uma família de assassinos profissionais?</p>
            <input type="text" name="p1" id="p1" />
            <p id="Resp1" style="color: #57EB4B"></p>
            <br />
            <p>2) Qual a cor predominante da roupa de Gon?</p>
            <div id='quest2'>
            <input type="radio" name="p2" id="Verde" value="Verde" />
            <label for="Verde"></label>Verde
            <input type="radio" name="p2" id="Vermelho" value="Vermelho" />
            <label for="Vermelho">Vermelho</label>
            <input type="radio" name="p2" id="Azul" value="Azul" />
            <label for="Azul">Azul</label>
            <input type="radio" name="p2" id="Preto" value="Preto" />
            <label for="Preto">Preto</label>
            <br />
            <br />
            <p id="Resp2" style="color: #57EB4B"></p>
            </div>
            <p>3) Qual desses arcos fazem parte de Hunter x Hunter</p>
            <div id='quest3'>
            <input
              type="checkbox"
              name="p3-Hunter"
              id="Hunter"
              value="Hunter"
            />
            <label for="Hunter">Exame Hunter</label>
            <input type="checkbox" name="p3-Wano" id="Wano" value="Wano" />
            <label for="Wano">Wano</label>
            <input
              type="checkbox"
              name="p3-Quimera"
              id="Quimera"
              value="Quimera"
            />
            <label for="Quimera">Formigas Quimera</label>
            <input
              type="checkbox"
              name="p3-Celestial"
              id="Celestial"
              value="Celestial"
            />
            <label for="Celestial">Torre Celestial</label>
            <br />
            <br />
            <p id="Resp3" style="color: #57EB4B"></p>
            </div>
            <p>
              4) Quais são os 3 tipos de "Nen" mais fortes que Gon pode
              desenvolver?
            </p>
            <div id='quest4'>
            <input
              type="checkbox"
              name="p4-reforco"
              id="Reforco"
              value="Reforco"
            />
            <label for="Reforco">Reforço</label>
            <input
              type="checkbox"
              name="p4-transformacao"
              id="Transformacao"
              value="Transformacao"
            />
            <label for="Transformacao">Transformação</label>
            <input
              type="checkbox"
              name="p4-especializacao"
              id="Especializacao"
              value="Especializacao"
            />
            <label for="Especializacao">Especialização</label>
            <input
              type="checkbox"
              name="p4-emissao"
              id="Emissao"
              value="Emissao"
            />
            <label for="Emissao">Emissão</label>
            <br />
            <br />
            <p id="Resp4" style="color: #57EB4B"></p>
            </div>
            <p>5) Qual o nome do autor de Hunter x Hunter?</p>
            <div id='quest5'>
            <input type="radio" name="p5" id="Oda" value="Oda" />
            <label for="Oda">Eiichiro Oda</label>
            <input type="radio" name="p5" id="Isayama" value="Isayama" />
            <label for="Isayama">Hajime Isayama</label>
            <input type="radio" name="p5" id="Togashi" value="Togashi" />
            <label for="Togashi">Yoshihiro Togashi</label>
            <input type="radio" name="p5" id="Horikoshi" value="Horikoshi" />
            <label for="Horikoshi">Kohei Horikoshi</label>
            <br />
            <br />
            <p id="Resp5" style="color: #57EB4B"></p>
            </div>
            <input type="button" value="Enviar" id="button_quiz" />
            <br/>
            <br/>
            <div id='ResultadoFinal'></div>
          </form>`
          
let Points = 0

let QuestAPoints = 0



const AnswerA = {"a":"Killua Zaoldyeck", "b":"Killua", "c":"Kilua", "d":"Killua Zoldyck", "e":"Kilua Zoldk"}

document.querySelector("input#button_quiz").addEventListener("click", gerar_quiz)


function gerar_quiz (){
    let a = document.querySelector("#p1").value
    let NomeJogador = document.querySelector("input#name").value

/*Questão1*/

Object.keys(AnswerA).forEach(function(key) {
    AnswerA[key] == a ?  [++Points, ++QuestAPoints, ] : ''
    if (QuestAPoints == 1){
        document.querySelector("#p1").style.background="#57EB4B"
    }
    else {
        document.querySelector("#p1").style.background="#c72e36cb"
        document.querySelector("p#Resp1").innerHTML = `Killua Zaoldyeck`
    }
})

/*Questão2*/

if (document.querySelector("input#Verde").checked){
    ++Points,
    document.querySelector("div#quest2").style.background="#57EB4B"
}
else {
    document.querySelector("div#quest2").style.background="#c72e36cb"
    document.querySelector("p#Resp2").innerHTML = `Verde`
}

/*Questão3*/

if (document.querySelector("input#Hunter").checked && document.querySelector("input#Quimera").checked && document.querySelector("input#Celestial").checked && document.querySelector("input#Wano").checked){
    document.querySelector("div#quest3").style.background="#c72e36cb"
    document.querySelector("p#Resp3").innerHTML = `Exame Hunter, Formigas Quimeras e Torre Celestial`
}
else if (document.querySelector("input#Hunter").checked && document.querySelector("input#Quimera").checked && document.querySelector("input#Celestial").checked){
    ++Points
    document.querySelector("div#quest3").style.background="#57EB4B"
}
else {
    document.querySelector("div#quest3").style.background="#c72e36cb"
    document.querySelector("p#Resp3").innerHTML = `Exame Hunter, Formigas Quimeras e Torre Celestial`
}


/*Questão4*/

if (document.querySelector("input#Reforco").checked && document.querySelector("input#Transformacao").checked && document.querySelector("input#Especializacao").checked && document.querySelector("input#Emissao").checked){
    document.querySelector("div#quest4").style.background="#c72e36cb"
    document.querySelector("p#Resp4").innerHTML = `Reforço, Transformação e Emissão`
}
else if (document.querySelector("input#Reforco").checked && document.querySelector("input#Transformacao").checked && document.querySelector("input#Emissao").checked){
    ++Points
    document.querySelector("div#quest4").style.background="#57EB4B"
}
else {
    document.querySelector("div#quest4").style.background="#c72e36cb"
    document.querySelector("p#Resp4").innerHTML = `Reforço, Transformação e Emissão`
}

/*Questão5*/

if (document.querySelector("input#Togashi").checked){
    ++Points,
    document.querySelector("div#quest5").style.background="#57EB4B"
}
else {
    document.querySelector("div#quest5").style.background="#c72e36cb"
    document.querySelector("p#Resp5").innerHTML = `Yoshihiro Togashi`
}
console.log(Points)


/*Resultado*/

if (Points == 5){
    document.querySelector("div#ResultadoFinal").innerHTML = `<img src="./imagens_quiz/5-Netero.jpg" id="ImagemResultado"><p>Parabéns <strong>${NomeJogador}</strong>! A sua pontuação foi de 5 pontos, um acerto perfeito, digno do maior presidente da história da Associação Hunter, <strong>Isaac Netero</strong>.</p>`
    document.querySelector("div#ResultadoFinal").style.border="#f9db6d solid 10px"
}
else if (Points == 4){
    document.querySelector("div#ResultadoFinal").innerHTML = `<img src="./imagens_quiz/4-Hisoka.jpg" id="ImagemResultado"><p>Parabéns <strong>${NomeJogador}</strong>! A sua pontuação foi de 4 pontos, sem dúvidas um mestre do Nen. No universo de HxH você estaria próximo do nível de personagens monstruosos como <strong>Hisoka Morow</strong>.</p>`
    document.querySelector("div#ResultadoFinal").style.border="#C92DF7 solid 10px"
}
else if (Points == 3){
    document.querySelector("div#ResultadoFinal").innerHTML = `<img src="./imagens_quiz/3-Kite.jpg" id="ImagemResultado"><p>Parabéns <strong>${NomeJogador}</strong>! A sua pontuação foi de 3 pontos, seus conhecimentos já são acima da média, mas sua capacidade de crescimento é infinita ainda. Personagens como <strong>Kite</strong> representam suas habilidades.</p>`
    document.querySelector("div#ResultadoFinal").style.border="#4188EB solid 10px"
}
else if (Points == 2){
    document.querySelector("div#ResultadoFinal").innerHTML = `<img src="./imagens_quiz/2-Gon.jpg" id="ImagemResultado"><p>É...Parabéns <strong>${NomeJogador}</strong>. A sua pontuação foi de 2 pontos, você tem conhecimento básico do universo HxH. Mas pense pelo lado positivo, assim como <strong>Gon Freecss</strong>, você ainda tem todo um continente de materiais para aprender e poder crescer até o topo!</p> `
    document.querySelector("div#ResultadoFinal").style.border="#14FC40 solid 10px"
}
else if (Points == 1){
    document.querySelector("div#ResultadoFinal").innerHTML = `<img src="./imagens_quiz/1-Zushi.jpg" id="ImagemResultado"><p><strong>${NomeJogador}</strong>, você fez 1 ponto apenas. Mas não se envergonhe, assim como <strong>Zushi</strong>, se você continuar treinando/lendo poderá um dia se tornar o maior conhecedor e retornar o teste, acertando as 5 questões!</p> `
    document.querySelector("div#ResultadoFinal").style.border="#E3E0DC solid 10px"
}
else if (Points == 0){
    document.querySelector("div#ResultadoFinal").innerHTML = `<img src="./imagens_quiz/0-Tompa.png" id="ImagemResultado"><p>Caramba <strong>${NomeJogador}</strong>, 0 pontos? Provavelmente você não viu nada dessa obra prima chamada HunterXHunter, que coisa feia. Volte quando você conseguir identificar esse personagem da foto acima e você será uma pessoa mais iluminada.</p> `
    document.querySelector("div#ResultadoFinal").style.border="#F63902 solid 10px"
}
}
  }
}

navbar.addEventListener('click', userOption)

