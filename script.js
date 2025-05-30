document.addEventListener('DOMContentLoaded', function() {
    // Custom cursor
    const cursor = document.querySelector('.custom-cursor');
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    document.addEventListener('mousedown', function() {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    });
    
    document.addEventListener('mouseup', function() {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });
    
    // Parallax effect for hero background
    window.addEventListener('scroll', function() {
        const parallaxBg = document.querySelector('.parallax-bg');
        let scrollPosition = window.pageYOffset;
        parallaxBg.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
    });
    
    // Story windows functionality
    const storyWindows = document.querySelectorAll('.story-window');
    const storyOverlay = document.querySelector('.story-overlay');
    const storyTitle = document.querySelector('.story-title');
    const storyText = document.querySelector('.story-text');
    const closeStory = document.querySelector('.close-story');
    const storyContent = document.getElementById('story-content');
    
    storyWindows.forEach(window => {
        window.addEventListener('click', function() {
            const storyId = this.getAttribute('data-story');
            const content = storyContent.querySelector(`[data-story-id="${storyId}"]`);
            
            if (content) {
                storyTitle.textContent = content.querySelector('h3').textContent;
                storyText.textContent = content.querySelector('p').textContent;
                storyOverlay.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    closeStory.addEventListener('click', function() {
        storyOverlay.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });
    
    // Dacha Roulette functionality
    const rouletteButton = document.querySelector('.roulette-button');
    const rouletteResult = document.querySelector('.roulette-result');
    const rouletteContent = document.getElementById('roulette-content');
    const rouletteItems = rouletteContent.querySelectorAll('.roulette-item');
    
    rouletteButton.addEventListener('click', function() {
        // Random selection
        const randomIndex = Math.floor(Math.random() * rouletteItems.length);
        const selectedItem = rouletteItems[randomIndex];
        
        // Display result with animation
        rouletteResult.textContent = selectedItem.querySelector('p').textContent;
        rouletteResult.classList.add('hidden');
        
        setTimeout(() => {
            rouletteResult.classList.remove('hidden');
        }, 300);
    });
    
    // Website connection
    const websiteConnection = document.getElementById('website-connection');
    const joinBtn = document.getElementById('join-btn');
    
    websiteConnection.addEventListener('click', function() {
        window.open('https://pablogrek.com', '_blank');
    });
    
    joinBtn.addEventListener('click', function() {
        window.open('https://pablogrek.com', '_blank');
    });
    
    // Animated elements (cucumber animations, etc.)
    function createFloatingElement(elementType, parentSelector, className) {
        const parent = document.querySelector(parentSelector);
        const element = document.createElement(elementType);
        element.className = className;
        
        // Random positioning
        const randomTop = Math.random() * 80 + 10; // 10-90%
        const randomLeft = Math.random() * 80 + 10; // 10-90%
        const randomSize = Math.random() * 30 + 20; // 20-50px
        const randomDuration = Math.random() * 20 + 10; // 10-30s
        const randomDelay = Math.random() * 5; // 0-5s
        
        element.style.position = 'absolute';
        element.style.top = randomTop + '%';
        element.style.left = randomLeft + '%';
        element.style.width = randomSize + 'px';
        element.style.height = randomSize * 3 + 'px';
        element.style.backgroundSize = 'contain';
        element.style.backgroundRepeat = 'no-repeat';
        element.style.zIndex = '1';
        element.style.opacity = '0.7';
        element.style.animation = `float ${randomDuration}s ease-in-out ${randomDelay}s infinite alternate`;
        
        parent.appendChild(element);
    }
    
    // Create cucumber floating elements
    for (let i = 0; i < 5; i++) {
        createFloatingElement('div', '#pablos-garden', 'floating-cucumber');
    }
    
    // Create pickle jar floating elements
    for (let i = 0; i < 3; i++) {
        createFloatingElement('div', '#tokenomics', 'floating-jar');
    }
    
    // Add CSS animation for floating elements
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes float {
            0% {
                transform: translateY(0) rotate(0deg);
            }
            50% {
                transform: translateY(-20px) rotate(5deg);
            }
            100% {
                transform: translateY(20px) rotate(-5deg);
            }
        }
        
        .floating-cucumber {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%231a472a"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>');
        }
        
        .floating-jar {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23b89055"><path d="M19 5h-2V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v1H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM9 4h6v1H9V4zm10 15H5V7h14v12z"/></svg>');
        }
    `;
    document.head.appendChild(style);
    
    // Section transitions
    const sections = document.querySelectorAll('.section');
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;
            const isVisible = (sectionTop < window.innerHeight - 100) && (sectionBottom > 100);
            
            if (isVisible) {
                section.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on initial load
    
    // Add CSS for section animations
    const sectionStyle = document.createElement('style');
    sectionStyle.innerHTML = `
        .section {
            opacity: 0;
            transform: translateY(50px);
            transition: opacity 1s ease, transform 1s ease;
        }
        
        .section.active {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(sectionStyle);
}); 