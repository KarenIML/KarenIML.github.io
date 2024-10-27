// Audio
var audio = document.getElementById('myAudio');
var playButton = document.getElementById('playButton');
var pauseButton = document.getElementById('pauseButton');
var volumeControl = document.getElementById('volumeControl');

// Ajustar el volumen del audio
audio.volume = 0.7;

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
const modal = document.getElementById('modalConfirmacion');
const modalMapa = document.getElementById('modalMapa');

const confirmButton = document.getElementById('confirmButton');
const cancelButton = document.getElementById('cancelButton');

function mostrarModal(event) {
  const x =
    event.offsetX ||
    (event.touches && event.touches[0].pageX - event.target.offsetLeft);
  const y =
    event.offsetY ||
    (event.touches && event.touches[0].pageY - event.target.offsetTop);
  console.log(`x: ${x} - y: ${y}`);

  const x1 = 300,
    y1 = 800;
  const x2 = 360,
    y2 = 870;
  console.log(x >= x1 && x <= x2 && y >= y1 && y <= y2);
  if (x >= x1 && x <= x2 && y >= y1 && y <= y2) {
    modal.style.display = 'flex';
  }

  const x3 = 152,
    y3 = 753;
  const x4 = 177,
    y4 = 870;
  console.log(x >= x3 && x <= x4 && y >= y3 && y <= y4);
  if (x >= x3 && x <= x4 && y >= y3 && y <= y4) {
    modalMapa.style.display = 'flex';
  }
}

function cerrarModal() {
  modal.style.display = 'none';
}

document.getElementById('tarjeta').addEventListener('click', mostrarModal);

confirmButton.addEventListener('click', () => {
  window.open(
    'https://docs.google.com/forms/d/e/1FAIpQLScZai_UhYkSYJCC47-2-a5zltiIMUXi60_kjBZLKaj5Do2mXg/viewform',
    '_blank'
  );
  cerrarModal();
});

cancelButton.addEventListener('click', cerrarModal);

const closeModalButton = document.getElementById('closeModalButton');
closeModalButton.addEventListener('click', cerrarModal);

function cerrarMapModal() {
  modalMapa.style.display = 'none';
}

const closeMapModalButton = document.getElementById('closeMapModalButton');
closeMapModalButton.addEventListener('click', cerrarMapModal);

function cerrarMapModal() {
  modal.style.display = 'flex';
}

const confirmAttendanceButton = document.getElementById(
  'confirmAttendanceButton'
);
confirmAttendanceButton.addEventListener('click', cerrarMapModal);
