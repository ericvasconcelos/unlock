
// TYPING WRIGHT
const phrases = [
  'This is typing effect.',
  'Add more phrases!',
  'Enjoy coding!',
];

const outputElement = document.getElementById('output');

function typeText(text, speed, callback) {
  let index = 0;

  function type() {
    outputElement.textContent = text.slice(0, index);

    index++;

    if (index <= text.length) {
      setTimeout(type, speed);
    } else {
      setTimeout(callback, 1000);
    }
  }

  type();
}

function typePhrases() {
  let currentPhraseIndex = 0;

  function nextPhrase() {
    const currentPhrase = phrases[currentPhraseIndex];
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;

    typeText(currentPhrase, 100, nextPhrase);
  }

  nextPhrase();
}

typePhrases();

// CAROUSEL
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    },
  }
});

const doc = document

doc.getElementById("loginBtn").addEventListener("click", function() {
  doc.getElementById("myModal").style.display = "block";
});

doc.getElementById("closeBtn").addEventListener("click", function() {
  doc.getElementById("myModal").style.display = "none";
});

doc.getElementById("loginSubmitBtn").addEventListener("click", function() {
  // Lógica para processar o login
  alert("Login realizado com sucesso!");
  doc.getElementById("myModal").style.display = "none";
});

doc.getElementById("forgotPassword").addEventListener("click", function() {
  // Lógica para lidar com a recuperação de senha
  alert("Recuperar senha");
});
