document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#0099ff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#0099ff",
                    "opacity": 0.5,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const ctaButtons = document.querySelector('.cta-buttons');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
                if (ctaButtons) ctaButtons.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '80px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = 'white';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
                
                if (ctaButtons) {
                    ctaButtons.style.display = 'flex';
                    ctaButtons.style.flexDirection = 'column';
                    ctaButtons.style.position = 'absolute';
                    ctaButtons.style.top = navLinks.offsetHeight + 80 + 'px';
                    ctaButtons.style.left = '0';
                    ctaButtons.style.width = '100%';
                    ctaButtons.style.backgroundColor = 'white';
                    ctaButtons.style.padding = '0 20px 20px';
                    ctaButtons.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
                }
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Don't prevent default - let Formspree handle it
            // But we can add some UI feedback
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            // Change button text to show loading state
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // If for some reason the form doesn't redirect, reset the button after a delay
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 3000);
        });
    }

    // Animate elements on scroll
    const animateOnScroll = function() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('fade-in');
            }
        });
    };

    // Add fade-in class to all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('animate-section');
    });

    // Initial check for elements in view
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Header background change on scroll
    const header = document.querySelector('header');
    
    const updateHeaderBackground = function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.backgroundColor = 'rgba(18, 18, 18, 0.8)';
            header.style.boxShadow = 'none';
        }
    };
    
    // Initial header check
    updateHeaderBackground();
    
    // Update on scroll
    window.addEventListener('scroll', updateHeaderBackground);

    // Email de-obfuscation to prevent spam bots
    document.querySelectorAll('.email-obfuscated').forEach(span => {
        const user = span.dataset.user;
        const domain = span.dataset.domain;
        const email = `${user}@${domain}`;
        const mailto = `mailto:${email}`;
        
        const link = document.createElement('a');
        link.href = mailto;
        link.textContent = email;
        
        // Replace the placeholder span with the real link
        span.parentNode.replaceChild(link, span);
    });

    // JavaScript Email Obfuscation - Method 2
    function decodeEmail() {
        // Encoded email parts (Base64 encoded to make it less obvious)
        const encodedUser = 'aGVsbG8='; // 'hello' encoded
        const encodedDomain = 'cG9seWNpcmNsZWFpLmNvbQ=='; // 'polycircleai.com' encoded
        
        // Decode the email parts
        const user = atob(encodedUser);
        const domain = atob(encodedDomain);
        const email = user + '@' + domain;
        
        // Create clickable email link
        const emailElement = document.getElementById('email-display');
        if (emailElement) {
            const emailLink = document.createElement('a');
            emailLink.href = 'mailto:' + email;
            emailLink.textContent = email;
            emailLink.style.color = 'inherit';
            emailLink.style.textDecoration = 'none';
            emailElement.parentNode.replaceChild(emailLink, emailElement);
        }
    }
    
    // Call the decode function
    decodeEmail();

    // Mouse-reactive title effect
    const heroTitle = document.querySelector('.hero-content h1');
    const heroSection = document.querySelector('.hero');
    
    if (heroTitle && heroSection) {
        heroSection.addEventListener('mousemove', function(e) {
            const rect = heroSection.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate center of the hero section
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate mouse distance from center
            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;
            
            // Apply transform based on mouse position
            const rotateX = deltaY * 5; // Tilt up/down
            const rotateY = deltaX * 5; // Tilt left/right
            const translateX = deltaX * 10; // Move left/right
            const translateY = deltaY * 10; // Move up/down
            
            // Apply the transform
            heroTitle.style.transform = `
                perspective(1000px) 
                rotateX(${-rotateX}deg) 
                rotateY(${rotateY}deg) 
                translateX(${translateX}px) 
                translateY(${translateY}px)
                scale(${1 + Math.abs(deltaX) * 0.05})
            `;
            
            // Add glow effect based on mouse proximity to title
            const titleRect = heroTitle.getBoundingClientRect();
            const titleCenterX = titleRect.left + titleRect.width / 2;
            const titleCenterY = titleRect.top + titleRect.height / 2;
            const distanceToTitle = Math.sqrt(
                Math.pow(e.clientX - titleCenterX, 2) + 
                Math.pow(e.clientY - titleCenterY, 2)
            );
            
            // Maximum distance for effect (adjust as needed)
            const maxDistance = 300;
            const glowIntensity = Math.max(0, 1 - (distanceToTitle / maxDistance));
            
            // Apply glow effect
            heroTitle.style.filter = `
                drop-shadow(0 0 ${20 + glowIntensity * 30}px rgba(0, 255, 148, ${0.3 + glowIntensity * 0.4}))
                brightness(${1 + glowIntensity * 0.2})
            `;
        });
        
        // Reset title when mouse leaves hero section
        heroSection.addEventListener('mouseleave', function() {
            heroTitle.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateX(0px) translateY(0px) scale(1)';
            heroTitle.style.filter = 'drop-shadow(0 0 20px rgba(0, 255, 148, 0.3)) brightness(1)';
        });
        
        // Add CSS transition for smooth animations
        heroTitle.style.transition = 'transform 0.1s ease-out, filter 0.1s ease-out';
        heroTitle.style.transformOrigin = 'center center';
    }
});
