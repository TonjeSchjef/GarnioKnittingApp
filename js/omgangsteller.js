let count = 0;
let wakeLock = null;

const counterDisplay = document.getElementById('counterDisplay');
const minusBtn = document.getElementById('minusBtn');
const plusBtn = document.getElementById('plusBtn');
const resetBtn = document.getElementById('resetBtn');

// Wake Lock funktionalitet
async function requestWakeLock() {
    try {
        if ('wakeLock' in navigator) {
            wakeLock = await navigator.wakeLock.request('screen');
            console.log('Wake Lock aktivert - skjermen vil ikke gå i dvale');
            
            wakeLock.addEventListener('release', () => {
                console.log('Wake Lock frigjort');
            });
        } else {
            console.log('Wake Lock er ikke støttet i denne nettleseren');
            // Fallback: Bruk NoSleep.js eller andre metoder
            fallbackPreventSleep();
        }
    } catch (err) {
        console.error('Kunne ikke aktivere Wake Lock:', err);
        fallbackPreventSleep();
    }
}

// Frigjør Wake Lock
function releaseWakeLock() {
    if (wakeLock !== null) {
        wakeLock.release();
        wakeLock = null;
        console.log('Wake Lock deaktivert');
    }
}

// Fallback metode for eldre nettlesere
function fallbackPreventSleep() {
    // Lag et usynlig video-element som spiller i loop
    const video = document.createElement('video');
    video.setAttribute('muted', '');
    video.setAttribute('loop', '');
    video.setAttribute('playsinline', '');
    video.style.position = 'fixed';
    video.style.top = '-1px';
    video.style.left = '-1px';
    video.style.width = '1px';
    video.style.height = '1px';
    video.style.opacity = '0';
    video.style.pointerEvents = 'none';
    
    // Lag en minimal video data URL (1x1 piksel, svart)
    video.src = 'data:video/mp4;base64,AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAAbmF0PXdpZHRoPTEgaGVpZ2h0PTEgZmZtdD0weDAwMDAwMDAwIGxlbmd0aD0xNiBidGFnPTA=';
    
    document.body.appendChild(video);
    
    // Prøv å spille videoen
    video.play().catch(e => {
        console.log('Fallback video kunne ikke starte:', e);
    });
    
    // Lagre referanse for senere fjerning
    window.garnioPreventSleepVideo = video;
}

// Stopp fallback metode
function stopFallbackPreventSleep() {
    if (window.garnioPreventSleepVideo) {
        window.garnioPreventSleepVideo.pause();
        document.body.removeChild(window.garnioPreventSleepVideo);
        window.garnioPreventSleepVideo = null;
    }
}

// Last inn lagret verdi fra localStorage
function loadCounter() {
    const savedCount = localStorage.getItem('garnio-counter');
    if (savedCount !== null) {
        count = parseInt(savedCount);
        updateDisplay();
    }
}

// Lagre verdi til localStorage
function saveCounter() {
    localStorage.setItem('garnio-counter', count.toString());
}

// Oppdater visningen
function updateDisplay() {
    counterDisplay.textContent = count;
    
    // Legg til animasjon
    counterDisplay.style.transform = 'scale(1.1)';
    setTimeout(() => {
        counterDisplay.style.transform = 'scale(1)';
    }, 150);
}

// Øk telleren
function increment() {
    count++;
    updateDisplay();
    saveCounter();
}

// Reduser telleren
function decrement() {
    if (count > 0) {
        count--;
        updateDisplay();
        saveCounter();
    }
}

// Nullstill telleren
function reset() {
    count = 0;
    updateDisplay();
    saveCounter();
    console.log('Reset button clicked');
}

// Event listeners
plusBtn.addEventListener('click', increment);
minusBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);

// Tastaturnavigasjon
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowUp':
        case '+':
            e.preventDefault();
            increment();
            break;
        case 'ArrowDown':
        case '-':
            e.preventDefault();
            decrement();
            break;
        case 'r':
        case 'R':
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
                reset();
            }
            break;
    }
});

// Støtte for touch-gester (swipe)
let startY = 0;
let endY = 0;

counterDisplay.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
});

counterDisplay.addEventListener('touchend', (e) => {
    endY = e.changedTouches[0].clientY;
    const diff = startY - endY;
    
    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            increment();
        } else {
            decrement();
        }
    }
});

// Håndter når siden blir synlig/skjult
document.addEventListener('visibilitychange', async () => {
    if (document.visibilityState === 'visible') {
        // Siden er synlig - reaktiver Wake Lock
        await requestWakeLock();
    } else {
        // Siden er skjult - frigjør Wake Lock (sparer batteri)
        releaseWakeLock();
        stopFallbackPreventSleep();
    }
});

// Håndter når bruker forlater siden
window.addEventListener('beforeunload', () => {
    releaseWakeLock();
    stopFallbackPreventSleep();
});

// Initialiser appen
loadCounter();

// Aktiver Wake Lock når siden lastes
requestWakeLock();

// Legg til smooth overgang for counter display
counterDisplay.style.transition = 'transform 0.15s ease';

// Valgfritt: Legg til en toggle-knapp for Wake Lock
function createWakeLockToggle() {
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = 'Forhindre dvale: PÅ';
    toggleBtn.style.cssText = `
        position: fixed;
        bottom: 10px;
        left: 10px;
        padding: 8px 12px;
        background: #4CAF50;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 12px;
        cursor: pointer;
        z-index: 1000;
    `;
    
    let wakeLockEnabled = true;
    
    toggleBtn.addEventListener('click', async () => {
        if (wakeLockEnabled) {
            releaseWakeLock();
            stopFallbackPreventSleep();
            toggleBtn.textContent = 'Forhindre dvale: AV';
            toggleBtn.style.background = '#f44336';
            wakeLockEnabled = false;
        } else {
            await requestWakeLock();
            toggleBtn.textContent = 'Forhindre dvale: PÅ';
            toggleBtn.style.background = '#4CAF50';
            wakeLockEnabled = true;
        }
    });
    
    document.body.appendChild(toggleBtn);
}

// Uncomment denne linjen hvis du vil ha en toggle-knapp:
// createWakeLockToggle();