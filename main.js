// Configuration AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }
});

// Gestion du menu mobile
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      
      // Animation du bouton hamburger
      const icon = menuToggle.querySelector('svg');
      if (mobileMenu.classList.contains('hidden')) {
        icon.style.transform = 'rotate(0deg)';
      } else {
        icon.style.transform = 'rotate(90deg)';
      }
    });
  }
}

// Gestion du formulaire de contact
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Récupération des données du formulaire
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);
      
      // Validation des champs
      if (!validateForm(data)) {
        return;
      }
      
      // Simulation d'envoi avec animation
      showLoadingState();
      
      setTimeout(() => {
        hideLoadingState();
        showSuccessMessage();
        contactForm.reset();
      }, 2000);
    });
  }
}

// Validation du formulaire
function validateForm(data) {
  const requiredFields = ['nom', 'prenom', 'telephone', 'email', 'cabinet', 'sujet', 'message'];
  let isValid = true;
  
  requiredFields.forEach(field => {
    const input = document.getElementById(field);
    if (!data[field] || data[field].trim() === '') {
      showFieldError(input, 'Ce champ est obligatoire');
      isValid = false;
    } else {
      clearFieldError(input);
    }
  });
  
  // Validation email
  const emailInput = document.getElementById('email');
  if (data.email && !isValidEmail(data.email)) {
    showFieldError(emailInput, 'Veuillez entrer un email valide');
    isValid = false;
  }
  
  // Validation téléphone
  const phoneInput = document.getElementById('telephone');
  if (data.telephone && !isValidPhone(data.telephone)) {
    showFieldError(phoneInput, 'Veuillez entrer un numéro de téléphone valide');
    isValid = false;
  }
  
  return isValid;
}

// Validation email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validation téléphone
function isValidPhone(phone) {
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
  return phoneRegex.test(phone);
}

// Affichage d'erreur pour un champ
function showFieldError(input, message) {
  clearFieldError(input);
  
  input.classList.add('border-red-500', 'ring-2', 'ring-red-200');
  
  const errorDiv = document.createElement('div');
  errorDiv.className = 'field-error text-red-500 text-sm mt-1';
  errorDiv.textContent = message;
  
  input.parentNode.appendChild(errorDiv);
}

// Suppression d'erreur pour un champ
function clearFieldError(input) {
  input.classList.remove('border-red-500', 'ring-2', 'ring-red-200');
  
  const existingError = input.parentNode.querySelector('.field-error');
  if (existingError) {
    existingError.remove();
  }
}

// État de chargement
function showLoadingState() {
  const submitBtn = document.querySelector('#contact-form button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Envoi en cours...';
  submitBtn.classList.add('opacity-75');
  
  // Stocker le texte original pour le restaurer
  submitBtn.dataset.originalText = originalText;
}

// Masquer l'état de chargement
function hideLoadingState() {
  const submitBtn = document.querySelector('#contact-form button[type="submit"]');
  
  submitBtn.disabled = false;
  submitBtn.innerHTML = submitBtn.dataset.originalText;
  submitBtn.classList.remove('opacity-75');
}

// Message de succès
function showSuccessMessage() {
  // Créer une notification toast
  const toast = document.createElement('div');
  toast.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
  toast.innerHTML = `
    <div class="flex items-center">
      <i class="fa-solid fa-check-circle mr-3"></i>
      <span>Votre message a été envoyé avec succès !</span>
    </div>
  `;
  
  document.body.appendChild(toast);
  
  // Animation d'entrée
  setTimeout(() => {
    toast.classList.remove('translate-x-full');
  }, 100);
  
  // Animation de sortie
  setTimeout(() => {
    toast.classList.add('translate-x-full');
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 4000);
}

// Effets visuels pour les cartes de cabinet
function initCabinetCards() {
  const cards = document.querySelectorAll('.cabinet-card');
  
  cards.forEach(card => {
    // Effet de parallaxe au scroll
    window.addEventListener('scroll', () => {
      const rect = card.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        card.style.transform = `translateY(${rate * 0.1}px)`;
      }
    });
    
    // Effet de survol avec rotation légère
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px) rotate(1deg)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) rotate(0deg)';
    });
  });
}

// Animation des icônes
function initIconAnimations() {
  const icons = document.querySelectorAll('.info-item i');
  
  icons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      icon.style.transform = 'scale(1.3) rotate(10deg)';
      icon.style.color = 'var(--azur)';
    });
    
    icon.addEventListener('mouseleave', () => {
      icon.style.transform = 'scale(1) rotate(0deg)';
      icon.style.color = 'var(--magenta)';
    });
  });
}

// Smooth scroll pour les liens d'ancrage
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// FAQ accordion
function initFAQAccordion() {
  const toggles = document.querySelectorAll('.faq-toggle');
  if (!toggles.length) return;

  toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const content = toggle.parentElement?.querySelector('.faq-content');
      const chevron = toggle.querySelector('.fa-chevron-down');
      if (!content) return;

      content.classList.toggle('hidden');
      if (chevron) {
        chevron.classList.toggle('rotate-180');
        chevron.style.transition = 'transform 200ms';
      }
    });
  });
}

// Initialisation de toutes les fonctionnalités
document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
  initContactForm();
  initCabinetCards();
  initIconAnimations();
  initSmoothScroll();
  initFAQAccordion();
  
  // Animation d'entrée pour les éléments
  const animatedElements = document.querySelectorAll('[data-aos]');
  animatedElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.1}s`;
  });
});

// Gestion des erreurs globales
window.addEventListener('error', function(e) {
  console.error('Erreur JavaScript:', e.error);
});

// Performance monitoring
window.addEventListener('load', function() {
  console.log('Page chargée avec succès');
  // Init Swiper testimonials if present
  if (typeof Swiper !== 'undefined') {
    const swiperEl = document.querySelector('.swiper');
    if (swiperEl) {
      new Swiper('.swiper', {
        loop: true,
        speed: 600,
        spaceBetween: 24,
        slidesPerView: 1,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
      });
    }
  }
});
