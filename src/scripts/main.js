'use strict';

const populations = document.querySelectorAll('span.population');
let totalPopulation = 0;
let populationsCount = 0;

for (const population of populations) {
  const cleaned = population.textContent.replace(/,/g, '').trim();
  const value = Number(cleaned);

  if (!Number.isNaN(value)) {
    totalPopulation += value;
    populationsCount++;
  }
}

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString('en-US');

const averageEl = document.querySelector('.average-population');

if (populationsCount > 0) {
  const averagePopulation = totalPopulation / populationsCount;

  averageEl.textContent = Math.round(averagePopulation).toLocaleString('en-US');
} else {
  averageEl.textContent = 'N/A';
}
