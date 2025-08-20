// This file contains the JavaScript code for the portfolio. It handles interactive features such as form submissions, animations, and any dynamic content updates.

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    const formMsg = document.getElementById('form-message');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            formMsg.textContent = "Thank you for your message! I will reply shortly.";
            formMsg.classList.add('visible');
            formMsg.classList.remove('hidden');
            const formData = new FormData(contactForm);
            // Here you can handle the form data, e.g., send it to a server
            alert('Form submitted! Thank you for your message.');
            contactForm.reset();
            setTimeout(() => {
                formMsg.classList.add('hidden');
            }, 4000);
        });
    }

    // Example of a simple animation on scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Thème clair/sombre
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
    });

    // Scroll fluide et menu actif
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    window.addEventListener('scroll', () => {
        let fromTop = window.scrollY + 80;
        document.querySelectorAll('nav a').forEach(link => {
            let section = document.querySelector(link.hash);
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
});