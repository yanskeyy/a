// Mobile app script

// Register service worker for offline support
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(err => {
        console.log('Service Worker registration failed:', err);
    });
}

// Prevent bouncing scroll on iOS
document.addEventListener('touchmove', function(e) {
    if (e.target === document.body) {
        e.preventDefault();
    }
}, { passive: false });

// Handle button click
function handleButtonClick() {
    const button = event.target;
    button.textContent = '✓ Clicked!';
    button.disabled = true;
    
    setTimeout(() => {
        button.textContent = 'Click Me';
        button.disabled = false;
    }, 1000);
}

// Add to home screen prompt handler
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
});

// Check if running as standalone (installed to home screen)
function isStandaloneMode() {
    return window.navigator.standalone === true;
}

console.log('App loaded successfully');
