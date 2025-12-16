
class Personaje {
  constructor() {
    this.x = width / 2;
    this.y = height - 80;
    this.diam = 60;
    this.vel = 5;
  }

  actualizar() {
    if (keyIsDown(LEFT_ARROW)) this.x -= this.vel;
    if (keyIsDown(RIGHT_ARROW)) this.x += this.vel;
    this.x = constrain(this.x, this.diam / 2, width - this.diam / 2);
  }

  dibujar() {
    imageMode(CENTER);
    image(imgJugador, this.x, this.y+20, this.diam, this.diam+50);
  }

  moverConMouse() {
    this.x = mouseX;
  }
}
