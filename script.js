document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Fade-in animation for initial load elements
    const heroContent = document.querySelector('.hero-content');
    const revisionCharacter = document.querySelector('.revision-guide-character');
    if (heroContent) {
        heroContent.style.opacity = 0;
        heroContent.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            heroContent.style.opacity = 1;
            heroContent.style.transform = 'translateY(0)';
        }, 100); // Small delay to ensure CSS is applied before animation

        if (revisionCharacter) {
            revisionCharacter.style.opacity = 0;
            revisionCharacter.style.transform = 'translateX(50px)';
            setTimeout(() => {
                revisionCharacter.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
                revisionCharacter.style.opacity = 1;
                revisionCharacter.style.transform = 'translateX(0)';
            }, 300); // Slightly delayed
        }
    }


    // Intersection Observer for scroll animations
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll, .section-title, .overview-item');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the item is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('section-title') || entry.target.classList.contains('hero-content')) {
                    entry.target.classList.add('fade-in-up');
                } else if (entry.target.classList.contains('overview-item')) {
                    // Specific animations for overview items based on their position
                    if (entry.target.classList.contains('slide-in-left')) {
                        entry.target.style.animation = `slideInLeft 0.8s ease-out forwards ${entry.target.classList.contains('delay-1') ? '0.2s' : ''} ${entry.target.classList.contains('delay-2') ? '0.4s' : ''}`;
                    } else if (entry.target.classList.contains('slide-in-up')) {
                         entry.target.style.animation = `slideInUp 0.8s ease-out forwards ${entry.target.classList.contains('delay-1') ? '0.2s' : ''} ${entry.target.classList.contains('delay-2') ? '0.4s' : ''}`;
                    } else if (entry.target.classList.contains('slide-in-right')) {
                         entry.target.style.animation = `slideInRight 0.8s ease-out forwards ${entry.target.classList.contains('delay-1') ? '0.2s' : ''} ${entry.target.classList.contains('delay-2') ? '0.4s' : ''}`;
                    }
                } else {
                    entry.target.classList.add('is-visible');
                }
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    animateOnScrollElements.forEach(el => {
        observer.observe(el);
    });
});

// Animation for mobile nav links
@keyframes navLinkFade {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
}
