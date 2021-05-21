const AnswerA = {"a":"Killua Zaoldyeck", "b":"Killua", "c":"Kilua", "d":"Killua Zoldyck", "e":"Kilua Zoldk"}

document.querySelector("input#button_quiz").addEventListener("click", gerar_quiz)


function gerar_quiz (){
    let Points = 0

    let QuestAPoints = 0

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
    document.querySelector("div#ResultadoFinal").style.background="#f2f1e9"
}
else if (Points == 4){
    document.querySelector("div#ResultadoFinal").innerHTML = `<img src="./imagens_quiz/4-Hisoka.jpg" id="ImagemResultado"><p>Parabéns <strong>${NomeJogador}</strong>! A sua pontuação foi de 4 pontos, sem dúvidas um mestre do Nen. No universo de HxH você estaria próximo do nível de personagens monstruosos como <strong>Hisoka Morow</strong>.</p>`
    document.querySelector("div#ResultadoFinal").style.border="#C92DF7 solid 10px"
    document.querySelector("div#ResultadoFinal").style.background="#f2f1e9"
}
else if (Points == 3){
    document.querySelector("div#ResultadoFinal").innerHTML = `<img src="./imagens_quiz/3-Kite.jpg" id="ImagemResultado"><p>Parabéns <strong>${NomeJogador}</strong>! A sua pontuação foi de 3 pontos, seus conhecimentos já são acima da média, mas sua capacidade de crescimento é infinita ainda. Personagens como <strong>Kite</strong> representam suas habilidades.</p>`
    document.querySelector("div#ResultadoFinal").style.border="#4188EB solid 10px"
    document.querySelector("div#ResultadoFinal").style.background="#f2f1e9"
}
else if (Points == 2){
    document.querySelector("div#ResultadoFinal").innerHTML = `<img src="./imagens_quiz/2-Gon.jpg" id="ImagemResultado"><p>É...Parabéns <strong>${NomeJogador}</strong>. A sua pontuação foi de 2 pontos, você tem conhecimento básico do universo HxH. Mas pense pelo lado positivo, assim como <strong>Gon Freecss</strong>, você ainda tem todo um continente de materiais para aprender e poder crescer até o topo!</p> `
    document.querySelector("div#ResultadoFinal").style.border="#14FC40 solid 10px"
    document.querySelector("div#ResultadoFinal").style.background="#f2f1e9"
}
else if (Points == 1){
    document.querySelector("div#ResultadoFinal").innerHTML = `<img src="./imagens_quiz/1-Zushi.jpg" id="ImagemResultado"><p><strong>${NomeJogador}</strong>, você fez 1 ponto apenas. Mas não se envergonhe, assim como <strong>Zushi</strong>, se você continuar treinando/lendo poderá um dia se tornar o maior conhecedor e retornar o teste, acertando as 5 questões!</p> `
    document.querySelector("div#ResultadoFinal").style.border="#E3E0DC solid 10px"
    document.querySelector("div#ResultadoFinal").style.background="#f2f1e9"
}
else if (Points == 0){
    document.querySelector("div#ResultadoFinal").innerHTML = `<img src="./imagens_quiz/0-Tompa.png" id="ImagemResultado"><p>Caramba <strong>${NomeJogador}</strong>, 0 pontos? Provavelmente você não viu nada dessa obra prima chamada HunterXHunter, que coisa feia. Volte quando você conseguir identificar esse personagem da foto acima e você será uma pessoa mais iluminada.</p> `
    document.querySelector("div#ResultadoFinal").style.border="#F63902 solid 10px"
    document.querySelector("div#ResultadoFinal").style.background="#f2f1e9"
}
}