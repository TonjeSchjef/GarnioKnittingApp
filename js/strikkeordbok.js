// Strikkeordbok funktionalitet
// DOM elementer
const searchInput = document.getElementById('termSearch');
const searchBtn = document.getElementById('searchBtn');
const resultsContainer = document.getElementById('resultsContainer');
const autocompleteDropdown = document.getElementById('autocompleteDropdown');

// Global variabel for å holde styr på timeout
let searchTimeout;

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    showEmptyState();
    
    // Vis populære søk som standard
    const popularSearches = document.getElementById('popularSearches');
    if (popularSearches) {
        popularSearches.style.display = 'block';
    }
});

// Søkefunksjon
function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (!searchTerm) {
        showEmptyState();
        return;
    }
    
    // Skjul populære søk når vi søker
    const popularSearches = document.getElementById('popularSearches');
    if (popularSearches) {
        popularSearches.style.display = 'none';
    }
    
    // Søk i ordboken
    const results = searchInDictionary(searchTerm);
    
    if (results.length === 0) {
        showNoResults(searchTerm);
    } else {
        showResults(results);
    }
    
    // Skjul autocomplete
    hideAutocomplete();
}

// Søkefunksjon i ordboken
function searchInDictionary(searchTerm) {
    const results = [];
    
    for (const [term, data] of Object.entries(strikkeordbok)) {
        // Søk i term navn, engelsk oversettelse, sammendrag og beskrivelse
        if (term.toLowerCase().includes(searchTerm) ||
            data.english.toLowerCase().includes(searchTerm) ||
            data.summary.toLowerCase().includes(searchTerm) ||
            data.description.toLowerCase().includes(searchTerm)) {
            
            results.push({ term, data });
        }
    }
    
    // Sorter resultater - eksakte treff først
    results.sort((a, b) => {
        const aExact = a.term.toLowerCase() === searchTerm;
        const bExact = b.term.toLowerCase() === searchTerm;
        
        if (aExact && !bExact) return -1;
        if (!aExact && bExact) return 1;
        
        // Deretter sorter alfabetisk
        return a.term.localeCompare(b.term);
    });
    
    return results;
}

// Vis søkeresultater
function showResults(results) {
    const resultsHTML = results.map(({ term, data }) => `
        <div class="result-item">
            <div class="result-term">
                <span class="result-icon">🧶</span>
                ${capitalizeFirst(term)}
                <span class="result-english">(${data.english})</span>
            </div>
            <div class="result-summary">${data.summary}</div>
            <div class="result-description">${data.description}</div>
        </div>
    `).join('');
    
    resultsContainer.innerHTML = resultsHTML;
}

// Vis tom tilstand
function showEmptyState() {
    resultsContainer.innerHTML = `
        <div class="empty-state">
            <i class="fa-solid fa-search"></i>
            <p>Skriv inn et søkeord for å finne strikketerminologi</p>
        </div>
    `;
    
    // Vis populære søk
    const popularSearches = document.getElementById('popularSearches');
    if (popularSearches) {
        popularSearches.style.display = 'block';
    }
}

// Vis "ingen resultater"
function showNoResults(searchTerm) {
    resultsContainer.innerHTML = `
        <div class="no-results">
            <i class="fa-solid fa-search" style="font-size: 2rem; margin-bottom: 15px; color: #ccc;"></i>
            <p>Ingen resultater funnet for "<strong>${searchTerm}</strong>".</p>
            <p style="margin-top: 10px; font-size: 14px; color: #999;">Prøv et annet søkeord eller bla gjennom populære søk nedenfor.</p>
        </div>
    `;
}

// Autocomplete funktionalitet
function handleKeyUp(event) {
    const searchTerm = event.target.value.toLowerCase().trim();
    
    // Clear previous timeout
    clearTimeout(searchTimeout);
    
    if (searchTerm.length > 0) {
        // Debounce søket
        searchTimeout = setTimeout(() => {
            showAutocomplete(searchTerm);
        }, 150);
    } else {
        hideAutocomplete();
        showEmptyState();
    }
}

function showAutocomplete(searchTerm) {
    const suggestions = Object.keys(strikkeordbok)
        .filter(term => 
            term.toLowerCase().includes(searchTerm) ||
            strikkeordbok[term].english.toLowerCase().includes(searchTerm)
        )
        .slice(0, 6) // Vis maksimalt 6 forslag
        .sort(); // Alfabetisk sortering
    
    if (suggestions.length > 0) {
        const suggestionsHTML = suggestions.map(term => 
            `<div class="autocomplete-item" onclick="selectSuggestion('${term.replace(/'/g, "\\'")}')">${capitalizeFirst(term)}</div>`
        ).join('');
        
        autocompleteDropdown.innerHTML = suggestionsHTML;
        autocompleteDropdown.style.display = 'block';
    } else {
        hideAutocomplete();
    }
}

function selectSuggestion(term) {
    searchInput.value = term;
    hideAutocomplete();
    performSearch();
}

function showSuggestions() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm.length > 0) {
        showAutocomplete(searchTerm);
    }
}

function hideAutocomplete() {
    setTimeout(() => {
        autocompleteDropdown.style.display = 'none';
    }, 150);
}

// Håndter Enter-tast
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        hideAutocomplete();
        performSearch();
    }
}

// Populære søk funksjonalitet
function searchTerm(term) {
    searchInput.value = term;
    performSearch();
    
    // Scroll til toppen av resultater
    const resultsSection = document.getElementById('resultsSection');
    if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Hjelpefunksjon for å gjøre første bokstav stor
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Event listeners
if (searchBtn) {
    searchBtn.addEventListener('click', performSearch);
}

if (searchInput) {
    searchInput.addEventListener('keyup', handleKeyUp);
    searchInput.addEventListener('keypress', handleKeyPress);
    searchInput.addEventListener('focus', showSuggestions);
    searchInput.addEventListener('blur', hideAutocomplete);
}

// Klikk utenfor autocomplete for å skjule den
document.addEventListener('click', function(event) {
    if (!searchInput.contains(event.target) && !autocompleteDropdown.contains(event.target)) {
        hideAutocomplete();
    }
});