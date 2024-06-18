const btNegativo = document.querySelector('#btn-negativo')
const btPositivo = document.querySelector('#btn-positivo')

const content = document.querySelectorAll('.content')

const musica = new Audio('/assets/song.mp3')
musica.loop = true

function mudarPosicao(btn) {
  btn.style.position = 'absolute';
  btn.style.bottom = numeroRandom(10, 60);
  btn.style.left = numeroRandom(10, 60);
}

function numeroRandom(min, max) {
  return (Math.random() * (max - min) + min) + "%";
}

btNegativo.addEventListener('mouseover', () => {
  mudarPosicao(btNegativo)
})

btNegativo.addEventListener('click', () => {
  mudarPosicao(btNegativo)
})

btPositivo.addEventListener('click', () => {
  musica.play()
  setInterval(createHeart, 300); 
  content.forEach(element => {
    if(element.classList.contains('hide')) {
      element.classList.remove('hide')
    } else {
      element.classList.add('hide')
    }
  })
})

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 2 + 3 + 's';
  heart.style.opacity = Math.random() + 0.5;

  document.querySelector('.content.accept').appendChild(heart);

  setTimeout(() => {
      heart.remove();
  }, 5000); // Ajuste conforme necessário
}
