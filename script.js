<<<<<<< HEAD
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
=======
var _this = this;
var typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer","Anguler Developer", "Linux Administrator", "AWS Administrator"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
// toggle icon navbar
var menuIcon = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');
menuIcon.onclick = function () {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
// scroll sections
var sections = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('header nav a');
window.onscroll = function () {
    sections.forEach(function (sec) {
        var top = window.scrollY;
        var offset = sec.offsetTop - 100;
        var height = sec.offsetHeight;
        var id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(function (links) {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active section for animations on scroll
            sec.classList.add('show-animate');
        }
        //if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });
    //stick header
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    // remove toggle icon  and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    // animation footer scroll
    var footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', _this.innerHeight + _this.scrollY >= document.scrollingElement.scrollHeight);
};
// To convert Dark-mod into light-mod
var toggleBtn = document.getElementById('toggle-mode');
var icon = document.getElementById('icon');
toggleBtn.addEventListener('click', function () {
    var body = document.body;
    body.classList.toggle(':root');
    body.classList.toggle('light-theme');
    if (icon.classList.contains('bxs-moon')) {
        icon.classList.remove('bxs-moon');
        icon.classList.add('bxs-sun');
    }
    else {
        icon.classList.remove('bxs-sun');
        icon.classList.add('bxs-moon');
    }
});
// To Download Resume with button click
// var downloadBtn = document.getElementById('download-btn');
// downloadBtn.addEventListener('click', downloadFile);
// function downloadFile() {
//     var fileUrl = 'https://drive.google.com/file/d/1dtXpIMe45zKS6gHQMlUp8920kc890fDD/view?usp=sharing'; 
//     var fileName = 'Mukul_Resume.pdf';
//     fetch(fileUrl)
//         .then(function (response) { return response.blob(); })
//         .then(function (blob) {
//             var url = window.URL.createObjectURL(blob);
//             var a = document.createElement('a');
//             a.href = url;
//             a.download = fileName;
//             document.body.appendChild(a);
//             a.click();
//             a.remove();
//         })
//         .catch(function (error) { return console.error(error); });
// }


// To open cmd-ui github in a Google Drive on new window 
document.getElementById("github-icon").addEventListener("click", function() {
    let resumeUrl = "https://github.com/mukulsinganjude"
    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });
// To open cmd-ui github in a Google Drive on new window 
document.getElementById("github-icon2").addEventListener("click", function() {
    let resumeUrl = "https://github.com/mukulsinganjude"
    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });

// To open cmd-ui github in a Google Drive on new window 
document.getElementById("linkedin-link").addEventListener("click", function() {
    let resumeUrl = "https://www.linkedin.com/in/mukul-singanjude-003902245/"
    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });

// To open Resume in a Google Drive on new window 
document.getElementById("resumeButton").addEventListener("click", function() {
    // Replace the URL below with the shareable link of your resume on Google Drive
    let resumeUrl = "https://drive.google.com/file/d/1dtXpIMe45zKS6gHQMlUp8920kc890fDD/view?usp=sharing";

    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });


// To open jobk-ckeck github in a Google Drive on new window 
document.getElementById("gitbutton").addEventListener("click", function() {
    let resumeUrl = "https://github.com/mukulsinganjude/Job-Check"
    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });

// To open jobk-ckeck live in a Google Drive on new window 
document.getElementById("Button-1").addEventListener("click", function() {
    let resumeUrl = "https://jobcheck-search-screen.netlify.app/"
    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });

  
// To open carWala github in a Google Drive on new window 
document.getElementById("gitbutton-carwala").addEventListener("click", function() {
    let resumeUrl = "https://github.com/mukulsinganjude/car-website"
    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });

// To open carWala live in a Google Drive on new window 
document.getElementById("Button-carwala").addEventListener("click", function() {
    let resumeUrl = "https://carwala-ms.netlify.app/"
    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });


// To open portfilio github in a Google Drive on new window 
document.getElementById("gitbutton-port").addEventListener("click", function() {
    let resumeUrl = "https://github.com/mukulsinganjude/My-portfolio-"
    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });

// To open portfolio live in a Google Drive on new window 
document.getElementById("Button-port").addEventListener("click", function() {
    let resumeUrl = "https://portfolioms20.netlify.app/"
    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });

// To open cmd-ui github in a Google Drive on new window 
document.getElementById("gitbutton-cmd").addEventListener("click", function() {
    let resumeUrl = "https://github.com/mukulsinganjude/CMD_UI"
    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });

// To open portfolio live in a Google Drive on new window 
document.getElementById("Button-cmd").addEventListener("click", function() {
    let resumeUrl = "/Other Pages/404_error.html"
    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });


// To open 3-tier github in a Google Drive on new window 
document.getElementById("gitbutton-3-tier").addEventListener("click", function() {
    let resumeUrl = "/Other Pages/404_error2.html"
    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });

// To open 3-tier live in a Google Drive on new window 
document.getElementById("Button-3-tier").addEventListener("click", function() {
    let resumeUrl = "/Other Pages/404_error3.html"
    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });

// To open flipkar github in a Google Drive on new window 
document.getElementById("gitbutton-flipkar").addEventListener("click", function() {
    let resumeUrl = "https://github.com/mukulsinganjude/FlipKart-Clone/"
    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });
// To open flipkar live in a Google Drive on new window 
document.getElementById("button-flipkar").addEventListener("click", function() {
    let resumeUrl = "https://flipkart-clone-ms.netlify.app/products/"
    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });

// To open cleartrip github in a Google Drive on new window 
document.getElementById("gitbutton-cleartrip").addEventListener("click", function() {
    let resumeUrl = "https://github.com/mukulsinganjude/Cleartrip-clone"
    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });

// To open cleartrip live in a Google Drive on new window 
document.getElementById("Button-cleartrip").addEventListener("click", function() {
    let resumeUrl = "https://cleartrip-clone.netlify.app"
    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });

  
>>>>>>> d65885d088199a493c08a03ce6d717c08e03d876
