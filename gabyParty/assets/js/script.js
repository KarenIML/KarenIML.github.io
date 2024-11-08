let isFirstSet = true;

function changeButterflyImages() {
  const leftWing = document.querySelector('.butterfly .l-wing');
  const rightWing = document.querySelector('.butterfly .r-wing');
  const body = document.querySelector('.butterfly .body');

  if (isFirstSet) {
    leftWing.style.backgroundImage = "url('./assets/css/lw1.png')";
    rightWing.style.backgroundImage = "url('./assets/css/rw1.png')";
    body.style.backgroundImage = "url('./assets/css/bod1.png')";

    rightWing.classList.add('wing-w1');
  } else {
    leftWing.style.backgroundImage = "url('./assets/css/lw2.png')";
    rightWing.style.backgroundImage = "url('./assets/css/rw2.png')";
    body.style.backgroundImage = "url('./assets/css/bod2.png')";

    rightWing.classList.remove('wing-w1');
  }

  isFirstSet = !isFirstSet;
}

setInterval(changeButterflyImages, 3000);

// Configuración de la fecha objetivo
const targetDate = new Date('November 16, 2024 00:00:00').getTime();

// Actualización del contador cada segundo
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  // Calculo de días, horas, minutos y segundos
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Actualización del contenido HTML
  document.querySelector('.days').textContent = days
    .toString()
    .padStart(2, '0');
  document.querySelector('.hours').textContent = hours
    .toString()
    .padStart(2, '0');
  document.querySelector('.minutes').textContent = minutes
    .toString()
    .padStart(2, '0');
  document.querySelector('.seconds').textContent = seconds
    .toString()
    .padStart(2, '0');

  // Si el tiempo se ha agotado, detener el contador
  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    document.querySelector('.countdown').textContent = '¡El día ha llegado!';
  }
}, 1000);

function abrirModal() {
  window.open(
    'https://docs.google.com/forms/d/e/1FAIpQLScZai_UhYkSYJCC47-2-a5zltiIMUXi60_kjBZLKaj5Do2mXg/viewform',
    '_blank'
  );
}

const confirmAttendanceButton = document.getElementById(
  'confirmAttendanceButton'
);
confirmAttendanceButton.addEventListener('click', abrirModal);

function abrirInvitation() {
  window.location.href = 'https://kareniml.github.io/gaby/';
}

const invitationButton = document.getElementById('invitationButton');
invitationButton.addEventListener('click', abrirInvitation);

// Audio
const audio = document.getElementById('myAudio');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const volumeControl = document.getElementById('volumeControl');

// Play audio
playButton.addEventListener('click', () => {
  audio.play();
  playButton.style.display = 'none';
  pauseButton.style.display = 'inline';
});

// Pause audio
pauseButton.addEventListener('click', () => {
  audio.pause();
  pauseButton.style.display = 'none';
  playButton.style.display = 'inline';
});

// Volume control
volumeControl.addEventListener('input', (e) => {
  audio.volume = e.target.value;
});
