// Accessing DOM Elements
const startEl = document.getElementById('start');
const themeEl = document.getElementById('theme');
const midEl = document.getElementsByClassName('mid')[0];
const midheadEl = document.getElementsByClassName('mid-head')[0];

startEl.addEventListener('click', () => {
  window.scroll({
    top: 800,
    behavior: 'smooth'
  });
})

themeEl.addEventListener('click', () => {
  midEl.classList.toggle('dark');
  midheadEl.classList.toggle('dark');
})
