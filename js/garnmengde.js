 // Hent elementer
        const calculateBtn = document.getElementById('calculateBtn');
        const resultContainer = document.getElementById('resultContainer');
        const resultNumber = document.getElementById('resultNumber');
        const resultUnit = document.getElementById('resultUnit');
        
        const originalGramPerBallInput = document.getElementById('originalGramPerBall');
        const originalLengthPerBallInput = document.getElementById('originalLengthPerBall');
        const originalBallsNeededInput = document.getElementById('originalBallsNeeded');
        const newGramPerBallInput = document.getElementById('newGramPerBall');
        const newLengthPerBallInput = document.getElementById('newLengthPerBall');

        // Beregn garnmengde
        function calculateYarnAmount() {
            // Hent verdier
            const originalGramPerBall = parseFloat(originalGramPerBallInput.value);
            const originalLengthPerBall = parseFloat(originalLengthPerBallInput.value);
            const originalBallsNeeded = parseFloat(originalBallsNeededInput.value);
            const newGramPerBall = parseFloat(newGramPerBallInput.value);
            const newLengthPerBall = parseFloat(newLengthPerBallInput.value);

            // Valider input
            if (!originalGramPerBall || !originalLengthPerBall || !originalBallsNeeded || 
                !newGramPerBall || !newLengthPerBall ||
                originalGramPerBall <= 0 || originalLengthPerBall <= 0 || originalBallsNeeded <= 0 ||
                newGramPerBall <= 0 || newLengthPerBall <= 0) {
                alert('Vennligst fyll inn alle felt med gyldige verdier.');
                return;
            }

            // Beregn total mengde som trengs fra originaloppskriften
            const totalLengthNeeded = originalLengthPerBall * originalBallsNeeded;
            
            // Beregn hvor mange nøster av det nye garnet som trengs
            const newBallsNeeded = Math.ceil(totalLengthNeeded / newLengthPerBall);

            // Vis resultat
            showResult(newBallsNeeded, totalLengthNeeded);
        }

        function showResult(balls, totalLength) {
            // Oppdater tall
            resultNumber.textContent = balls;
            
            // Sett riktig enhet
            if (balls === 1) {
                resultUnit.textContent = 'nøste';
            } else {
                resultUnit.textContent = 'nøster';
            }

            // Vis resultat-container med animasjon
            resultContainer.style.display = 'block';
            
            // Kort delay for å sikre at CSS-overgang fungerer
            setTimeout(() => {
                resultContainer.classList.add('show');
            }, 10);

            // Scroll til resultatet
            setTimeout(() => {
                resultContainer.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }, 250);

            // Legg til ekstra info i console for debugging
            console.log(`Total lengde som trengs: ${totalLength}m`);
            console.log(`Beregnet: ${balls} nøster av det nye garnet`);
        }

        // Event listener for knappen
        calculateBtn.addEventListener('click', calculateYarnAmount);

        // Tillat Enter-taste i inputfelt
        document.querySelectorAll('input[type="number"]').forEach(input => {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    calculateYarnAmount();
                }
            });
        });

        // Skjul resultat når input endres
        document.querySelectorAll('input[type="number"]').forEach(input => {
            input.addEventListener('input', () => {
                if (resultContainer.classList.contains('show')) {
                    resultContainer.classList.remove('show');
                    setTimeout(() => {
                        resultContainer.style.display = 'none';
                    }, 500);
                }
            });
        });