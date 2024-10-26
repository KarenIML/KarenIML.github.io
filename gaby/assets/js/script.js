// function handleImageClick(event) {
//   //x: 134 - y: 649
//   //x: 150 - y: 663

//   //x: 274 - y: 695
//   //x: 295 - y: 713
//   const x =
//     event.offsetX ||
//     (event.touches && event.touches[0].pageX - event.target.offsetLeft);
//   const y =
//     event.offsetY ||
//     (event.touches && event.touches[0].pageY - event.target.offsetTop);

//   console.log(`x: ${x} - y: ${y}`);
// }

// tarjeta.addEventListener('click', handleImageClick);
// tarjeta.addEventListener('touchstart', handleImageClick);

// Audio
var audio = document.getElementById('myAudio');
var playButton = document.getElementById('playButton');
var pauseButton = document.getElementById('pauseButton');
var volumeControl = document.getElementById('volumeControl');

// Ajustar el volumen del audio
audio.volume = 0.2;

// Eventos de reproducción
playButton.addEventListener('click', function () {
  audio.play().catch(function (error) {
    console.error('Error al reproducir el audio:', error);
  });
  playButton.style.display = 'none';
  pauseButton.style.display = 'inline';
});

pauseButton.addEventListener('click', function () {
  audio.pause();
  pauseButton.style.display = 'none';
  playButton.style.display = 'inline';
});

// Control de volumen
volumeControl.addEventListener('input', function () {
  audio.volume = volumeControl.value;
});

// Modal
// Obtén el modal y los botones
const modal = document.getElementById('modalConfirmacion');
const confirmButton = document.getElementById('confirmButton');
const cancelButton = document.getElementById('cancelButton');

// Función para mostrar el modal
function mostrarModal(event) {
  console.log('hola');
  //   const x = event.clientX;
  //   const y = event.clientY;
  const x =
    event.offsetX ||
    (event.touches && event.touches[0].pageX - event.target.offsetLeft);
  const y =
    event.offsetY ||
    (event.touches && event.touches[0].pageY - event.target.offsetTop);
  console.log(`x: ${x} - y: ${y}`);

  // Coordenadas específicas
  const x1 = 300,
    y1 = 600;
  const x2 = 360,
    y2 = 652;
  console.log(x >= x1 && x <= x2 && y >= y1 && y <= y2);
  // Verifica si el clic está dentro de las coordenadas específicas
  if (x >= x1 && x <= x2 && y >= y1 && y <= y2) {
    modal.style.display = 'flex'; // Muestra el modal
  }
}

// Función para cerrar el modal
function cerrarModal() {
  modal.style.display = 'none'; // Oculta el modal
}

// Agrega un evento de clic a la imagen
document.getElementById('tarjeta').addEventListener('click', mostrarModal);

// Agrega eventos para los botones del modal
confirmButton.addEventListener('click', () => {
  alert('Confirmado');
  cerrarModal(); // Cierra el modal
});

cancelButton.addEventListener('click', cerrarModal); // Cierra el modal al hacer clic en 'No'
