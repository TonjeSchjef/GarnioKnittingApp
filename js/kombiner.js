// Kombiner 2-tråder til 1 tråd kalkulator

// DOM elementer
const yarn1Name = document.getElementById('yarn1-name');
const yarn2Name = document.getElementById('yarn2-name');
const findAlternativeBtn = document.getElementById('findAlternativeBtn');
const resultsContainer = document.getElementById('resultsContainer');
const resultsList = document.getElementById('resultsList');

// Dropdown elementer
const dropdown1 = document.getElementById('dropdown1');
const dropdown2 = document.getElementById('dropdown2');

// Event listener for søkeknapp
findAlternativeBtn.addEventListener('click', findAlternatives);

// Event listeners for Enter-tast i input-feltene
[yarn1Name, yarn2Name].forEach(input => {
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            findAlternatives();
        }
    });
});

// Autocomplete for garn 1
yarn1Name.addEventListener('input', (e) => {
    showDropdown(e.target.value, dropdown1, yarn1Name);
});

yarn1Name.addEventListener('focus', (e) => {
    if (e.target.value.length > 0) {
        showDropdown(e.target.value, dropdown1, yarn1Name);
    }
});

yarn1Name.addEventListener('blur', () => {
    setTimeout(() => hideDropdown(dropdown1), 150);
});

// Autocomplete for garn 2
yarn2Name.addEventListener('input', (e) => {
    showDropdown(e.target.value, dropdown2, yarn2Name);
});

yarn2Name.addEventListener('focus', (e) => {
    if (e.target.value.length > 0) {
        showDropdown(e.target.value, dropdown2, yarn2Name);
    }
});

yarn2Name.addEventListener('blur', () => {
    setTimeout(() => hideDropdown(dropdown2), 150);
});

function showDropdown(searchTerm, dropdownElement, nameInput) {
    if (searchTerm.length < 2) {
        hideDropdown(dropdownElement);
        return;
    }

    // Sjekk om yarnDatabase eksisterer
    if (typeof yarnDatabase === 'undefined') {
        console.error('yarnDatabase ikke funnet');
        return;
    }

    const results = searchYarns(searchTerm);
    
    if (results.length === 0) {
        hideDropdown(dropdownElement);
        return;
    }

    // Bygg dropdown HTML
    const dropdownHTML = results.slice(0, 6).map(yarn => `
        <div class="dropdown-item" onclick="selectYarn('${yarn.key}', '${dropdownElement.id}', '${nameInput.id}')">
            <div class="yarn-name">${capitalizeWords(yarn.name)} - ${yarn.brand}</div>
            <div class="yarn-details">${yarn.gauge || 'Ukjent fasthet'} • ${yarn.category} • ${yarn.fiber}</div>
        </div>
    `).join('');

    dropdownElement.innerHTML = dropdownHTML;
    dropdownElement.style.display = 'block';
}

function hideDropdown(dropdownElement) {
    dropdownElement.style.display = 'none';
}

function selectYarn(yarnKey, dropdownId, nameInputId) {
    const yarn = yarnDatabase[yarnKey];
    const nameInput = document.getElementById(nameInputId);
    const dropdownElement = document.getElementById(dropdownId);
    
    if (yarn) {
        nameInput.value = `${yarn.brand} ${yarn.name}`;
        hideDropdown(dropdownElement);
    }
}

function searchYarns(searchTerm) {
    const term = searchTerm.toLowerCase();
    const results = [];
    
    for (const [key, yarn] of Object.entries(yarnDatabase)) {
        if (key.includes(term) || 
            yarn.name.toLowerCase().includes(term) ||
            yarn.brand.toLowerCase().includes(term)) {
            results.push({ key: key, ...yarn });
        }
    }
    
    // Sorter etter relevans
    return results.sort((a, b) => {
        const aName = a.name.toLowerCase();
        const bName = b.name.toLowerCase();
        const aBrand = a.brand.toLowerCase();
        const bBrand = b.brand.toLowerCase();
        
        // Eksakt match på navn først
        if (aName.includes(term) && !bName.includes(term)) return -1;
        if (!aName.includes(term) && bName.includes(term)) return 1;
        
        // Så eksakt match på merke
        if (aBrand.includes(term) && !bBrand.includes(term)) return -1;
        if (!aBrand.includes(term) && bBrand.includes(term)) return 1;
        
        // Alfabetisk som siste resort
        return aName.localeCompare(bName);
    });
}

function capitalizeWords(str) {
    return str.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
}

function findAlternatives() {
    // Hent verdier fra input-feltene
    const name1 = yarn1Name.value.trim();
    const name2 = yarn2Name.value.trim();
    
    // Valider input
    if (!name1 || !name2) {
        alert('Vennligst velg begge garnene fra dropdown-listen.');
        return;
    }
    
    // Finn garnene i databasen
    const yarn1 = findYarnByName(name1);
    const yarn2 = findYarnByName(name2);
    
    if (!yarn1 || !yarn2) {
        alert('Et eller begge garnene ble ikke funnet i databasen. Vennligst velg fra dropdown-listen.');
        return;
    }
    
    // Finn alternativer basert på kombinert tykkelse
    const alternatives = findCombinedAlternatives(yarn1, yarn2);
    
    // Vis resultater
    displayResults(alternatives, yarn1, yarn2);
}

function findYarnByName(yarnName) {
    // Søk etter garn basert på "Brand Name" format
    for (const [key, yarn] of Object.entries(yarnDatabase)) {
        const fullName = `${yarn.brand} ${yarn.name}`;
        if (fullName.toLowerCase() === yarnName.toLowerCase()) {
            return { key: key, ...yarn };
        }
    }
    return null;
}

function findCombinedAlternatives(yarn1, yarn2) {
    const alternatives = [];
    
    // Beregn kombinert strikkefasthet (grov tilnærming)
    const gauge1 = parseGauge(yarn1.gauge);
    const gauge2 = parseGauge(yarn2.gauge);
    
    if (gauge1 && gauge2) {
        // Når du holder to tråder sammen får du omtrent 70-80% av den gjennomsnittlige fastheten
        const combinedGauge = (gauge1 + gauge2) / 2 * 0.75;
        
        // Finn garn med lignende strikkefasthet
        for (const [key, yarn] of Object.entries(yarnDatabase)) {
            if (key === yarn1.key || key === yarn2.key) continue; // Skip de samme garnene
            
            const yarnGauge = parseGauge(yarn.gauge);
            if (yarnGauge) {
                const gaugeDiff = Math.abs(combinedGauge - yarnGauge);
                
                // Aksepter garn med maksimalt 3 masker forskjell
                if (gaugeDiff <= 3) {
                    alternatives.push({
                        key: key,
                        ...yarn,
                        gaugeDiff: gaugeDiff,
                        combinedGauge: Math.round(combinedGauge),
                        matchQuality: gaugeDiff <= 1 ? 'perfect' : gaugeDiff <= 2 ? 'good' : 'ok'
                    });
                }
            }
        }
    }
    
    // Sorter etter match-kvalitet
    return alternatives.sort((a, b) => a.gaugeDiff - b.gaugeDiff);
}

function parseGauge(gaugeString) {
    if (!gaugeString) return null;
    
    // "18-20 m" -> 19, "18 m" -> 18
    const numbers = gaugeString.match(/\d+/g);
    if (!numbers) return null;
    
    if (numbers.length === 2) {
        return (parseInt(numbers[0]) + parseInt(numbers[1])) / 2;
    }
    return parseInt(numbers[0]);
}

function displayResults(alternatives, yarn1, yarn2) {
    // Vis resultater-containeren
    resultsContainer.style.display = 'block';
    
    // Tøm tidligere resultater
    resultsList.innerHTML = '';
    
    if (alternatives.length === 0) {
        resultsList.innerHTML = `
            <div class="result-item">
                <div class="result-yarn-name">Ingen passende alternativer funnet</div>
                <div class="result-details">
                    ${yarn1.brand} ${yarn1.name} + ${yarn2.brand} ${yarn2.name}<br>
                    Forventet strikkefasthet: ${Math.round((parseGauge(yarn1.gauge) + parseGauge(yarn2.gauge)) / 2 * 0.75)} masker<br>
                    Prøv å søke manuelt etter garn med lignende tykkelse.
                </div>
            </div>
        `;
    } else {
        // Vis faktiske resultater fra databasen
        alternatives.slice(0, 8).forEach(yarn => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            
            let matchText = '';
            if (yarn.matchQuality === 'perfect') {
                matchText = ' • Perfekt match!';
            } else if (yarn.matchQuality === 'good') {
                matchText = ' • Godt match';
            }
            
            resultItem.innerHTML = `
                <div class="result-yarn-name">${yarn.brand} ${yarn.name}</div>
                <div class="result-details">
                    ${yarn.fiber} • ${yarn.gauge} • ${yarn.length}m/50g${matchText}
                </div>
            `;
            resultsList.appendChild(resultItem);
        });
        
        // Legg til info om den kombinerte tykkelsen
        const infoItem = document.createElement('div');
        infoItem.style.cssText = 'margin-top: 20px; padding: 15px; background: #f0f8ff; border-radius: 8px; border-left: 4px solid #007acc;';
        infoItem.innerHTML = `
            <div style="font-weight: 600; margin-bottom: 5px;">Kombinasjon:</div>
            <div style="font-size: 14px; color: #666;">
                ${yarn1.brand} ${yarn1.name} (${yarn1.gauge}) + ${yarn2.brand} ${yarn2.name} (${yarn2.gauge})<br>
                = Omtrent ${alternatives[0]?.combinedGauge || '?'} masker per 10cm
            </div>
        `;
        resultsList.appendChild(infoItem);
    }
    
    // Scroll til resultater
    resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Klikk utenfor dropdown for å skjule
document.addEventListener('click', function(event) {
    if (!yarn1Name.contains(event.target) && !dropdown1.contains(event.target)) {
        hideDropdown(dropdown1);
    }
    if (!yarn2Name.contains(event.target) && !dropdown2.contains(event.target)) {
        hideDropdown(dropdown2);
    }
});

// Initialiser 
document.addEventListener('DOMContentLoaded', function() {
    // Sjekk om database er lastet
    if (typeof yarnDatabase === 'undefined') {
        console.error('yarnDatabase ikke funnet - sjekk at database.js er lastet');
    }
});