// ============================================
// SENSORY OVERLOAD WIKI - INTERACTIVE SCRIPT
// Making the weird feel weirder
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all interactive features
    initNavigation();
    initHoverEffects();
    initAudioHooks();
    initMouseParallax();
    initPerlinNoise();
});

// ============================================
// NAVIGATION
// ============================================

function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.content-section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            
            // Update active nav button
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update active section
            sections.forEach(section => section.classList.remove('active'));
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add('active');
                // Play subtle sound if audio loaded
                playSound('nav-switch');
            }
        });
    });
}

// ============================================
// HOVER EFFECTS - SUBTLE BLUR & SHIFT
// ============================================

function initHoverEffects() {
    const hoverElements = document.querySelectorAll('.nav-btn, .content-card, .level-card');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            // Subtle chromatic aberration on hover
            element.style.filter = 'blur(0.3px)';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.filter = 'blur(0px)';
        });
    });
}

// ============================================
// AUDIO HOOKS - FOR FUTURE ASSET IMPLEMENTATION
// ============================================

function initAudioHooks() {
    // Create audio context (silent for now, will be filled with assets)
    window.audioContext = {
        sounds: {},
        isEnabled: true
    };
    
    // Hook system for when audio assets are added
    // Usage: playSound('event-name') will look for audio file in assets/
}

function playSound(eventName) {
    // This function will play sounds when audio files are in assets folder
    // Sound files expected: assets/sounds/[eventName].mp3
    // For now, this is a placeholder that won't error if sounds aren't present
    
    if (!window.audioContext.isEnabled) return;
    
    const soundPath = `assets/sounds/${eventName}.mp3`;
    // Audio loading will be added when assets are available
    // console.log(`[Audio Hook] Ready to play: ${soundPath}`);
}

// ============================================
// MOUSE PARALLAX EFFECT - SUBTLE OFFSET
// ============================================

function initMouseParallax() {
    const parallaxElements = document.querySelectorAll('.content-card');
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        parallaxElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const elementCenterX = rect.left + rect.width / 2;
            const elementCenterY = rect.top + rect.height / 2;
            
            // Only apply effect if mouse is near the element
            const distance = Math.sqrt(
                Math.pow(e.clientX - elementCenterX, 2) +
                Math.pow(e.clientY - elementCenterY, 2)
            );
            
            if (distance < 300) {
                const offsetX = (mouseX - 0.5) * 2;
                const offsetY = (mouseY - 0.5) * 2;
                
                element.style.transform = `perspective(1000px) rotateX(${offsetY * 2}deg) rotateY(${offsetX * 2}deg) translateZ(10px)`;
            } else {
                element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
            }
        });
    });
}

// ============================================
// PERLIN NOISE-LIKE DRIFT EFFECT
// ============================================

function initPerlinNoise() {
    // Creates a subtle "something is off" feeling without being jarring
    const driftElement = document.querySelector('.background-drift');
    
    let time = 0;
    const animate = () => {
        time += 0.005;
        
        // Subtle drift calculations
        const drift1 = Math.sin(time * 0.5) * 30;
        const drift2 = Math.cos(time * 0.3) * 20;
        
        driftElement.style.transform = `translate(${drift1}px, ${drift2}px)`;
        
        requestAnimationFrame(animate);
    };
    
    animate();
}

// ============================================
// KEYBOARD ACCESSIBILITY
// ============================================

document.addEventListener('keydown', (e) => {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    // Tab key navigation support
    if (e.key === 'Tab') {
        // Focus management will be handled by browser
    }
    
    // Optional: Arrow key navigation between sections
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const activeButton = document.querySelector('.nav-btn.active');
        const buttonArray = Array.from(navButtons);
        const currentIndex = buttonArray.indexOf(activeButton);
        
        let nextIndex;
        if (e.key === 'ArrowRight') {
            nextIndex = (currentIndex + 1) % buttonArray.length;
        } else {
            nextIndex = (currentIndex - 1 + buttonArray.length) % buttonArray.length;
        }
        
        buttonArray[nextIndex].click();
    }
});

// ============================================
// WINDOW FOCUS HANDLER
// ============================================

window.addEventListener('focus', () => {
    // Resume animations if they were paused
    document.body.style.animationPlayState = 'running';
});

window.addEventListener('blur', () => {
    // Optionally pause animations to save performance
    // document.body.style.animationPlayState = 'paused';
});

// ============================================
// ASSET LOADER - READY FOR FUTURE USE
// ============================================

class AssetLoader {
    constructor() {
        this.loadedAssets = {
            images: {},
            sounds: {}
        };
    }
    
    // Will be used when assets are added to /assets folder
    loadImage(imageName) {
        const path = `assets/images/${imageName}`;
        // Implementation when images are available
        return path;
    }
    
    loadSound(soundName) {
        const path = `assets/sounds/${soundName}.mp3`;
        // Implementation when sounds are available
        return path;
    }
    
    // Future implementation for dynamic level loading
    loadLevelData(levelName) {
        // When dev provides level names, we can load them here
        console.log(`[Asset Loader] Ready to load level: ${levelName}`);
    }
}

window.assetLoader = new AssetLoader();

// ============================================
// PERFORMANCE MONITORING
// ============================================

// Optionally track performance for optimization
const performanceMonitor = {
    fps: 0,
    frameCount: 0,
    lastTime: performance.now(),
    
    update: function() {
        this.frameCount++;
        const currentTime = performance.now();
        
        if (currentTime >= this.lastTime + 1000) {
            this.fps = this.frameCount;
            this.frameCount = 0;
            this.lastTime = currentTime;
            // Uncomment to debug FPS
            // console.log(`FPS: ${this.fps}`);
        }
        
        requestAnimationFrame(() => this.update());
    }
};

// Uncomment to enable performance monitoring
// performanceMonitor.update();

// ============================================
// EASTER EGGS & HIDDEN FEATURES
// ============================================

// Konami code for a special effect
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        
        if (konamiIndex === konamiCode.length) {
            activateKonamiMode();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateKonamiMode() {
    // When Konami code is entered, apply extra glitch effect
    document.body.style.filter = 'hue-rotate(360deg)';
    
    setTimeout(() => {
        document.body.style.filter = 'hue-rotate(0deg)';
        document.body.style.animation = 'konami-pulse 0.5s ease-out';
    }, 500);
    
    playSound('easter-egg');
}

// ============================================
// SCROLL DETECTION FOR FUTURE ANIMATIONS
// ============================================

window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    // Can be used to trigger animations or sounds based on scroll position
    // console.log(`Scroll: ${scrollPercent.toFixed(2)}%`);
});

// ============================================
// FUTURE: LEVEL NAME UPDATER
// ============================================

// When dev provides level names, use this function:
function updateLevelData(levelsData) {
    const levelCards = document.querySelectorAll('.level-card');
    
    levelCards.forEach((card, index) => {
        if (levelsData[index]) {
            const { name, description, intensity, type } = levelsData[index];
            
            card.querySelector('h3').textContent = name;
            card.querySelector('p').textContent = description;
            
            const stats = card.querySelector('.level-stats');
            stats.innerHTML = `
                <span class="stat">Intensity: <span class="value">${intensity}</span></span>
                <span class="stat">Type: <span class="value">${type}</span></span>
            `;
        }
    });
}

// Usage when dev provides data:
// const levelData = [...]; 
// updateLevelData(levelData);

console.log('%cSensory Overload Wiki loaded. Ready for chaos.', 'color: #ff006e; font-size: 14px; font-weight: bold;');
