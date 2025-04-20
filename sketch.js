//La figura que he creado con las elipses y su patrón fractal me inspira la idea de cómo en la naturaleza todo sigue un ciclo repetitivo, 
//pero a la vez siempre cambia. Las elipses, que se expanden y se duplican, representan ese crecimiento continuo, algo que se repite pero siempre con pequeñas variaciones. 
// Elegí una gama de colores bastante estridentes porque quería que la obra tuviera un impacto visual fuerte, algo que atrapara la atención de inmediato. 
// Los colores vivos y contrastantes crean una sensación de energía y dinamismo, como si la obra estuviera constantemente en movimiento, adaptándose a la interacción del espectador. 
// La combinación cromática que elegí, con colores brillantes que se transforman al mover el mouse, está pensada para representar ese equilibrio entre el caos y el orden, lo impredecible y lo constante, 
// una mezcla de vibrante vitalidad con una cierta calma estructural. Esto me recuerda un poco al arte generativo o al minimalismo, que juega con la repetición y las estructuras simples para crear algo complejo. 
// Lo más importante para mí es que, al hacer esto interactivo, no solo se trata de observar, sino de ser parte de la creación, haciendo que cada persona tenga una experiencia única.

let x = 0;
let y = 0;
let w = 200; // Tamaño del ancho inicial
let h = 200; // Tamaño de la altura inicial
let count = 3; // Número de recursiones inicial

function setup() {
  createCanvas(400, 300); // Creamos un lienzo de 800x800 píxeles
}

function draw() {
 // background(220); // Fondo gris claro
  translate(width / 2, height / 2); // Movemos el origen al centro del lienzo
  count = map(mouseX, 0, width, 0, 5); // Cambia el número de recursiones según la posición del ratón
  fractal(x, y, w, h, count); // Llamada a la función fractal con los parámetros iniciales
}

function fractal(x, y, w, h, count) {
  // Asignamos un color basado en el valor de count. 
  // Se ajusta el color rojo, verde y azul según el nivel de recursión (count).
  let c = color(count * 50, 255 - count * 50, count * 100); // Crea un color dinámico
  fill(c, 150); // Aplicamos el color con opacidad de 150
  noStroke(); // Sin borde en las elipses

  let offset = w / 6; // Ajustamos el desplazamiento de las elipses (una fracción del tamaño)
  let size = offset * 2; // Tamaño de las elipses (el doble del offset)

  // Dibujamos una serie de elipses con el tamaño y desplazamiento definidos
  ellipse(x - 2 * offset, y - 3 * offset, size, size); // Elipse superior izquierda
  ellipse(x, y - 3 * offset, size, size); // Elipse superior central
  ellipse(x - offset, y - 2 * offset, size, size); // Elipse izquierda superior
  ellipse(x - 3 * offset, y - 2 * offset, size, size); // Elipse izquierda central
  ellipse(x + offset, y - 2 * offset, size, size); // Elipse derecha superior
  ellipse(x - 2 * offset, y - offset, size, size); // Elipse izquierda inferior
  ellipse(x, y - offset, size, size); // Elipse central superior
  ellipse(x - offset, y, size, size); // Elipse izquierda central
  ellipse(x - 3 * offset, y, size, size); // Elipse izquierda inferior
  ellipse(x + offset, y, size, size); // Elipse derecha central
  ellipse(x - 2 * offset, y + offset, size, size); // Elipse izquierda inferior
  ellipse(x, y + offset, size, size); // Elipse central inferior

  // Si count es mayor que 0, llamamos recursivamente a la función fractal
  if (count > 0) {
    fractal(x - 2 * offset, y, w / 2, h / 2, count - 1); // Recursión a la izquierda
    fractal(x + 2 * offset, y, w / 2, h / 2, count - 1); // Recursión a la derecha
  }
}

  // interactividad del teclado para exportar la variación
function keyPressed() {
  if (key === 'S' || key === 's') {
    saveCanvas('fractal_laura', 'png');  // Exportar la imagen como PNG
  } 
}


