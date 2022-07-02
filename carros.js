let xCarros = [550, 550, 550, 550, 550, 550];
let yCarros = [97, 40, 149, 210, 262, 310];
let velocidadeCarros = [8, 7, 6 , 8, 7, 3];
let possiçãoInicialCarros = [700, 650, 600, 650, 600, 650];
let posicaoFinalCarro = -100;
let comprimentoCaro = 60;
let alturaCarro = 40;

function mostraCarro(){ 
  for (let i = 0; i < carros.length; i++){
    image(carros[i], xCarros[i], yCarros[i], comprimentoCaro, alturaCarro);
  }
}

function carroAnda(){
  for (let i = 0; i < carros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function carroVolta(){
  for (let i = 0; i< carros.length; i++){
    if ( xCarros[i] < posicaoFinalCarro ){
      xCarros[i] = possiçãoInicialCarros[i];
    }  
  }
}

