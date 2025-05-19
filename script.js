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

    // Fade-in animation for initial load elements (Hero section)
    const heroContent = document.querySelector('.hero-content');
    const revisionCharacter = document.querySelector('.revision-guide-character');

    // Add console logs to check if elements are found
    console.log('DOMContentLoaded fired.');
    console.log('Hero Content element found:', heroContent);
    console.log('Revision Character element found:', revisionCharacter);


    // Only apply initial opacity and animation if the elements exist (i.e., on index.html)
    // The initial opacity: 0 is now set in CSS for these specific elements
    if (heroContent) {
        // Use a small timeout to ensure the CSS has been applied before trying to animate
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            heroContent.style.opacity = 1;
            heroContent.style.transform = 'translateY(0)'; // Animate transform as well
             console.log('Hero Content animation applied.');
        }, 100); // Small delay
    } else {
         console.log('Hero Content element not found. Skipping animation.');
    }

    if (revisionCharacter) {
         // Use a small timeout to ensure the CSS has been applied before trying to animate
         setTimeout(() => {
             revisionCharacter.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
             revisionCharacter.style.opacity = 1;
             revisionCharacter.style.transform = 'translateX(0)'; // Animate transform as well
             console.log('Revision Character animation applied.');
         }, 300); // Slightly delayed
     } else {
         console.log('Revision Character element not found. Skipping animation.');
     }


    // Intersection Observer for scroll animations
    // Select elements that should animate on scroll, excluding the hero section elements handled above
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll:not(.hero-content):not(.revision-guide-character)');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the item is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'is-visible' class to trigger the animation defined in CSS
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    // Observe each element selected for scroll animation
    animateOnScrollElements.forEach(el => {
        observer.observe(el);
    });

    // --- Debugging Tip ---
    // If animations or elements are not appearing as expected,
    // open your browser's Developer Tools (usually F12), go to the 'Console' tab,
    // and look for any red error messages. These messages can help identify
    // issues in the JavaScript code or file loading. Also check the 'Network' tab
    // to see if your CSS and JS files are loading correctly (status code 200).
});

// Animation for mobile nav links (CSS animation, not JS)
// @keyframes navLinkFade { ... } // This animation is defined in style.css
