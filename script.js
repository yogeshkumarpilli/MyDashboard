// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70, // Account for fixed header
            behavior: 'smooth'
        });
    });
});

// Sticky navigation on scroll
const header = document.querySelector('header');
const heroSection = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.boxShadow = 'none';
    }
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // This is where you would normally send the form data to a server
        // For this example, we'll just show a success message
        
        const formElements = contactForm.elements;
        let isValid = true;
        
        // Simple validation
        for (let i = 0; i < formElements.length; i++) {
            if (formElements[i].required && !formElements[i].value) {
                isValid = false;
                formElements[i].style.borderColor = 'red';
            } else {
                formElements[i].style.borderColor = '';
            }
        }
        
        if (isValid) {
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.textContent = 'Thank you! Your message has been sent.';
            successMessage.style.color = '#28a745';
            successMessage.style.marginTop = '10px';
            
            contactForm.appendChild(successMessage);
            
            // Reset form
            contactForm.reset();
            
            // Remove message after 3 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 3000);
        }
    });
}

// Animation on scroll - fade in elements
const fadeElements = document.querySelectorAll('.project-card, .skill, .contact-item');

const fadeInOnScroll = function() {
    fadeElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animations
fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Add scroll event
window.addEventListener('scroll', fadeInOnScroll);
// Trigger once on page load
fadeInOnScroll();
