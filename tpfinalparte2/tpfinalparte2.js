
let fondo, imgJugador, imgCaramelo, imgPodrido,inicio, ganaste, perdiste, logo, instrucciones, creditos;
let sonidoGanar, sonidoPerder;


function preload() {
  fondo = loadImage("assets/fondo.jpeg");
  inicio = loadImage("assets/inicio.jpg");
  logo = loadImage("assets/logo.png");
  instrucciones = loadImage("assets/instrucciones.jpg");
  ganaste = loadImage("assets/ganaste.jpg");
  perdiste = loadImage("assets/perdiste.jpg");
  imgJugador = loadImage("assets/jugador.png");
  imgCaramelo = loadImage("assets/caramelo.png");
  imgPodrido = loadImage("assets/podrido.png");
  creditos = loadImage("assets/creditos.jpg");

  sonidoGanar = loadSound("assets/sonido.ganar.mp3");
  sonidoPerder = loadSound("assets/sonido.perder.mp3");
}

function setup() {
  createCanvas(640, 480);
    this.sistema = new Sistema();

}

function draw() {
   this.sistema.update();
  this.sistema.draw();
}

function mousePressed() {
    this.sistema.mousePressed();

}

function keyPressed() {
    this.sistema.keyPressed();

}
