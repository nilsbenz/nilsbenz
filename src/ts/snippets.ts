const getAge = () => {
  const now = new Date();
  if (now.getMonth() === 0 && now.getDate() < 16) {
    return now.getFullYear() - 2001;
  }
  return now.getFullYear() - 2000;
};

document.querySelectorAll('.age').forEach((element) => {
  element.innerHTML = String(getAge());
});

const copyrightYearText = document.querySelector('#copyright-year');
if (copyrightYearText) {
  copyrightYearText.innerHTML = String(new Date().getFullYear());
}

const handleChangeLanguage = (lang: 'de' | 'en') => () => {
  document.querySelector('html')?.setAttribute('lang', lang);
};

if (
  navigator &&
  navigator.language &&
  navigator.language.toLowerCase().startsWith('en')
) {
  handleChangeLanguage('en')();
}

const langDeButton = document.querySelector('#lang-de');
const langEnButton = document.querySelector('#lang-en');

langDeButton?.addEventListener('click', handleChangeLanguage('de'));
langDeButton?.addEventListener('keypress', handleChangeLanguage('de'));

langEnButton?.addEventListener('click', handleChangeLanguage('en'));
langEnButton?.addEventListener('keypress', handleChangeLanguage('en'));

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
