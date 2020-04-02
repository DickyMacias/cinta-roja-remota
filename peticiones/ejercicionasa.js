// 1.- Devolver el nombre de los asteroides potencialmente peligrosos

const endDate = '2020-03-31'
const startDate = '2020-03-24';
const apiKey = 'Sm95LmajaeOSvxVuAsPdtNuBqr8I9qFClnt6VdpW';

//const getHazard = (startDate, endDate, apiKey) => `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`;
const getHazard = (startDate, endDate, apiKey) => 'https://api.nasa.gov/neo/rest/v1/feed?start_date='+ startDate + '&end_date=' + endDate + '&api_key='+ apiKey;
//const getHazard = (startDate, endDate, apiKey) => 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-03-24&end_date=2020-03-31&api_key=Sm95LmajaeOSvxVuAsPdtNuBqr8I9qFClnt6VdpW';
console.log(getHazard(startDate, endDate, apiKey));
const request = require('request');

URL = getHazard(startDate,endDate,apiKey);
request.get(URL, (error,response,body) => {
  const json = JSON.parse(body);
  const json2 = Object.entries(json.near_earth_objects);

  console.log('Estos asteroides se acercaron peligrosamente a la tierra:');
  let indice = 0;
  json2.forEach(element => { 
    json.near_earth_objects[element[0]].forEach(element => { 
      if (element.is_potentially_hazardous_asteroid === true) {
        indice = indice + 1;
        console.log(indice+'.- '+element.name);
      };
    });
  });
});

