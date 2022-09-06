//  Utilizando as enums criadas nos exercícios anteriores e o pacote readline-sync, que cria uma interface para ler o que for inserido no console (mais informações, veja a documentação), crie um programa que quando a pessoa usuária escolher o mês do ano e o hemisfério no terminal:

import { Months } from './months';
import { Seasons } from './seasons';
import readline from 'readline-sync';

const monthsNames = Object.values(Months);

const choiceMonth = readline.keyInSelect(monthsNames, 'Choose a month: ');

const seasonsSouth = {
  [Seasons.AUTUMN]: [Months.MAR, Months.APR, Months.MAY, Months.JUN],
  [Seasons.WINTER]: [Months.JUN, Months.JUL, Months.AUG, Months.SEP],
  [Seasons.SPRING]: [Months.SEP, Months.OCT, Months.NOV, Months.DEC],
  [Seasons.SUMMER]: [Months.DEC, Months.JAN, Months.FEB, Months.MAR],
};

const seasonsNorth = {
  [Seasons.SPRING]: seasonsSouth[Seasons.AUTUMN],
  [Seasons.SUMMER]: seasonsSouth[Seasons.WINTER],
  [Seasons.AUTUMN]: seasonsSouth[Seasons.SPRING],
  [Seasons.WINTER]: seasonsSouth[Seasons.SUMMER],
};

const hemispheres = {
  North: seasonsNorth,
  South: seasonsSouth,
};

const choiceHemisphere = readline.keyInSelect(
  Object.keys(hemispheres),
  'Escolha um hemisfério'
);

const choosenMonth = Object.values(Months)[choiceMonth];
const hemisphere = Object.keys(hemispheres)[choiceHemisphere];

console.log('Mês: \n', choosenMonth);
console.log('Hemisfério: \n', hemisphere);
console.log('Estações:');
const chosenHesmisphereSeason = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHesmisphereSeason).map((entry) => {
  const seasons = entry[0];
  const months = entry[1];

  if (months.includes(choosenMonth)) console.log(seasons);
});
