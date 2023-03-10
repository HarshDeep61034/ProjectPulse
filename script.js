// Accessing DOM Elements
const startEl = document.getElementById('start');
startEl.addEventListener('click', () => {
  window.scroll({
    top: 800,
    behavior: 'smooth'
  });
});

