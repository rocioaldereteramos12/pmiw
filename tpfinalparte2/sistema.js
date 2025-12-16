
class Sistema {
  constructor() {
    this.estado = "menu";
    this.menu = new Menu(this);
    this.jugador = new Personaje();
    this.caramelos = [];
    this.enemigos = [];
    this.puntos = 0;
    this.vidas = 3;
    this.crearObjetos();
  }

  crearObjetos() {
    this.caramelos = [];
    this.enemigos = [];

    for (let i = 0; i < 15; i++) this.caramelos.push(new Caramelo(2));
    for (let i = 0; i < 8; i++) this.enemigos.push(new Enemigo(3));
  }

  update() {
    if (this.estado === "juego") this.actualizarJuego();
  }

  actualizarJuego() {
    this.jugador.actualizar();

    for (let c of this.caramelos) {
      if (!c.activo) continue;
      c.actualizar();
      if (dist(this.jugador.x, this.jugador.y, c.x, c.y) < this.jugador.diam / 2 + c.diam / 2) {
        this.puntos++;
        c.activo = false;
      }
    }

    for (let e of this.enemigos) {
      if (!e.activo) continue;
      e.actualizar();
      if (dist(this.jugador.x, this.jugador.y, e.x, e.y) < this.jugador.diam / 2 + e.diam / 2) {
        this.vidas--;
        e.activo = false;
      }
    }

    if (this.vidas <= 0) {
      sonidoPerder.play();
      this.estado = "perdiste";
    }

    if (this.puntos >= 10) {
      sonidoGanar.play();
      this.estado = "ganaste";
    }
  }
draw() {
  if (this.estado === "menu") {
    this.menu.dibujar();
  }

  if (this.estado === "juego") {
    this.dibujarJuego();
  }

  if (this.estado === "instrucciones") {
    this.dibujarInstrucciones();
  }

  if (this.estado === "creditos") {
    this.dibujarCreditos();
  }

  if (this.estado === "ganaste") {
    background(0);
    imageMode(CORNER);
    push();
    tint(90);
    image(ganaste, 0, 0, width, height);
    pop();
    
    this.dibujarFinal("¡GANASTE!", color(0, 255, 90));
  }

  if (this.estado === "perdiste") {
    background(0);
    imageMode(CORNER);
    push();
    tint(90);
    image(perdiste, 0, 0, width, height);
    pop();
    
    this.dibujarFinal("¡PERDISTE!", color(255, 0, 0));
  }
}
dibujarInstrucciones() {
  background(0);
    imageMode(CORNER);
    push();
    tint(80);
    image(instrucciones, 0, 0, width, height);
    pop();
    
    fill(255);

  textAlign(LEFT, TOP);
  textLeading(28);

  textSize(36);
  push();
  fill(142, 158, 97);
  stroke(142, 158, 97);  
  strokeWeight(1);
  text("INSTRUCCIONES", 185, 100);
  pop();

  textSize(18);
  text(
    "- Movete con las FLECHAS o con el MOUSE.\n" +
    "- JUNTA 10 caramelos para GANAR.\n" +
    "- Si tocás 3 caramelos podridos, PERDÉS.\n" +
    "- Presioná R para reiniciar en cualquier momento.\n",
    150, 170);
    
  push();
  fill(233, 99, 36);
  stroke(233, 99, 36);  
  strokeWeight(1);
  text("Presiona R para volver al menú", 200, 350);
  pop();
}

dibujarCreditos() {
  background(0);
  push();
  tint(90);
  image(creditos, 0, 0, width, height);
  pop();
  fill(255);

  textAlign(CENTER, TOP);
  textLeading(28);

  push();
  fill(142, 158, 97);
  stroke(142, 158, 97);  
  strokeWeight(1);
  textSize(36);
  text("CRÉDITOS", width / 2, 100);
  pop();

  textSize(18);
  text(
     "Juego realizado por:\n" +
    "• Martina Ailen Meza\n" +
    "• Rocío Alderete Ramos\n\n" +
    "PMIW · Carrera Diseño Multimedial\n",
    width / 2,
    170
  );
  
  push();
  fill(233, 99, 36);
  stroke(233, 99, 36);
  strokeWeight(1);
  text("Presiona R para volver al menú", 330, 350);
  pop();
}
  dibujarJuego() {
    imageMode(CORNER);
    push();
    tint(100);
    image(fondo, 0, 0, width, height);
    pop();

    for (let c of this.caramelos) if (c.activo) c.dibujar();
    for (let e of this.enemigos) if (e.activo) e.dibujar();

    this.jugador.dibujar();

    fill(0, 150);
    rect(10, 10, 150, 60, 10);
    fill(255);
    textSize(20);
    textAlign(LEFT, CENTER);
    push();
    stroke(255);
    strokeWeight(1);
    text("PUNTOS: " + this.puntos, 20, 30);
    text("VIDAS: " + this.vidas, 20, 55);
    pop();
  }

  dibujarFinal(txt, col) {
    fill(col);
    textSize(50);
    textAlign(CENTER, CENTER);
    text(txt, width / 2, height / 2 - 50);
    fill(255);
    textSize(20);
    text("Presioná R para volver", width / 2, height / 2 - 10);
  }

  mousePressed() {
    if (this.estado === "menu") this.menu.click();
    if (this.estado === "juego") this.jugador.moverConMouse();
  }

  keyPressed() {
    if (key === "r" || key === "R") this.reiniciar();
  }

  reiniciar() {
    this.estado = "menu";
    this.puntos = 0;
    this.vidas = 3;
    this.jugador = new Personaje();
    this.crearObjetos();
  }
}
