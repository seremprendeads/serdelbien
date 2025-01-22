 const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

      // Efecto de parallax en scroll
  window.addEventListener('scroll', () => {
    const hero = document.getElementById('hero');
    hero.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
  });



