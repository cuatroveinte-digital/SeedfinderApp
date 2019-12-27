export const seedfinderService = {
  getBreeders,
  search,
  getStrain,
  getBreeder,
}

const apiKey = '43025bc75cd47a51bd5953ae069300c2'
const apiEndpoints = {
  searchStrains: 'https://en.seedfinder.eu/api/json/search.json',
  strainInfo: 'http://de.seedfinder.eu/api/json/strain.json',
  breederInfo: 'https://en.seedfinder.eu/api/json/ids.json'
}


function getBreeder(id) {

  const url = apiEndpoints.breederInfo + '?br=' + id + '&strains=1&ac=' + apiKey
  const requestOptions = { method: 'GET' }
  return fetch(url, requestOptions)
    .then(response => { 
      return handleResponse(response)
    })
}

function getStrain(strain, breeder) {
  const url = apiEndpoints.strainInfo + '?br=' + breeder + '&str=' + strain + '&lng=es&parents=1&reviews=1&tasting=1&ac=' + apiKey
  const requestOptions = {
    method: 'GET'
  };
  return fetch(url, requestOptions) 
    .then(handleResponse)   
    .then(results => {
      return results;
    })
}

function search(query) {
  const url = apiEndpoints.searchStrains + '?q=' + query + '&ac=' + apiKey
  const requestOptions = {
    method: 'GET'
  };
  return fetch(url, requestOptions) 
    .then(handleResponse)   
    .then(results => {
      return results;
    })
}

function getBreeders() {

  const url = 'https://en.seedfinder.eu/api/json/ids.json&ac=' + apiKey
  const requestOptions = {
    method: 'GET'
  };

  return fetch(url, requestOptions)
    .then(handleResponse())
    .then(results => { return results; })
}

function handleResponse(response) {
  return response.text().then(
    text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      return data;
    });
}