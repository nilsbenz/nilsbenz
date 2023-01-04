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

const scrollIntoView = (selector: string) =>
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });

const handleEnterPressed = (selector: string) => (e: any) => {
  if (e.key === 'Enter') {
    scrollIntoView(selector);
  }
};

document
  .querySelector('#contact-link')
  ?.addEventListener('click', () => scrollIntoView('#contact'));

document
  .querySelector('#contact-link')
  ?.addEventListener('keypress', handleEnterPressed('#contact'));

document.querySelector('#scroll-down-button')?.addEventListener('click', () => {
  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
});

document
  .querySelector('#nav-videos')
  ?.addEventListener('click', () => scrollIntoView('#videos'));

document
  .querySelector('#nav-videos')
  ?.addEventListener('keypress', handleEnterPressed('#videos'));

document
  .querySelector('#nav-software')
  ?.addEventListener('click', () => scrollIntoView('#software'));

document
  .querySelector('#nav-software')
  ?.addEventListener('keypress', handleEnterPressed('#software'));

document
  .querySelector('#nav-contact')
  ?.addEventListener('click', () => scrollIntoView('#contact'));

document
  .querySelector('#nav-contact')
  ?.addEventListener('keypress', handleEnterPressed('#contact'));
