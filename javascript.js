//   i am section
  const words = ["developer", "problem solver", "programmer"];
  const typingSpeed = 130;
  const erasingSpeed = 70;
  const delayBetweenWords = 1500;

  let wordIndex = 0;
  let charIndex = 0;
  const typewriterElement = document.getElementById("typewriter");

  function type() {
    if (charIndex < words[wordIndex].length) {
      typewriterElement.textContent += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, delayBetweenWords);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typewriterElement.textContent = words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    }
  }

  // Start the animation
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, 1000);
  });


//   other 
window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });

      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
              top: offsetTop,
              behavior: "smooth",
            });
          }
        });
      });

      // Fade in animation on scroll
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      }, observerOptions);

      document.querySelectorAll(".fade-in").forEach((el) => {
        observer.observe(el);
      });

      // Active nav link highlighting
      window.addEventListener("scroll", function () {
        const sections = document.querySelectorAll("section[id]");
        const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

        let current = "";
        sections.forEach((section) => {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.offsetHeight;
          if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
          ) {
            current = section.getAttribute("id");
          }
        });

        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
          }
        });
      });

      // Close mobile menu when link is clicked
      document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
        link.addEventListener("click", () => {
          const navbarToggler = document.querySelector(".navbar-toggler");
          const navbarCollapse = document.querySelector(".navbar-collapse");
          if (navbarCollapse.classList.contains("show")) {
            navbarToggler.click();
          }
        });
      });


// Custom cursor Starts 
const cursorDot = document.querySelector('.cursor-dot');
    const cursorRing = document.querySelector('.cursor-ring');

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let firstMove=true;

    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';

    // Update cursor position
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top = mouseY + 'px';
    });

    // Animate ring with easing
    function animateRing() {
      ringX += (mouseX - ringX) / 6;
      ringY += (mouseY - ringY) / 6;
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top = ringY + 'px';
      requestAnimationFrame(animateRing);
    }
    animateRing();

    // Optional: click effect
    document.addEventListener('click', () => {
      cursorRing.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursorRing.style.boxShadow = '0 0 30pxrgb(243, 243, 243), 0 0 60px #00ffff';
      setTimeout(() => {
        cursorRing.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorRing.style.boxShadow = '0 0 10px #00ffff, 0 0 20px #00ffff';
      }, 150);
    });
