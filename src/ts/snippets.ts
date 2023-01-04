const getAge = () => {
  const now = new Date();
  if (now.getMonth() === 0 && now.getDate() < 16) {
    return now.getFullYear() - 2001;
  }
  return now.getFullYear() - 2000;
};

const ageText = document.querySelector('#age');
if (ageText) {
  ageText.innerHTML = String(getAge());
}

document.querySelector('#contact-link')?.addEventListener('click', () => {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('#scroll-down-button')?.addEventListener('click', () => {
  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
});
