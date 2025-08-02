// Smooth typewriter effect
const text = "ML Engineering Student";
const typewriter = document.getElementById('typewriter');
const heroTitle = document.querySelector('.hero-title');
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typewriter.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 80); // Faster typing speed
    } else {
        // Typing complete - smooth transformation
        setTimeout(() => {
            typewriter.classList.add('hide-cursor');
            heroTitle.classList.remove('typing');
            heroTitle.classList.add('typing-complete');
        }, 800); // Shorter wait time
    }
}

// Start typing animation with shorter delay
window.addEventListener('load', () => {
    setTimeout(typeWriter, 800); // Reduced delay
});

// Enhanced smooth scrolling
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Optimized navbar background with smooth transition
let ticking = false;
function updateNavbar() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(10, 10, 15, 0.95)';
        nav.style.backdropFilter = 'blur(20px)';
    } else {
        nav.style.background = 'rgba(10, 10, 15, 0.8)';
        nav.style.backdropFilter = 'blur(20px)';
    }
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateNavbar);
        ticking = true;
    }
});

// Enhanced scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate cards with stagger effect
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = `all 0.6s ease ${index * 0.15}s`;
        observer.observe(card);
    });
}