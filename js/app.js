'use strict'
const coutryName = document.querySelector('.country')
const cityName = document.querySelector('.city')
const regionName = document.querySelector('.region')
const streetName = document.querySelector('.street')
const googleMaps = document.querySelector('.maps')
const currency = document.querySelector('.currency')
const countryFlag = document.querySelector('.flags')

const mainContainer = document.querySelector('.hero')
const btn = document.querySelector('.btn')
const errorText = document.querySelector('.error-text')
const initalDataContainer = document.querySelector('.inital-data')  
const continent = document.querySelector('.continent');

function getGeoLocation(callback) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          const latitude = position.coords.latitude;
          const longitude =  position.coords.longitude;
          // const latitude = 9.008208
          // const longitude = 38.8485038
          callback(latitude, longitude); // Pass the values to the callback function
        }
      );
    }
  }

  const errorMsg = function(){
      mainContainer.style.opacity = 0;
      errorText.style.display = 'block';
  }

  const whereIAm = function(){

    getGeoLocation(function(longitude,latitude){
  
        fetch(`https://geocode.xyz/${longitude},${latitude}?geoit=json&auth=436913924601987352488x50714`)
        .then(response => {
              console.log(response)
              if(!response.ok) 
              throw new Error(`Problem With GeoCoding ${response.status}`)
              return response.json()
          })
        .then((data) => {
            console.log(`You Are In ${data.city} ${data.country}`,data)
            coutryName.textContent = data.country
            cityName.textContent = data.city
            regionName.textContent = data.region
            // streetName.textContent = (null || data.intersection.street1) ?? "foo"
            // streetName.textContent = data.poi.name
            const code = data.prov;
            return fetch(`https://restcountries.com/v3.1/alpha/${code}`)
        })
        // Fetch USING REST COUNTRY API
            .then(response => {
              if(!response.ok)
              throw new Error(`Country Not Found (${response.status})`)
              return response.json()})
            .then(data => {
              console.log(data[0])
              countryFlag.src = data[0].flags.png
              currency.textContent = Object.values(data[0].currencies)[0].name
              continent.textContent = data[0].continents
              googleMaps.href = data[0].maps.googleMaps         
              // renderCountry(data)
              })
  

          
        // Fetch Rest Country Api
    })
  }
btn.addEventListener('click',function(){
    mainContainer.style.display = 'flex';
    initalDataContainer.style.opacity = 0;
    whereIAm();

})

// Reference
// const getCountryData = function(country){
//   // Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//   .then(response => {console.log(response) 
//                 if(!response.ok)
//                 throw new Error(`Country Not Found (${response.status})`)
//                       return response.json()})
//   .then((data) => { 
//       renderCountry(data[0])
//       // const neighbour = data[0].borders[0];
//       const neighbour = 'sjsl'
//       console.log(data[0])
//       if(!neighbour) return
    
//       // country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//       })
//       .then(response  => {
//         if(!response.ok)
//         throw new Error(`Country Not Found(${response.status})`)
//         response.json()})
//       .then(data => renderCountry(data[0],'neighbour'))
//       .catch(err => {renderError(`Something Went Wrong 💥💥💥💥${err.message}`)
//       })
//       .finally(() => {countriesContainer.style.opacity = 1})
//     };
