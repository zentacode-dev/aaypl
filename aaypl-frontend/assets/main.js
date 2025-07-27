// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Scroll to top button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
if (scrollToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.remove('hidden');
    } else {
      scrollToTopBtn.classList.add('hidden');
    }
  });
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Newsletter form alert
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thanks for subscribing to AAYPL newsletter!");
    newsletterForm.reset();
  });
}

// Contact form alert
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    contactForm.reset();
  });
}

// Registration page: Hide/show state dropdown based on country, show WhatsApp redirect message after submit
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  const country = document.getElementById('country');
  const nigeriaStatesDiv = document.getElementById('nigeriaStatesDiv');
  if (country && nigeriaStatesDiv) {
    function toggleStateDropdown() {
      if (country.value === "Nigeria") {
        nigeriaStatesDiv.style.display = "block";
      } else {
        nigeriaStatesDiv.style.display = "none";
      }
    }
    country.addEventListener('change', toggleStateDropdown);
    toggleStateDropdown();
  }
  registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Actually submit to Formspree via AJAX for demo (optional), but we'll just show a message:
    document.getElementById('regSuccessMsg').classList.remove('hidden');
    setTimeout(() => {
      // Optionally, redirect to WhatsApp group here based on state (demo: just open WhatsApp main link)
      window.location.href = "https://wa.me/2348000000000";
    }, 2000);
    registerForm.reset();
  });
}