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


// To open Resume in a Google Drive on new window 
document.getElementById("resumeButton").addEventListener("click", function() {
    // Replace the URL below with the shareable link of your resume on Google Drive
    var resumeUrl = "https://drive.google.com/file/d/1dtXpIMe45zKS6gHQMlUp8920kc890fDD/view?usp=sharing";

    // Open the resume in a new browser window
    window.open(resumeUrl, "_blank");
  });
