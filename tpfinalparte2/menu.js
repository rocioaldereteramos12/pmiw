class Menu {
  constructor(sistema) {
    this.sistema = sistema;

    this.botonIniciar = new Boton(width / 2, 220, 200, 50, "INICIAR", () => {
      this.sistema.estado = "juego";
    });

    this.botonInstrucciones = new Boton(width / 2, 290, 200, 50, "INSTRUCCIONES", () => {
      this.sistema.estado = "instrucciones";
    });

    this.botonCreditos = new Boton(width / 2, 360, 200, 50, "CRÉDITOS", () => {
      this.sistema.estado = "creditos";
    });
  }

  dibujar() {
    background(0);
    imageMode(CORNER);
    push();
    tint(150);
    image(inicio, 0, 0, width, height);
    pop();
    image(logo, 190, 30, 240, 140);


    this.botonIniciar.dibujar();
    this.botonInstrucciones.dibujar();
    this.botonCreditos.dibujar();
  }

  click() {
    this.botonIniciar.click();
    this.botonInstrucciones.click();
    this.botonCreditos.click();
  }
}
