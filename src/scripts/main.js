'use strict';

const populations = document.getElementsByClassName('population');
let totalPopulation = 0;

for (const population of populations) {
  totalPopulation += Number(population.textContent.replaceAll(',', ''));
}

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString();

const averagePopulation = totalPopulation / populations.length;

document.querySelector('.average-population').textContent =
  Math.round(averagePopulation).toLocaleString();
