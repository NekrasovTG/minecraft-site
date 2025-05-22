
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initSwiper();
    initAOS();
    initCopyIP();
    initMobileMenu();
    initOnlineCounter();
    initScrollAnimation();
});

function initParticles() {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#2ecc71'
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.5,
                random: true
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#2ecc71',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            }
        },
        retina_detect: true
    });
}

function initSwiper() {
    new Swiper('.news-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
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
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    });
}

function initAOS() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
}

function initCopyIP() {
    const copyBtn = document.querySelector('.copy-ip');
    const ip = document.querySelector('.ip').textContent;

    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(ip).then(() => {
            copyBtn.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(() => {
                copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
            }, 2000);
        });
    });
}

function initMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

function initOnlineCounter() {
    const playerCount = document.querySelector('.player-count');
    let count = parseInt(playerCount.textContent);

    setInterval(() => {
        const variation = Math.floor(Math.random() * 11) - 5;
        count = Math.max(0, count + variation);
        playerCount.textContent = count;
        
        if (variation > 0) {
            playerCount.style.color = '#2ecc71';
        } else if (variation < 0) {
            playerCount.style.color = '#e74c3c';
        }
        
        setTimeout(() => {
            playerCount.style.color = '';
        }, 500);
    }, 5000);
}

function initScrollAnimation() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        });
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(17, 17, 17, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'rgba(17, 17, 17, 0.8)';
        navbar.style.backdropFilter = 'blur(5px)';
    }
});

document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.feature-card, .donate-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});
