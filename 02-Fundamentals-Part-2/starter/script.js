'use strict';

/* function describeCountry
  (country, population, capitalCity) {
  return `${country} has ${population} milion people and its capital city is ${capitalCity}`
}
console.log(describeCountry('USA', 354, `Washinton D.C`));
console.log(describeCountry('Italy', 54, 'Roma'));
console.log(describeCountry('China', 1441, 'Beijing'));

function percentageOfWorld1(population) {
  return (population / 7900) * 100
};
const chinaPercent1 = percentageOfWorld1(1441);
const americaPercent1 = percentageOfWorld1(354);
const italyPercent1 = percentageOfWorld1(54);

console.log(chinaPercent1, americaPercent1, italyPercent1);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100
};
const chinaPercent2 = percentageOfWorld2(1441);
const americaPercent2 = percentageOfWorld2(354);
const italyPercent2 = percentageOfWorld2(54);
console.log(chinaPercent2, americaPercent2, italyPercent2);

const percentageOfWorld3 = population => (population / 7900) * 100;
const chinaPercent3 = percentageOfWorld3(1441);
const americaPercent3 = percentageOfWorld3(354);
const italyPercent3 = percentageOfWorld3(54);

console.log(chinaPercent3, americaPercent3, italyPercent3);

function describePopulation(country, population) {
  const percentPopulation = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentPopulation} of the world.`;
  console.log(description);
};

describePopulation('China', 1441);
describePopulation('USA', 354);
describePopulation('Italy', 54);

const population = [1441, 354, 30, 54];
console.log(population.length === 4);
const pct0 = percentageOfWorld1(population[0]);
const pct1 = percentageOfWorld1(population[1]);
const pct2 = percentageOfWorld1(population[2]);
const pct3 = percentageOfWorld1(population[3]);
const percentages = [pct0, pct1, pct2, pct3];
console.log(percentages);

const neighbours = ['Laos', 'China', 'Campuchia'];
console.log(neighbours);
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
console.log(neighbours.includes('Germany'));
if (!neighbours.includes('Germany')) {
  console.log(`Probably not a central European country :D`);
};

neighbours[neighbours.indexOf('Campuchia')] = 'Kingdom of Campuchia';
console.log(neighbours); */


///////////////////////////////
//////Coding Challenge #1//////
///////////////////////////////

/* const calcAverage = (point1, point2, point3) => (point1 + point2 + point3) / 3;
const avgDolphins = calcAverage(60, 60, 60);
const avgKoalas = calcAverage(128, 126, 10);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else console.log(`No team win`)
};

checkWinner(avgDolphins, avgKoalas); */

///////////////////////////////
//////Coding Challenge #1//////
///////////////////////////////

/* const calcTip = billvalue => billvalue >= 50 && bilvalue <= 300 
? billvalue * 0.15 : billvalue * 0.2 */

const calcTip = function (billvalue) {
  if (billvalue >= 50 && billvalue <= 300) {
    return billvalue * 15 / 100;

  } else {
    return billvalue * 20 / 100;
  }
};

//console.log(calcTip(1000));

const bills = [125, 555, 44];
const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[2]),
]
console.log(tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total);
