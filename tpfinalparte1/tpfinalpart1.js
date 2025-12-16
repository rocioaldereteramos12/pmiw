/*
TpFinalParte1
Integrantes: 
Martina Ailen Meza 122794/4
Rocio Alderete Ramos 93053/4

*/

let estado;  
let imagenes = [];  
let texto = [];
let botonX, botonY;
let miFuente;
let sonido;

function preload() {
  for (let i = 0; i < 20; i++) { 
    imagenes[i] = loadImage("assets/p" + (i + 1) + ".png");
  }
  texto = loadStrings("assets/texto.txt");
  miFuente = loadFont("assets/miFuente.ttf");
  sonido = loadSound("assets/song.mp3");
}

function setup() {
  createCanvas(640, 480);
  textSize(20);
  textFont(miFuente);
  estado = 0; 

  botonX = 2 * width / 3; 
  botonY = height - 120;
}

function draw() {
  background(220);
  image(imagenes[estado], 0, 0, width, height);

  mostrarTextoCentrado();

  if (estado == 0) {
    dibujarBotonRect(width / 2 - 50, height - 100, 100, 50, "Inicio");
    dibujarBotonRect(width / 2 + 60, height - 100, 120, 50, "Créditos");
  } else if (estado >= 1 && estado <= 3) {
    dibujarBotonRect(width - 150, height - 80, 120, 50, "Siguiente");
  } 
  else if (estado == 4) {
    dibujarBotonRect(width / 3 - 60, height - 100, 120, 50, "aceptar");
    dibujarBotonRect(2 * width / 3 - 60, height - 100, 120, 50, "No aceptar");
  }
  else if (estado == 5) {
    dibujarBotonRect(width - 150, height - 80, 120, 50, "Siguiente");
  } else if (estado == 6) {
    dibujarBotonRect(width / 2 - 120, height - 100, 240, 50, "Volver al inicio");
  } else if (estado == 7) { 
    dibujarBotonRect(width - 150, height - 80, 120, 50, "Siguiente");
  } else if (estado == 8) { 
    dibujarBotonRect(width / 3 - 100, height - 100, 120, 50, "mm no");
    dibujarBotonRect(2 * width / 3 - 20, height - 100, 120, 50, "claro, si");
  } else if (estado == 9) { 
    dibujarBotonRect(width - 150, height - 80, 120, 50, "Siguiente");
  } else if (estado == 10) { 
    dibujarBotonRect(width / 2 - 120, height - 100, 240, 50, "Volver al inicio");
  } else if (estado == 11) { 
    dibujarBotonRect(width - 150, height - 80, 120, 50, "Siguiente");
  } else if (estado == 12) { 
    dibujarBotonRect(width - 150, height - 80, 120, 50, "Siguiente");
  } else if (estado == 13) { 
    dibujarBotonRect(width - 150, height - 80, 120, 50, "Siguiente");
  } else if (estado == 14) { 
    dibujarBotonRect(width / 3 - 100, height - 100, 120, 50, "nono");
    dibujarBotonRect(2 * width / 3 - 20, height - 100, 120, 50, "si");
  } else if (estado == 15) { 
    dibujarBotonRect(width - 150, height - 80, 120, 50, "Siguiente");
  } else if (estado == 16) { 
    dibujarBotonRect(width / 2 - 120, height - 100, 240, 50, "Volver al inicio");
  } else if (estado == 17) { 
    dibujarBotonRect(width - 150, height - 80, 120, 50, "Siguiente");
  } else if (estado == 18) { 
    dibujarBotonRect(width / 2 - 120, height - 100, 240, 50, "Volver al inicio");
  } else if (estado == 19) {
    textAlign(CENTER, CENTER);
    textSize(24);
    text("Créditos", width/2, 80);
    textSize(18);
    text("Trabajo práctico final\nIntegrantes:\nMartina Ailen Meza\nRocio Alderete Ramos\nAño 2025", width/2, height/2);
    dibujarBotonRect(width / 2 - 120, height - 100, 240, 50, "Volver al inicio");
  }
}

function mostrarTextoCentrado() {
  let inicio = estado * 5; 
  let fin = inicio + 5;
  let lineHeight = 30; 
  let rectPadding = 10; 

  textAlign(CENTER, CENTER);
  textSize(20);

  let bloqueWidth = 0;
  for (let i = inicio; i < fin && i < texto.length; i++) {
    bloqueWidth = max(bloqueWidth, textWidth(texto[i]));
  }
  let bloqueHeight = min(fin - inicio, texto.length - inicio) * lineHeight;

  let rectX = width/2 - bloqueWidth/2 - rectPadding;
  let rectY = height/2 - 100 - rectPadding;
  let rectW = bloqueWidth + rectPadding * 2;
  let rectH = bloqueHeight + rectPadding * 2;

  fill(0, 150); 
  rect(rectX, rectY, rectW, rectH, 5);

  fill(255);
  let y = height/2 - 100;
  for (let i = inicio; i < fin && i < texto.length; i++) {
    text(texto[i], width/2, y);
    y += lineHeight;
  }
}

function dibujarBotonRect(x, y, w, h, txt) {
  fill(70, 145, 162);
  rect(x, y, w, h, 10);
  fill(255);
  textAlign(CENTER, CENTER);
  text(txt, x + w / 2, y + h / 2);
}

function mousePressed() {
  if (estado == 0) {
    if (mouseDentroRect(width / 2 - 50, height - 100, 100, 50)) {
      estado = 1;
      if (!sonido.isPlaying()) {
        sonido.loop(); 
      }
    } else if (mouseDentroRect(width / 2 + 60, height - 100, 120, 50)) {
      estado = 19; 
    }
  } else if (estado >= 1 && estado <= 3) {
    if (mouseDentroRect(width - 150, height - 80, 120, 50)) {
      estado++;
    }
  } 
  
  else if (estado == 4) {
    if (mouseDentroRect(width / 3 - 60, height - 100, 120, 50)) {
      estado = 7;
    } else if (mouseDentroRect(2 * width / 3 - 60, height - 100, 120, 50)) {
      estado = 5;
    }
  }
  
  else if (estado == 5) {
    if (mouseDentroRect(width - 150, height - 80, 120, 50)) {
      estado = 6;
    }
  } else if (estado == 6 || estado == 10 || estado == 16 || estado == 18) {
    if (mouseDentroRect(width / 2 - 120, height - 100, 240, 50)) {
      estado = 0;
      angulo = -90;
      rotando = false;
      cayo = false;
    }
  } else if (estado == 7) {
    if (mouseDentroRect(width - 150, height - 80, 120, 50)) {
      estado = 8;
    }
  } else if (estado == 8) {
    if (mouseDentroRect(width / 3 - 100, height - 100, 120, 50)) {
      estado = 9;
    } else if (mouseDentroRect(2 * width / 3 - 20, height - 100, 120, 50)) {
      estado = 11;
    }
  } else if (estado == 9) {
    if (mouseDentroRect(width - 150, height - 80, 120, 50)) {
      estado = 10;
    }
  } else if (estado == 11) {
    if (mouseDentroRect(width - 150, height - 80, 120, 50)) {
      estado = 12;
    }
  } else if (estado == 12) {
    if (mouseDentroRect(width - 150, height - 80, 120, 50)) {
      estado = 13;
    }
  } else if (estado == 13) {
    if (mouseDentroRect(width - 150, height - 80, 120, 50)) {
      estado = 14;
    }
  } else if (estado == 14) {
    if (mouseDentroRect(width / 3 - 100, height - 100, 120, 50)) {
      estado = 15; 
    } else if (mouseDentroRect(2 * width / 3 - 20, height - 100, 120, 50)) {
      estado = 17; 
    }
  } else if (estado == 15) {
    if (mouseDentroRect(width - 150, height - 80, 120, 50)) {
      estado = 16; 
    }
  } else if (estado == 17) {
    if (mouseDentroRect(width - 150, height - 80, 120, 50)) {
      estado = 18; 
    }
  } else if (estado == 19) {
    if (mouseDentroRect(width / 2 - 120, height - 100, 240, 50)) {
      estado = 0;
    }
  }
}

function mouseDentroRect(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}
