'use strict'
gGame.bestScore = {
    easy: Infinity,
    medium: Infinity,
    hard: Infinity
  };
  
  function updateBestScore(level, secsPassed) {
    if (secsPassed < gGame.bestScore[gLevel]) {
      gGame.bestScore[gLevel] = secsPassed;
      localStorage.setItem(`bestScore-${level}`, secsPassed);
    }
  }
  
  function loadBestScore() {
    for (const level in gGame.bestScore) {
      const bestScore = localStorage.getItem(`bestScore-${gLevel}`);
      if (bestScore) {
        gGame.bestScore[gLevel] = bestScore;
      }
      // Update the best score display
      document.querySelector(`.best-score-${gLevel}`).innerText = gGame.bestScore[gLevel];
    }
  }
  
  
  
  