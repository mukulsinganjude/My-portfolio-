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
    var resumeUrl = "https://github.com/mukulsinganjude"
    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });
// To open cmd-ui github in a Google Drive on new window 
document.getElementById("github-icon2").addEventListener("click", function() {
    var resumeUrl = "https://github.com/mukulsinganjude"
    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });

// To open Resume in a Google Drive on new window 
document.getElementById("resumeButton").addEventListener("click", function() {
    // Replace the URL below with the shareable link of your resume on Google Drive
    var resumeUrl = "https://drive.google.com/file/d/1dtXpIMe45zKS6gHQMlUp8920kc890fDD/view?usp=sharing";

    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });


// To open jobk-ckeck github in a Google Drive on new window 
document.getElementById("gitbutton").addEventListener("click", function() {
    var resumeUrl = "https://github.com/mukulsinganjude/Job-Check"
    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });

// To open jobk-ckeck live in a Google Drive on new window 
document.getElementById("Button-1").addEventListener("click", function() {
    var resumeUrl = "https://jobcheck-search-screen.netlify.app/"
    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });


// To open portfilio github in a Google Drive on new window 
document.getElementById("gitbutton-port").addEventListener("click", function() {
    var resumeUrl = "https://github.com/mukulsinganjude/My-portfolio-"
    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });

// To open portfolio live in a Google Drive on new window 
document.getElementById("Button-port").addEventListener("click", function() {
    var resumeUrl = "https://portfolioms20.netlify.app/"
    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });

// To open cmd-ui github in a Google Drive on new window 
document.getElementById("gitbutton-cmd").addEventListener("click", function() {
    var resumeUrl = "https://github.com/mukulsinganjude/CMD_UI"
    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });

// To open portfolio live in a Google Drive on new window 
document.getElementById("Button-cmd").addEventListener("click", function() {
    var resumeUrl = "/Other Pages/404_error.html"
    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });


// To open 3-tier github in a Google Drive on new window 
document.getElementById("gitbutton-3-tier").addEventListener("click", function() {
    var resumeUrl = "/Other Pages/404_error2.html"
    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });

// To open 3-tier live in a Google Drive on new window 
document.getElementById("Button-3-tier").addEventListener("click", function() {
    var resumeUrl = "/Other Pages/404_error3.html"
    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });

// To open flipkar github in a Google Drive on new window 
document.getElementById("gitbutton-flipkar").addEventListener("click", function() {
    var resumeUrl = "https://github.com/mukulsinganjude/FlipKart-Clone"
    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });

// To open flipkar live in a Google Drive on new window 
document.getElementById("Button-flipkar").addEventListener("click", function() {
    var resumeUrl = "https://flipkart-clone-ms.netlify.app/products"
    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });

// To open cleartrip github in a Google Drive on new window 
document.getElementById("gitbutton-cleartrip").addEventListener("click", function() {
    var resumeUrl = "https://github.com/mukulsinganjude/Cleartrip-clone"
    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });

// To open cleartrip live in a Google Drive on new window 
document.getElementById("Button-cleartrip").addEventListener("click", function() {
    var resumeUrl = "https://cleartrip-clone.netlify.app/"
    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });
