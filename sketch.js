var tierra;
var estacion1, estacion2;
var satelite;
var ascendenteIzq, descendenteIzq;
var descendenteD, descendenteD;

function preload() {
  earth = loadImage("tierra.png");

  satellite = loadImage("satelitee.png");

  estacionIzq = loadImage("Izq.png");

  estacionD = loadImage("D.png");

  solicitarI = loadAnimation(
    "SI1.PNG",
    "SI2.PNG",
    "SI3.PNG",
    "SI4.PNG",
    "SI5.PNG",
    "SI6.PNG",
    "SI7.PNG"
  );

  solicitarD = loadAnimation(
    "SD1.PNG",
    "SD2.PNG",
    "SD3.PNG",
    "SD4.PNG",
    "SD5.PNG",
    "SD6.PNG",
    "SD7.PNG",
    "SD8.PNG",
    "SD9.PNG"
  );

  recibirI = loadAnimation(
    "RI1.PNG",
    "RI2.PNG",
    "RI3.PNG",
    "RI4.PNG",
    "RI5.PNG",
    "RI6.PNG",
    "RI7.PNG"
  );

  recibirD = loadAnimation(
    "RD1.PNG",
    "RD2.PNG",
    "RD3.PNG",
    "RD4.PNG",
    "RD5.PNG",
    "RD6.PNG",
    "RD7.PNG",
    "RD8.PNG",
    "RD9.PNG"
  );
}

function setup() {
  createCanvas(600, 400);

  satelite = createSprite(300, 75, 120, 60);
  satelite.shapeColor = "orange";
  satelite.addImage(satellite);
  satelite.scale = 0.35;

  tierra = createSprite(300, 270, 600, 200);
  tierra.shapeColor = "skyblue";
  tierra.addImage(earth);

  estacion1 = createSprite(60, 330, 60, 80);
  estacion1.shapeColor = "gray";
  estacion1.addImage(estacionIzq);
  estacion1.scale = 0.2;

  estacion2 = createSprite(540, 330, 60, 80);
  estacion2.shapeColor = "gray";
  estacion2.addImage(estacionD);
  estacion2.scale = 0.2;

  //transmisores de datos izquierdos
  ascendenteIzq = createSprite(170, 200, 20, 200);
  ascendenteIzq.visible = false;
  ascendenteIzq.shapeColor = "blue";
  ascendenteIzq.depth = estacion1.depth;
  estacion1.depth = estacion1.depth;

  descendenteIzq = createSprite(170, 200, 20, 200);
  descendenteIzq.visible = false;
  descendenteIzq.shapeColor = "red";
  descendenteIzq.depth = estacion1.depth;
  estacion1.depth = estacion1.depth;

  //transmisores de datos derechos
  ascendenteD = createSprite(450, 200, 20, 200);
  ascendenteD.visible = false;
  ascendenteD.shapeColor = "blue";
  ascendenteD.depth = estacion2.depth;
  estacion2.depth = estacion2.depth;

  descendenteD = createSprite(450, 200, 20, 200);
  descendenteD.visible = false;
  descendenteD.shapeColor = "red";
  descendenteD.depth = estacion2.depth;
  estacion2.depth = estacion2.depth;
}

function draw() {
  background(0);

  //solicitar datos
  if (keyWentDown("L")) {
    descendenteIzq.visible = true;
    ascendenteIzq.visible = false;
    descendenteIzq.addAnimation("iz", solicitarI);
    descendenteIzq.scale = 0.6;
  }
  if (keyWentUp("L")) {
    descendenteIzq.visible = false;
  }

  if (keyWentDown("R")) {
    descendenteD.visible = true;
    ascendenteD.visible = false;
    descendenteD.addAnimation("DDD", solicitarD);
    descendenteD.scale = 0.6;
  }

  if (keyWentUp("R")) {
    descendenteD.visible = false;
  }

  //srecibir datos

  if (keyWentDown("LEFT_ARROW")) {
    ascendenteIzq.visible = true;
    descendenteIzq.visible = false;
    ascendenteIzq.addAnimation("izq", recibirI);
    ascendenteIzq.scale = 0.6;
  }

  if (keyWentUp("LEFT_ARROW")) {
    ascendenteIzq.visible = false;
  }

  if (keyWentDown("RIGHT_ARROW")) {
    ascendenteD.visible = true;
    descendenteD.visible = false;
    ascendenteD.addAnimation("D", recibirD);
    ascendenteD.scale = 0.6;
  }

  if (keyWentUp("RIGHT_ARROW")) {
    ascendenteD.visible = false;
  }
  drawSprites();

  if (keyDown("L")) {
    fill("white");
    textSize(14);
    text("Solicitando datos del satélite", 20, 200);
  }

  if (keyDown("R")) {
    fill("white");
    textSize(14);
    text("Solicitando datos del satélite", 360, 200);
  }

  if (keyDown("LEFT_ARROW")) {
    fill("white");
    textSize(14);
    text("Transfiriendo datos a la estación", 20, 200);
    text("base Izquierda", 80, 216);
  }

  if (keyDown("RIGHT_ARROW")) {
    fill("white");
    textSize(14);
    text("Transfiriendo datos a la estación ", 320, 200);
    text("base Derecha", 380, 216);
  }

  fill("white");
  textSize(16);
  text("Presiona las teclas L & R", 10, 14);
  text("-para solicitar datos del satélite", 10, 30);
  text("Presiona las teclas de flecha Izquierda y Derecha", 10, 50);
  text("-para recibir datos del satélite", 10, 66);
}
