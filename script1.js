// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Fake contact form submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  // Simulate success
  document.getElementById("form-message").textContent = "Thank you! Your message has been sent.";
  this.reset();
});


