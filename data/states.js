const pomorskie = require('./pomorskie.json');
const kujawskoPomorskie = require('./kujawskoPomorskie.json');
const zachodnioPomorskie = require('./zachodnioPomorskie.json');
const warminskoMazurskie = require('./warminskoMazurskie.json');

export const states = [
    { name: 'pomorskie', ep: pomorskie},
    { name: 'kujawskoPomorskie', ep: kujawskoPomorskie},
    { name: 'zachodnioPomorskie', ep: zachodnioPomorskie},
    { name: 'warminskoMazurskie', ep: warminskoMazurskie},
]

export default states;