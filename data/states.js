const pomorskie = require('./pomorskie.json');
const kujawskoPomorskie = require('./kujawskoPomorskie.json');
const zachodnioPomorskie = require('./zachodnioPomorskie.json');
const warminskoMazurskie = require('./warminskoMazurskie.json');
const wielkopolskie = require('./wielkopolskie.json');

export const states = [
    { name: 'pomorskie', ep: pomorskie},
    { name: 'kujawskoPomorskie', ep: kujawskoPomorskie},
    { name: 'zachodnioPomorskie', ep: zachodnioPomorskie},
    { name: 'warminskoMazurskie', ep: warminskoMazurskie},
    { name: 'wielkopolskie', ep: wielkopolskie}
]

export default states;