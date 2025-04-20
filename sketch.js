let x = 0;
let y = 0;
let w = 200;
let h = 200;
let count = 3;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  clear(); // Para fondo transparente
  translate(width / 2, height / 2); // Centro del lienzo
  scale(2 / 3); // Escalado visual al 66%
  count = map(mouseX, 0, width, 0, 5);
  fractal(x, y, w, h, count);
}

function fractal(x, y, w, h, count) {
  let c = color(count * 50, 255 - count * 50, count * 100);
  fill(c, 150);
  noStroke();

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


