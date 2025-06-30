// garnbytte.js - Komplett løsning med autocomplete og databaseintegrasjon

// Elements
const searchInput = document.getElementById('yarnSearch');
const dropdown = document.getElementById('autocompleteDropdown');
const searchBtn = document.getElementById('searchBtn');
const resultsContainer = document.getElementById('resultsContainer');
const yarnResults = document.getElementById('yarnResults');

let selectedIndex = -1;
let currentResults = [];

// ===== AUTOCOMPLETE FUNCTIONS =====

// Search function using the yarn database
function searchYarns(query) {
    if (!query || query.length < 2) return [];
    
    // Use yarnUtils to search in the database
    const results = yarnUtils.searchYarns(query);
    return results.slice(0, 6); // Limit to 6 results
}

// Highlight matching text
function highlightMatch(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

// Show autocomplete dropdown
function showAutocomplete(results, query) {
    if (results.length === 0) {
        dropdown.innerHTML = `
            <div class="no-results">
                <span class="no-results-icon">🔍</span>
                Finner ikke "${query}" i databasen
            </div>
        `;
        dropdown.classList.add('show');
        return;
    }

    dropdown.innerHTML = results.map((yarn, index) => `
        <div class="autocomplete-item" data-index="${index}" data-key="${yarn.key}">
            <div class="yarn-name-auto">${highlightMatch(`${yarn.brand} ${yarn.name}`, query)}</div>
            <div class="yarn-brand-auto">${highlightMatch(yarn.fiber, query)}</div>
        </div>
    `).join('');

    dropdown.classList.add('show');
    selectedIndex = -1;
}

// Hide dropdown
function hideAutocomplete() {
    dropdown.classList.remove('show');
    selectedIndex = -1;
}

// Select item from dropdown - FIKSET
function selectItem(key) {
    const yarn = yarnUtils.findYarn(key);
    if (yarn) {
        // Bruk bare key-navnet, ikke full "Brand Name" format
        searchInput.value = key;
        hideAutocomplete();
        searchBtn.focus();
    }
}

// Handle keyboard navigation
function handleKeyboard(e) {
    const items = dropdown.querySelectorAll('.autocomplete-item');
    
    switch(e.key) {
        case 'ArrowDown':
            e.preventDefault();
            selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
            updateSelection(items);
            break;
            
        case 'ArrowUp':
            e.preventDefault();
            selectedIndex = Math.max(selectedIndex - 1, -1);
            updateSelection(items);
            break;
            
        case 'Enter':
            e.preventDefault();
            if (selectedIndex >= 0 && items[selectedIndex]) {
                const key = items[selectedIndex].dataset.key;
                selectItem(key);
            } else {
                searchYarnAlternatives();
            }
            break;
            
        case 'Escape':
            hideAutocomplete();
            break;
    }
}

// Update visual selection
function updateSelection(items) {
    items.forEach((item, index) => {
        item.classList.toggle('selected', index === selectedIndex);
    });
}

// ===== SEARCH ALTERNATIVES FUNCTIONS =====

// Finn alternativer basert på søketerm - FORBEDRET SØKELOGIKK
function findYarnAlternatives(searchTerm) {
    console.log('Søker etter alternativer for:', searchTerm);
    
    // Rens søketerm - fjern ekstra mellomrom og "garn"
    let cleanSearchTerm = searchTerm.toLowerCase().trim();
    cleanSearchTerm = cleanSearchTerm.replace(/\s+garn\s+/, ' ').replace(/\s+garn$/, '').trim();
    console.log('Renset søketerm:', cleanSearchTerm);
    
    // Prøv å finne garnet på flere måter
    let foundYarn = yarnUtils.findYarn(cleanSearchTerm);
    
    // Hvis ikke funnet, prøv med vanlige merkenavn foran
    if (!foundYarn) {
        const commonBrands = ['sandnes', 'rauma', 'viking', 'knitting for olive'];
        
        for (const brand of commonBrands) {
            const searchWithBrand = `${brand} ${cleanSearchTerm}`;
            console.log('Prøver:', searchWithBrand);
            foundYarn = yarnUtils.findYarn(searchWithBrand);
            if (foundYarn) {
                cleanSearchTerm = searchWithBrand;
                console.log('Fant med merke:', cleanSearchTerm);
                break;
            }
        }
    }
    
    // Hvis fortsatt ikke funnet, prøv partial match
    if (!foundYarn) {
        const allYarns = Object.keys(yarnDatabase);
        const partialMatch = allYarns.find(key => 
            key.includes(cleanSearchTerm) || cleanSearchTerm.includes(key.split(' ').pop())
        );
        
        if (partialMatch) {
            foundYarn = yarnUtils.findYarn(partialMatch);
            cleanSearchTerm = partialMatch;
            console.log('Fant med partial match:', cleanSearchTerm);
        }
    }
    
    if (foundYarn) {
        console.log('Fant garn:', foundYarn.name, 'med strikkefasthet:', foundYarn.gauge);
        
        // PRIORITET 1: Finn alternativer basert på strikkefasthet (mest nøyaktig)
        const gaugeBasedAlts = yarnUtils.findAlternativesByGauge(cleanSearchTerm);
        
        if (gaugeBasedAlts.length > 0) {
            console.log('Fant', gaugeBasedAlts.length, 'strikkefasthet-baserte alternativer');
            
            return gaugeBasedAlts.slice(0, 6).map(yarn => {
                console.log(`Alternativ: ${yarn.brand} ${yarn.name} - ${yarn.matchQuality} match`);
                return {
                    name: `${yarn.brand} ${yarn.name}`,
                    details: `${yarn.fiber} • ${yarn.gauge} • ${yarn.length}m/50g`,
                    match: yarn.matchQuality,
                    length: yarn.length,
                    weight: yarn.weight,
                    gauge: yarn.gauge,
                    needleSize: yarn.needleSize
                };
            });
        }
        
        // PRIORITET 2: Fallback til manuelle alternativer fra databasen
        console.log('Bruker manuelle alternativer fra database');
        return foundYarn.alternatives.map(altName => {
            const alternative = yarnUtils.findYarn(altName);
            
            if (alternative) {
                const matchQuality = determineMatchQuality(foundYarn, alternative);
                console.log(`Manuelt alternativ: ${alternative.brand} ${alternative.name} - ${matchQuality} match`);
                
                return {
                    name: `${alternative.brand} ${alternative.name}`,
                    details: `${alternative.fiber} • ${alternative.gauge || 'Ukjent fasthet'} • ${alternative.length}m/50g`,
                    match: matchQuality,
                    length: alternative.length,
                    weight: alternative.weight,
                    gauge: alternative.gauge,
                    needleSize: alternative.needleSize
                };
            } else {
                console.log(`Alternativ ${altName} ikke funnet i database`);
                return {
                    name: altName,
                    details: 'Ikke i database',
                    match: 'good'
                };
            }
        });
    }

    // PRIORITET 3: Søk i hele databasen hvis ikke eksakt match
    console.log('Søker i hele databasen for:', cleanSearchTerm);
    const searchResults = yarnUtils.searchYarns(cleanSearchTerm);
    
    if (searchResults.length > 0) {
        return searchResults.slice(0, 5).map(yarn => ({
            name: `${yarn.brand} ${yarn.name}`,
            details: `${yarn.fiber} • ${yarn.gauge || 'Ukjent fasthet'} • ${yarn.length}m/50g`,
            match: 'good',
            length: yarn.length,
            weight: yarn.weight,
            gauge: yarn.gauge,
            needleSize: yarn.needleSize
        }));
    }

    // PRIORITET 4: Ingen match funnet
    console.log('Ingen match funnet, vis melding om at garn ikke finnes');
    return [
        {
            name: 'Garn ikke funnet',
            details: `"${searchTerm}" finnes ikke i vår database. Prøv å søke på merke + garnnavn (f.eks. "sandnes peer gynt")`,
            match: 'not-found'
        }
    ];
}

// NY FUNKSJON: Bestem match-kvalitet - NØYAKTIG VERSJON
function determineMatchQuality(originalYarn, alternativeYarn) {
    // Parse strikkefastheter for sammenligning
    const originalGauge = yarnUtils.parseGauge(originalYarn.gauge);
    const altGauge = yarnUtils.parseGauge(alternativeYarn.gauge);
    
    console.log(`Sammenligner: ${originalYarn.name} (${originalGauge}m) med ${alternativeYarn.name} (${altGauge}m)`);
    
    // Beregn forskjell i strikkefasthet
    const gaugeDiff = Math.abs(originalGauge - altGauge);
    
    // PERFEKT MATCH: Eksakt samme strikkefasthet (0 masker forskjell)
    if (gaugeDiff === 0) {
        console.log('PERFEKT match - eksakt samme strikkefasthet');
        return 'perfect';
    }
    
    // GODT MATCH: 1 maske forskjell (±1)
    if (gaugeDiff === 1) {
        console.log('GODT match - 1 maske forskjell');
        return 'good';
    }
    
    // 2+ masker forskjell = ikke så bra match, men fortsatt brukbart
    if (gaugeDiff <= 3) {
        console.log('OK match - 2-3 masker forskjell');
        return 'good';
    }
    
    // Fallback: sjekk fiberlikhet hvis strikkefasthet er for forskjellig
    const originalFiber = originalYarn.fiber.toLowerCase();
    const altFiber = alternativeYarn.fiber.toLowerCase();
    
    console.log('Stor forskjell i strikkefasthet, sjekker fiber');
    
    if (originalFiber.includes('ull') && altFiber.includes('ull')) {
        return 'good';
    }
    if (originalFiber.includes('alpakka') && altFiber.includes('alpakka')) {
        return 'good';
    }
    if (originalFiber.includes('merino') && altFiber.includes('merino')) {
        return 'good';
    }
    
    return 'good'; // Default
}

// Søk etter garnalternativer
function searchYarnAlternatives() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (!searchTerm) {
        alert('Vennligst skriv inn et garnnavn');
        return;
    }

    // Vis loading state
    searchBtn.textContent = 'Søker...';
    searchBtn.classList.add('loading');
    searchBtn.disabled = true;

    // Simuler API-kall med delay
    setTimeout(() => {
        const alternatives = findYarnAlternatives(searchTerm);
        displayResults(alternatives, searchTerm);
        
        // Reset button
        searchBtn.textContent = 'Finn garnalternativ';
        searchBtn.classList.remove('loading');
        searchBtn.disabled = false;
    }, 1500);
}

// Vis resultater - med bedre sortering
function displayResults(alternatives, searchTerm) {
    // Lag results container hvis den ikke finnes
    if (!resultsContainer) {
        const container = document.createElement('div');
        container.className = 'results-container';
        container.id = 'resultsContainer';
        container.innerHTML = `
            <h3 class="results-title">Dine garnalternativer</h3>
            <div id="yarnResults"></div>
        `;
        
        // Legg til etter search-section
        const searchSection = document.querySelector('.search-section');
        searchSection.insertAdjacentElement('afterend', container);
        
        // Oppdater referanse
        resultsContainer = container;
        yarnResults = document.getElementById('yarnResults');
    }

    // Tøm tidligere resultater
    yarnResults.innerHTML = '';

    // Sorter alternativer: perfekte først, deretter gode
    alternatives.sort((a, b) => {
        if (a.match === 'perfect' && b.match !== 'perfect') return -1;
        if (b.match === 'perfect' && a.match !== 'perfect') return 1;
        return 0;
    });

    // Legg til nye resultater
    alternatives.forEach(yarn => {
        const yarnElement = document.createElement('div');
        
        // Bestem CSS-klasser basert på match-type
        if (yarn.match === 'not-found') {
            yarnElement.className = 'yarn-alternative not-found';
        } else if (yarn.match === 'perfect') {
            yarnElement.className = 'yarn-alternative';
        } else {
            yarnElement.className = 'yarn-alternative good-match';
        }
        
        // Bestem badge-stil og tekst
        let matchClass, matchText;
        if (yarn.match === 'not-found') {
            matchClass = 'match-not-found';
            matchText = 'IKKE FUNNET';
        } else if (yarn.match === 'perfect') {
            matchClass = 'match-perfect';
            matchText = 'PERFEKT';
        } else {
            matchClass = 'match-good';
            matchText = 'GODT';
        }
        
        yarnElement.innerHTML = `
            <div class="yarn-name">${yarn.name}</div>
            <div class="yarn-details">${yarn.details}</div>
            <span class="match-badge ${matchClass}">${matchText}</span>
        `;
        
        yarnResults.appendChild(yarnElement);
    });

    // Vis resultat-container med animasjon
    resultsContainer.style.display = 'block';
    setTimeout(() => {
        resultsContainer.classList.add('show');
    }, 10);

    // Scroll til resultatet
    setTimeout(() => {
        resultsContainer.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }, 250);

    console.log(`Fant ${alternatives.length} alternativer for "${searchTerm}"`);
}

// ===== EVENT LISTENERS =====

// Autocomplete event listeners
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    
    if (query.length >= 2) {
        currentResults = searchYarns(query);
        showAutocomplete(currentResults, query);
    } else {
        hideAutocomplete();
    }
});

searchInput.addEventListener('keydown', handleKeyboard);

searchInput.addEventListener('focus', () => {
    const query = searchInput.value.trim();
    if (query.length >= 2) {
        currentResults = searchYarns(query);
        showAutocomplete(currentResults, query);
    }
});

// Click outside to close
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-section')) {
        hideAutocomplete();
    }
});

// Click on dropdown item
dropdown.addEventListener('click', (e) => {
    const item = e.target.closest('.autocomplete-item');
    if (item) {
        const key = item.dataset.key;
        selectItem(key);
    }
});

// Search button event listener
searchBtn.addEventListener('click', searchYarnAlternatives);

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && selectedIndex === -1) {
        searchYarnAlternatives();
    }
});

// Skjul resultater når input endres
searchInput.addEventListener('input', () => {
    if (resultsContainer && resultsContainer.classList.contains('show')) {
        resultsContainer.classList.remove('show');
        setTimeout(() => {
            resultsContainer.style.display = 'none';
        }, 500);
    }
});

// Debug - log når database er lastet
console.log('Garnbase lastet med', Object.keys(yarnDatabase).length, 'garntyper');
console.log('Tilgjengelige merker:', yarnUtils.getAllBrands());