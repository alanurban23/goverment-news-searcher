const dolnoslaskie = require('./dolnoslaskie.json');
const kujawskoPomorskie = require('./kujawskoPomorskie.json');
const lodzkie = require('./lodzkie.json');
const lubelskie = require('./lubelskie.json');
const lubuskie = require('./lubuskie.json');
const malopolskie = require('./malopolskie.json');
const mazowieckie = require('./mazowieckie.json');
const opolskie = require('./opolskie.json');
const podkarpackie = require('./podkarpackie.json');
const podlaskie = require('./podlaskie.json');
const pomorskie = require('./pomorskie.json');
const swietokrzyskie = require('./swietokrzyskie.json');
const warminskoMazurskie = require('./warminskoMazurskie.json');
const wielkopolskie = require('./wielkopolskie.json');
const zachodnioPomorskie = require('./zachodnioPomorskie.json');
const slaskie = require('./slaskie.json');

export const states = [
    { name: 'dolnoslaskie', ep: dolnoslaskie },
    { name: 'kujawskoPomorskie', ep: kujawskoPomorskie },
    { name: 'lodzkie', ep: lodzkie },
    { name: 'lubuskie', ep: lubuskie },
    { name: 'lubelskie', ep: lubelskie },
    { name: 'malopolskie', ep: malopolskie },
    { name: 'mazowieckie', ep: mazowieckie },
    { name: 'opolskie', ep: opolskie },
    { name: 'podkarpackie', ep: podkarpackie },
    { name: 'podlaskie', ep: podlaskie },
    { name: 'pomorskie', ep: pomorskie },
    { name: 'swietokrzyskie', ep: swietokrzyskie },
    { name: 'warminskoMazurskie', ep: warminskoMazurskie },
    { name: 'wielkopolskie', ep: wielkopolskie },
    { name: 'zachodnioPomorskie', ep: zachodnioPomorskie },
    { name: 'slaskie', ep: slaskie },
]

// function addCloseBracket() {
//     for (let state of states) {
//         // Read the file
//         let data = fs.readFileSync(state.ep, 'utf8');

//         // Add a close bracket to the end of the JSON object
//         data = data.slice(0, -1) + '}';

//         // Write the modified data back to the file
//         fs.writeFileSync(state.ep, data);
//     }
// }

// addCloseBracket();

export default states;