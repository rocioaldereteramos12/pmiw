
class Boton {
  constructor(x, y, w, h, texto, accion) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.texto = texto;
    this.accion = accion;
  }

  dibujar() {
   
    push();
    rectMode(CENTER);
    stroke(246, 233, 197);
    strokeWeight(2);
    fill(233, 99, 36);
    rect(this.x, this.y, this.w, this.h, 10);
    pop();
    
    noStroke();
    fill(246, 233, 197);
    textAlign(CENTER, CENTER);
    textSize(18);
    text(this.texto, this.x, this.y);
  }

  click() {
    if (
      mouseX > this.x - this.w / 2 &&
      mouseX < this.x + this.w / 2 &&
      mouseY > this.y - this.h / 2 &&
      mouseY < this.y + this.h / 2
    ) {
      this.accion();
    }
  }
}
