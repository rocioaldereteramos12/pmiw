


class Caramelo {
  constructor(vel) {
    this.vel = vel;
    this.reiniciar();
  }

  reiniciar() {
    this.x = random(width);
    this.y = random(-500, -100);
    this.diam = random(30, 50);
    this.activo = true;
  }

  actualizar() {
    this.y += this.vel;
    if (this.y > height + 50) this.reiniciar();
  }

  dibujar() {
    imageMode(CENTER);
    image(imgCaramelo, this.x, this.y, this.diam, this.diam);
  }
}
