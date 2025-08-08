function calculateStitches() {
  const current = parseInt(document.getElementById("currentStitches").value);
  const target = parseInt(document.getElementById("targetStitches").value);

  if (!current || !target || current <= 0 || target <= 0) {
    alert("Vennligst fyll inn gyldige tall for antall masker.");
    return;
  }

  if (current === target) {
    alert("Du har allerede riktig antall masker!");
    return;
  }

  // Automatisk bestem om vi skal øke eller felle
  const actionType = target > current ? "increase" : "decrease";
  const knittingType = "round"; // Default til rundstrikking

  const difference = Math.abs(target - current);
  const intervals = Math.floor(current / difference);
  const remainder = current % difference;

  let resultHTML = "";

  if (actionType === "increase") {
    resultHTML = generateIncreaseInstructions(
      current,
      target,
      difference,
      intervals,
      remainder,
      knittingType
    );
  } else {
    resultHTML = generateDecreaseInstructions(
      current,
      target,
      difference,
      intervals,
      remainder,
      knittingType
    );
  }

  document.getElementById("resultContent").innerHTML = resultHTML;
  document.getElementById("results").classList.add("show");
  document.getElementById("results").scrollIntoView({ behavior: "smooth" });
}

function generateIncreaseInstructions(
  current,
  target,
  difference,
  intervals,
  remainder,
  knittingType
) {
  let html = `
                <div class="instruction">
                    <p><strong>Du vil øke ${difference} masker. Dette må gjøres:</strong></p>
                    <ul style="margin: 1rem 0; padding-left: 1.5rem;">
            `;

  // Beregn hovedmønster
  const mainInterval = intervals;
  const extendedInterval = intervals + 1;

  if (remainder > 0) {
    // Vis begge intervaller
    const mainCount = difference - remainder;
    html += `<li>Strikk ${
      mainInterval - 1
    } masker, øk med 1 maske. × ${mainCount}</li>`;
    html += `<li>Strikk ${
      extendedInterval - 1
    } masker, øk med 1 maske. × ${remainder}</li>`;
  } else {
    // Kun ett intervall
    html += `<li>Strikk ${
      mainInterval - 1
    } masker, øk med 1 maske. × ${difference}</li>`;
  }

  html += `</ul>`;
  html += `<p><strong>Følg stegene under for å få det helt jevnt.</strong></p>`;

  // Generer detaljerte steg
  html += generateDetailedSteps(
    difference,
    mainInterval,
    extendedInterval,
    remainder,
    "increase"
  );

  html += `</div>`;

  return html;
}

function generateDecreaseInstructions(
  current,
  target,
  difference,
  intervals,
  remainder,
  knittingType
) {
  let html = `
                <div class="instruction">
                    <p><strong>Du vil felle ${difference} masker. Dette må gjøres:</strong></p>
                    <ul style="margin: 1rem 0; padding-left: 1.5rem;">
            `;

  // Beregn hovedmønster for felling
  const mainInterval = intervals;
  const extendedInterval = intervals + 1;

  if (remainder > 0) {
    // Vis begge intervaller
    const mainCount = difference - remainder;
    if (mainInterval >= 2) {
      html += `<li>Strikk ${
        mainInterval - 2
      } masker, fell 2 masker sammen. × ${mainCount}</li>`;
    }
    if (extendedInterval >= 2) {
      html += `<li>Strikk ${
        extendedInterval - 2
      } masker, fell 2 masker sammen. × ${remainder}</li>`;
    }
  } else {
    // Kun ett intervall
    if (mainInterval >= 2) {
      html += `<li>Strikk ${
        mainInterval - 2
      } masker, fell 2 masker sammen. × ${difference}</li>`;
    }
  }

  html += `</ul>`;
  html += `<p><strong>Følg stegene under for å få det helt jevnt:</strong></p>`;

  // Generer detaljerte steg
  html += generateDetailedSteps(
    difference,
    mainInterval,
    extendedInterval,
    remainder,
    "decrease"
  );

  html += `</div>`;

  return html;
}

function generateDetailedSteps(
  totalActions,
  mainInterval,
  extendedInterval,
  remainder,
  actionType
) {
  let html = '<ol style="margin: 1rem 0; padding-left: 1.5rem;">';

  // Fordel handlinger over 8 steg
  const stepsCount = 8;
  const actionsPerStep = Math.floor(totalActions / stepsCount);
  let remainingActions = totalActions % stepsCount;

  let extendedActionsLeft = remainder;

  for (let step = 1; step <= stepsCount; step++) {
    let currentStepActions = actionsPerStep;
    if (remainingActions > 0) {
      currentStepActions++;
      remainingActions--;
    }

    if (currentStepActions === 0) continue;

    // Bestem hvilken type handling som skal brukes i dette steget
    let useExtended = false;
    let stepExtendedActions = 0;
    let stepMainActions = currentStepActions;

    if (extendedActionsLeft > 0) {
      stepExtendedActions = Math.min(
        Math.ceil(extendedActionsLeft / (stepsCount - step + 1)),
        currentStepActions
      );
      stepMainActions = currentStepActions - stepExtendedActions;
      extendedActionsLeft -= stepExtendedActions;
    }

    // Generer instruksjoner for dette steget
    if (actionType === "increase") {
      if (stepMainActions > 0) {
        html += `<li>Strikk ${
          mainInterval - 1
        } masker, øk med 1 maske. Gjør dette ${stepMainActions} ganger.</li>`;
      }
      if (stepExtendedActions > 0) {
        html += `<li>Strikk ${
          extendedInterval - 1
        } masker, øk med 1 maske. Gjør dette ${stepExtendedActions} ganger.</li>`;
      }
    } else {
      // decrease
      if (stepMainActions > 0 && mainInterval >= 2) {
        html += `<li>Strikk ${
          mainInterval - 2
        } masker, fell 2 masker sammen. Gjør dette ${stepMainActions} ganger.</li>`;
      }
      if (stepExtendedActions > 0 && extendedInterval >= 2) {
        html += `<li>Strikk ${
          extendedInterval - 2
        } masker, fell 2 masker sammen. Gjør dette ${stepExtendedActions} ganger.</li>`;
      }
    }
  }

  html += "</ol>";
  return html;
}

function generateDetailedPattern(
  current,
  difference,
  intervals,
  remainder,
  action,
  knittingType
) {
  // Denne funksjonen brukes ikke lenger, men beholdes for kompatibilitet
  return "";
}

// Back to top button functionality
window.addEventListener("scroll", function () {
  const backToTop = document.getElementById("backToTop");
  if (window.pageYOffset > 300) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
});

document.getElementById("backToTop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Clear results when inputs change
document
  .getElementById("currentStitches")
  .addEventListener("input", clearResults);
document
  .getElementById("targetStitches")
  .addEventListener("input", clearResults);

function clearResults() {
  document.getElementById("results").classList.remove("show");
}
