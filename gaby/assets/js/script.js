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

function cerrarModal() {
  modal.style.display = 'none';
}

function abrirModal() {
  modal.style.display = 'flex';
}

const confirmAttendanceButton = document.getElementById(
  'confirmAttendanceButton'
);
confirmAttendanceButton.addEventListener('click', abrirModal);

const locationButton = document.getElementById('locationButton');
locationButton.addEventListener('click', abrirMapModal);

const closeMapModalButton = document.getElementById('closeMapModalButton');
closeMapModalButton.addEventListener('click', cerrarMapModal);

function abrirMapModal() {
  modalMapa.style.display = 'flex';
}

function cerrarMapModal() {
  modalMapa.style.display = 'none';
}
