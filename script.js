function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");
    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
}
window.onscroll = function() {headerShadow()};
function headerShadow() {
    const navHeader = document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px"
    }
}
var typingEffect = new Typed(".typedText",{
  strings: ["Developer", "Designer", "Student"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
})
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true     
})
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

sr.reveal('.project-box',{interval: 200})

sr.reveal('.top-header',{})

const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})
srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})
srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute("id");
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active-link")
    }
    else {
      document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active-link")
    }
  })
}

window.addEventListener("scroll", scrollActive)
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section"); // Add this line to define sections

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 50;

      if (
        window.scrollY > sectionTop &&
        window.scrollY <= sectionTop + sectionHeight
      ) {
        current = "#" + section.id;
      }
    });

    navLinks.forEach((navLink) => {
      navLink.classList.remove("active-link");
    });

    if (current) {
      document.querySelector(`a[href="${current}"]`).classList.add("active-link");
    }
  });
});