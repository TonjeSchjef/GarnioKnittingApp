let count = 0;

const counterDisplay = document.getElementById('counterDisplay');
const minusBtn = document.getElementById('minusBtn');
const plusBtn = document.getElementById('plusBtn');
const resetBtn = document.getElementById('resetBtn');

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
            console.log('Reset button clicked'); // For testing
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
            
            if (Math.abs(diff) > 50) { // Minimum swipe distance
                if (diff > 0) {
                    increment(); // Swipe up = increment
                } else {
                    decrement(); // Swipe down = decrement
                }
            }
        });

        // Initialiser appen
        loadCounter();

        // Legg til smooth overgang for counter display
        counterDisplay.style.transition = 'transform 0.15s ease';