// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60, // Adjust offset for fixed headers
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Back-to-top button functionality
  const backToTopButton = document.createElement('button');
  backToTopButton.textContent = '↑';
  backToTopButton.id = 'back-to-top';
  backToTopButton.style.position = 'fixed';
  backToTopButton.style.bottom = '20px';
  backToTopButton.style.right = '20px';
  backToTopButton.style.padding = '10px 15px';
  backToTopButton.style.border = 'none';
  backToTopButton.style.borderRadius = '5px';
  backToTopButton.style.backgroundColor = '#1c1c1c';
  backToTopButton.style.color = '#fff';
  backToTopButton.style.display = 'none';
  backToTopButton.style.cursor = 'pointer';
  document.body.appendChild(backToTopButton);
  
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Show/hide back-to-top button on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
  
  // Highlight active section in navigation
  const sections = document.querySelectorAll('main section');
  const navLinks = document.querySelectorAll('nav a');
  
  window.addEventListener('scroll', () => {
    let currentSection = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100; // Adjust for header height
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
  