document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const tabContainer = document.getElementById('tab-container');
    const cardContainer = document.getElementById('card-container');
    const cards = cardContainer.querySelectorAll('.card');
  
    // Animation for the navbar
    gsap.from(navbar, { duration: 1, y: '-100%', ease: 'power2.out' });
  
    // Animation for the tab container
    gsap.from(tabContainer, { duration: 1, x: '-100%', delay: 0.5, ease: 'power2.out' });
  
    // Animation for the car cards
    gsap.from(cards, { duration: 1, opacity: 0, stagger: 0.2, delay: 1, ease: 'power2.out' });
  
    // Function to adjust the footer position
    adjustFooterPosition();
  });
  
  // Function to adjust the footer position
  function adjustFooterPosition() {
    const body = document.body;
    const footer = document.querySelector('footer');
    const bodyHeight = body.clientHeight;
    const windowHeight = window.innerHeight;
  
    if (bodyHeight < windowHeight) {
      footer.style.position = 'absolute';
      footer.style.bottom = 0;
    } else {
      footer.style.position = 'static';
    }
  }
  
  // Call the function on window resize
  window.addEventListener('resize', adjustFooterPosition);