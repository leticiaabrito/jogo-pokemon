let pokebola = document.getElementById("pokebola");
let area = document.getElementById("area");

let posY = 0;
let posX = 0;
let direcaoY = 1;
let direcaoX = 1;
let velocidade = 100;
let animacao;

function posicaoAleatoria(){
    //calculando posição do x e do y
    posX = Math.random() * (area.clientWidth - pokebola.clientWidth); //mathrandom gera um numero aleatorio de 0 a 1
    posY = Math.random() * (area.clientHeight - pokebola.clientHeight);
    pokebola.style.left = posX + "px";
    pokebola.style.top = posY + "px";
}

function moverImagem(){
    //calculando movimentação da imagem
    posX += velocidade * direcaoX;
    posY += velocidade * direcaoY;
    pokebola.style.left = posX + "px";
    pokebola.style.top = posY + "px";

    // clientheight é a altura interna do elemento
    if (posY >= area.clientHeight - pokebola.clientHeight
        || posY <= 0) {
            direcaoY *= -1;
        }

    //clientwidth é a largura interna do elemento
    if (posX >= area.clientWidth - pokebola.clientWidth
        || posX <= 0) {
            direcaoX *= -1;
        }

    animacao = requestAnimationFrame(moverImagem);
}

function iniciar(){
    cancelAnimationFrame(animacao);
    posicaoAleatoria();
    moverImagem();
}

function pausar(){
    cancelAnimationFrame(animacao);
}

function mudarImagem(){
     const imagens = [   //array é o conjunto de valores dentro de uma mesma variavel
    "./images/pokebola.png",
    "./images/charmander.gif",
    "./images/pokebola_blue.png",
    "./images/pikachu.gif",
    "./images/pokebola_open.png",
    "./images/squirtle.gif",
    "./images/mew.gif",
    "./images/pokevenon.gif",
    "./images/butterfree.gif",
    "./images/gengar.gif",
    "./images/raichu.gif",
    "./images/zapdos.gif",
    "./images/snorlax.gif",
    "./images/charizard.gif"
  ];

  const sorteada = imagens[Math.floor(Math.random() * imagens.length)]; //o mathfloor arredonda o numero
  pokebola.src = sorteada;
}