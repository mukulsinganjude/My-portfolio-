const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const themeButton = document.querySelector('#toggle-mode');
const themeIcon = document.querySelector('#icon');

// The desktop nav only tracks the main page sections. Nested content sections
// do not have navigation links of their own.
const pageSections = document.querySelectorAll('body > section');
const navLinks = document.querySelectorAll('header nav a[href^="#"]');

if (menuIcon && navbar) {
  menuIcon.addEventListener('click', () => {
    const isOpen = navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x', isOpen);
    menuIcon.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
    menuIcon.setAttribute('aria-expanded', 'false');
  }));
}

function updatePageState() {
  const scrollPosition = window.scrollY;
  document.querySelector('header')?.classList.toggle('sticky', scrollPosition > 24);

  let currentSection = '';
  pageSections.forEach((section) => {
    const isCurrent = scrollPosition >= section.offsetTop - 140 &&
      scrollPosition < section.offsetTop + section.offsetHeight - 140;
    section.classList.toggle('show-animate', isCurrent);
    if (isCurrent) currentSection = section.id;
  });

  navLinks.forEach((link) => {
    const isCurrent = link.getAttribute('href') === `#${currentSection}`;
    link.classList.toggle('active', isCurrent);
    if (isCurrent) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });

  document.querySelector('footer')?.classList.toggle(
    'show-animate',
    window.innerHeight + scrollPosition >= document.documentElement.scrollHeight - 8,
  );
}

window.addEventListener('scroll', updatePageState, { passive: true });
window.addEventListener('resize', updatePageState);
updatePageState();

const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const revealTargets = document.querySelectorAll(
  '.about-img, .skills-2 .skills-column-2, .eduction-column, .skills-column, .project-column, .contact iframe, .skills-1 .skills-column-1',
);

if (!motionPreference.matches && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });

  revealTargets.forEach((element, index) => {
    element.classList.add('reveal');
    element.style.setProperty('--reveal-delay', `${(index % 4) * 90}ms`);
    revealObserver.observe(element);
  });
}

if (window.Typed) {
  new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Angular Developer', 'Linux Administrator', 'AWS Administrator'],
    typeSpeed: 55,
    backSpeed: 35,
    backDelay: 1400,
    loop: true,
  });
}

const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'light') document.body.classList.add('light-theme');

function updateThemeIcon() {
  const isLight = document.body.classList.contains('light-theme');
  themeIcon?.classList.toggle('bxs-sun', isLight);
  themeIcon?.classList.toggle('bxs-moon', !isLight);
  themeButton?.setAttribute('aria-label', `Switch to ${isLight ? 'dark' : 'light'} theme`);
  themeButton?.setAttribute('aria-pressed', String(isLight));
}

updateThemeIcon();
themeButton?.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  localStorage.setItem('portfolio-theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
  updateThemeIcon();
});

const externalLinks = {
  'github-icon': 'https://github.com/mukulsinganjude',
  'github-icon2': 'https://github.com/mukulsinganjude',
  'linkedin-link': 'https://www.linkedin.com/in/mukul-singanjude-003902245/',
  resumeButton: 'https://drive.google.com/file/d/1dtXpIMe45zKS6gHQMlUp8920kc890fDD/view?usp=sharing',
  gitbutton: 'https://github.com/mukulsinganjude/Job-Check',
  'Button-1': 'https://jobcheck-search-screen.netlify.app/',
  'gitbutton-carwala': 'https://github.com/mukulsinganjude/car-website',
  'Button-carwala': 'https://carwala-ms.netlify.app/',
  'gitbutton-port': 'https://github.com/mukulsinganjude/My-portfolio-',
  'Button-port': 'https://portfolioms20.netlify.app/',
  'gitbutton-cmd': 'https://github.com/mukulsinganjude/CMD_UI',
};

document.addEventListener('click', (event) => {
  const link = event.target.closest('a[id]');
  const url = link && externalLinks[link.id];
  if (!url) return;

  event.preventDefault();
  window.open(url, '_blank', 'noopener,noreferrer');
});
