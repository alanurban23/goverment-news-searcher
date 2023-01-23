//Require a dolnoslaskie.json file
const dolnoslaskie = require('../../data/dolnoslaskie.json');

function filterJSON(data, dateFrom, dateTo, text, provinces, states) {
    let filteredData = data;

    // console.log(filteredData);
    
    // Check if the item's date is within the specified range
    if (dateFrom && dateTo) {
      filteredData = filteredData.filter((item) => {
        const itemDate = new Date(item.restdate);
        return itemDate >= dateFrom && itemDate <= dateTo;
      });
    }
  
    // Check if the item's text contains the specified string
    if (text) {
      filteredData = filteredData.filter((item) => {
        // console.log(item.Title.toLowerCase());
        // console.log(item.Title.toLowerCase().includes(text.toLowerCase()));
        return item.Title.toLowerCase().includes(text.toLowerCase());
      });
    }
  
    // Check if the item's province is in the specified array
    if (provinces.length > 0) {
      filteredData = filteredData.filter((item) => {
        return item.Province.includes(item.Province);
      });
    }
  
    // Check if the item's state is in the specified array
    // if (states.length > 0) {
    //   filteredData = filteredData.filter((item) => {
    //     return item.includes(item.state);
    //   });
    // }
  
    console.log(filteredData);
    return filteredData;
  }
  
  const filteredData = filterJSON(dolnoslaskie, new Date("01/23"), new Date("01/23"), "Prezydent", ["legnica"], ["dolnoslaskie"]);