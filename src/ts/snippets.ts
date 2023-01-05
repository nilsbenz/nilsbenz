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

const copyrightYearText = document.querySelector('#copyright-year');
if (copyrightYearText) {
  copyrightYearText.innerHTML = String(new Date().getFullYear());
}

const scrollIntoView = (selector: string) =>
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });

const handleEnterPressed = (selector: string) => (e: any) => {
  if (e.key === 'Enter') {
    scrollIntoView(selector);
  }
};

document.querySelectorAll('.about-link').forEach((element) => {
  element.addEventListener('click', () => scrollIntoView('#about'));
  element.addEventListener('keypress', handleEnterPressed('#about'));
});

document.querySelectorAll('.videos-link').forEach((element) => {
  element.addEventListener('click', () => scrollIntoView('#videos'));
  element.addEventListener('keypress', handleEnterPressed('#videos'));
});

document.querySelectorAll('.software-link').forEach((element) => {
  element.addEventListener('click', () => scrollIntoView('#software'));
  element.addEventListener('keypress', handleEnterPressed('#software'));
});

document.querySelectorAll('.contact-link').forEach((element) => {
  element.addEventListener('click', () => scrollIntoView('#contact'));
  element.addEventListener('keypress', handleEnterPressed('#contact'));
});
