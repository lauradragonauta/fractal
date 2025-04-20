let x = 0;
let y = 0;
let w = 200;
let h = 200;
let count = 3;

function setup() {
  createCanvas(400, 300); // Tamaño del canvas
  noStroke();
}

function draw() {
  clear(); // Fondo transparente (reemplaza background)
  translate(width / 2, height / 2); // Centra el dibujo
  scale(2 / 3); // Escala el fractal a 2/3 de su tamaño original
  count = map(mouseX, 0, width, 0, 5);
  fractal(x, y, w, h, count);
}

function fractal(x, y, w, h, count) {
  let c = color(count * 50, 255 - count * 50, count * 100);
  fill(c, 150);

  let offset = w / 6;
  let size = offset * 2;

  ellipse(x - 2 * offset, y - 3 * offset, size, size);
  ellipse(x, y - 3 * offset, size, size);
  ellipse(x - offset, y - 2 * offset, size, size);
  ellipse(x - 3 * offset, y - 2 * offset, size, size);
  ellipse(x + offset, y - 2 * offset, size, size);
  ellipse(x - 2 * offset, y - offset, size, size);
  ellipse(x, y - offset, size, size);
  ellipse(x - offset, y, size, size);
  ellipse(x - 3 * offset, y, size, size);
  ellipse(x + offset, y, size, size);
  ellipse(x - 2 * offset, y + offset, size, size);
  ellipse(x, y + offset, size, size);

  if (count > 0) {
    fractal(x - 2 * offset, y, w / 2, h / 2, count - 1);
    fractal(x + 2 * offset, y, w / 2, h / 2, count - 1);
  }
}

function keyPressed() {
  if (key === 'S' || key === 's') {
    saveCanvas('fractal_laura', 'png');
  }
}



