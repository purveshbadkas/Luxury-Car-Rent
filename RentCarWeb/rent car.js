window.addEventListener('scroll', function() {
    var navbarTop = document.querySelector('.navbar-top');
    if (window.pageYOffset > 0) {
      navbarTop.classList.add('scrolled');
    } else {
      navbarTop.classList.remove('scrolled');
    }
  });
  
  window.addEventListener('load', function() {
    // Select elements with class animate-left
    var elementsToAnimateLeft = document.querySelectorAll('.main-content');
    // Loop through elements with class animate-left
    elementsToAnimateLeft.forEach(function(element) {
      // Add animation class for sliding in from the left
      element.classList.add('main-content');
    });
  
    // Select elements with class animate-right
    var elementsToAnimateRight = document.querySelectorAll('.tab-container');
    // Loop through elements with class animate-right
    elementsToAnimateRight.forEach(function(element) {
      // Add animation class for sliding in from the right
      element.classList.add('tab-container');
    });
  
    // Add additional animation classes for other classes if needed
  });
  
  // Wait for the DOM to load
  document.addEventListener('DOMContentLoaded', function() {
    // Select the elements to animate
    const carImage = document.querySelector('.car-image img');
    const inputFields = document.querySelectorAll('.form-group input');
    const submit = document.querySelector('.tab-container');
    const heading = document.querySelector('.content-heading');
    const paragraph = document.querySelector('.paragraph');
    const para = document.querySelector('.heading');
  
    // Animate the car image on page load
    gsap.fromTo(
      carImage,
      { y: 300, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power.inout' }
    );
  
    // Animate the input fields on page load
    gsap.fromTo(
      inputFields,
      { y: 70, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'power2.out', stagger: 0 }
    );
    gsap.fromTo(
      heading,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 3, ease: 'power2.out', stagger: 0.5 }
    );
    gsap.fromTo(
      paragraph,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 3, ease: 'power2.out', stagger: 0.5 }
    );
    gsap.fromTo(
      para,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 3, ease: 'power2.out', stagger: 0.5 }
    );
    gsap.fromTo(
      submit,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: 'power2.out' }
    );
  
    // Add hover effect to the car image
    carImage.addEventListener('mouseenter', () => {
      gsap.to(carImage, { scale: 1.05, duration: 0.3 });
    });
    carImage.addEventListener('mouseleave', () => {
      gsap.to(carImage, { scale: 1, duration: 0.3 });
    });
  
    // Add hover effect to the input fields
    inputFields.forEach((inputField) => {
      inputField.addEventListener('mouseenter', () => {
        gsap.to(inputField, { x: 10, duration: 0.3 });
      });
      inputField.addEventListener('mouseleave', () => {
        gsap.to(inputField, { x: 0, duration: 0.3 });
      });
    });
  
    // Scroll to the top of the page when everything is loaded
    window.scrollTo({ top: -100, behavior: 'smooth' });
  });