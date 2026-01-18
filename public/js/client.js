const languageToggle = document.getElementById('languageToggle');

if (languageToggle) {
    languageToggle.addEventListener('click', function() {
        const currentLang = window.currentLang || 'en';
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        localStorage.setItem('preferredLanguage', newLang);
        window.location.href = '/?lang=' + newLang;
    });
}

const particlesContainer = document.getElementById('particles');

if (particlesContainer) {
    for (let i = 0; i < 75; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle' + (Math.random() > 0.6 ? ' glow' : '');
        
        const size = Math.random() * 6 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        const colors = [
            'rgba(102, 126, 234, 0.7)',
            'rgba(118, 75, 162, 0.7)',
            'rgba(56, 189, 248, 0.7)',
            'rgba(168, 85, 247, 0.7)',
            'rgba(14, 165, 233, 0.7)'
        ];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
    
    for (let i = 0; i < 8; i++) {
        const star = document.createElement('div');
        star.className = 'shooting-star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 50 + '%';
        star.style.animationDelay = Math.random() * 5 + 's';
        star.style.animationDuration = (Math.random() * 2 + 2) + 's';
        particlesContainer.appendChild(star);
    }
}

const video = document.getElementById('researchVideo');
let audioUnlocked = false;
let videoSectionVisible = false;
let isPlaying = false;
let volumeFadeInterval = null;

function smoothUnmute() {
    if (audioUnlocked || !video) return;
    if (volumeFadeInterval) clearInterval(volumeFadeInterval);
    video.volume = 0;
    video.muted = false;
    let currentVolume = 0;
    volumeFadeInterval = setInterval(() => {
        if (currentVolume < 1.0) {
            currentVolume += 0.05;
            video.volume = Math.min(currentVolume, 1.0);
        } else {
            clearInterval(volumeFadeInterval);
            audioUnlocked = true;
        }
    }, 50);
}

function attemptPlay() {
    if (!video || isPlaying) return;
    video.muted = false;
    video.volume = 1.0;
    video.play().then(() => {
        isPlaying = true;
        audioUnlocked = true;
    }).catch(() => {
        video.muted = true;
        video.volume = 1.0;
        video.play().then(() => {
            isPlaying = true;
            if (audioUnlocked) smoothUnmute();
        }).catch(err => console.log('Playback blocked:', err));
    });
}

if (video) {
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                videoSectionVisible = true;
                attemptPlay();
                setTimeout(() => {
                    if (audioUnlocked && !isPlaying) attemptPlay();
                }, 500);
            } else {
                videoSectionVisible = false;
                if (isPlaying) {
                    video.pause();
                    isPlaying = false;
                }
            }
        });
    }, { threshold: 0.2, rootMargin: '50px' });
    
    videoObserver.observe(video);
    
    function handleUserInteraction() {
        if (audioUnlocked) return;
        smoothUnmute();
        if (isPlaying && video.muted) smoothUnmute();
    }
    
    ['click', 'mousedown', 'touchstart', 'keydown', 'scroll'].forEach(event => {
        document.addEventListener(event, handleUserInteraction, { once: true, passive: true });
    });
}

const sections = document.querySelectorAll('.section');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

sections.forEach(section => sectionObserver.observe(section));
