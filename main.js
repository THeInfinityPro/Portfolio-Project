// YOUR JAVASCRIPT CODE FOR INDEX.HTML GOES HERE
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");


document.getElementById("hamburger").onclick = () => {
  document.getElementById("nav-menu").classList.add("open");
};

document.getElementById("close-btn").onclick = () => {
  document.getElementById("nav-menu").classList.remove("open");
};


const roles = [
"Desktop Support Engineer",
"System Administrator",
"IT Support Engineer",
"Cloud & DevOps Learner",
"DevOps Engineer (Aspiring)"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150;
const erasingSpeed = 50;
const delayBetween = 1500;

const textElement = document.querySelector(".typing-text");

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        textElement.textContent = currentRole.substring(0, charIndex++);
        if (charIndex > currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, delayBetween);
            return;
        }
    } else {
        textElement.textContent = currentRole.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? erasingSpeed : typingSpeed);
}

typeEffect();

// Open the menu
hamburger.onclick = (e) => {
  navMenu.classList.add("open");
  e.stopPropagation(); // prevent immediate close on click
};

// Close by clicking X
closeBtn.onclick = (e) => {
  navMenu.classList.remove("open");
  e.stopPropagation();
};

// Close when clicking outside the menu
document.addEventListener("click", function (event) {
  if (!navMenu.contains(event.target) && 
      !hamburger.contains(event.target)) {
    navMenu.classList.remove("open");
  }
});

// Reveal on scroll
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < windowHeight - revealPoint){
      el.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

const article = document.getElementById('article');

function updateArticle(word) {
  const first = word.charAt(0).toLowerCase();
  article.textContent = ['a','e','i','o','u'].includes(first) ? 'an ' : 'a ';
}

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    // Typing
    textElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentRole.length) {
      updateArticle(currentRole);
      isDeleting = true;
      setTimeout(typeEffect, delayBetween);
      return;
    }

  } else {
    // Deleting
    textElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      updateArticle(roles[roleIndex]);
    }
  }

  setTimeout(typeEffect, isDeleting ? erasingSpeed : typingSpeed);
}

// Start typing
updateArticle(roles[0]);
typeEffect();