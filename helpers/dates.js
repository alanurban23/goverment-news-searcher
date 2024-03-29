const dates = [
    {code: 'STY', number: '01'},
    {code: 'LUT', number: '02'},
    {code: 'MAR', number: '03'},
    {code: 'KWI', number: '04'},
    {code: 'MAJ', number: '05'},
    {code: 'CZE', number: '06'},
    {code: 'LIP', number: '07'},
    {code: 'SIE', number: '08'},
    {code: 'WRZ', number: '09'},
    {code: 'PAŹ', number: '10'},
    {code: 'LIS', number: '11'},
    {code: 'GRU', number: '12'},
];

export const getMonthNumber = (subDate) => {
    const findMonth = dates.find(date => date.code === subDate.substring(0,3));    
    return findMonth ? findMonth.number : subDate.substring(0,2);
};
export const getYearNumber = (subDate) => {
    return `20${subDate.substring(3,5)}`;
};

//Create a function to read a json file and return as a api response in nextjs
//Use this function in the api route
// export const readJson = (res, json) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.statusCode = 200;
//     res.end(json);
// };

//Write a service to read a json file and return as a api response in nextjs
//Use this service in the getStaticProps function
// export const readJsonService = async (json) => {
//     const res = {
//         setHeader: () => {},
//         statusCode: 200,
//         end: () => {},
//     };
//     const data = await readJson(res, json);
//     return {
//         props: {
//             data,
//         },
//     };
// };

export default dates;



