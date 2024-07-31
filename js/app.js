'use strict'
const coutryName = document.querySelector('.country')
const cityName = document.querySelector('.city')
const regionName = document.querySelector('.region')
const streetName = document.querySelector('.street')
const googleMaps = document.querySelector('.maps')
const currency = document.querySelector('.currency')
const countryFlag = document.querySelector('.flags')


const btnContainer = document.querySelector('.btncontainer')
const mainContainer = document.querySelector('.hero')
const btnlocation = document.querySelector('.btnlocation')
const btnip = document.querySelector('.btnip')
const errorText = document.querySelector('.error-text')
const initalDataContainer = document.querySelector('.inital-data')  
const continent = document.querySelector('.continent');
const btnHome = document.querySelector('.btnhome')

console.log("hello World")

const getLocation = () => {
  return new Promise((resolve , reject) => {
        navigator.geolocation.getCurrentPosition(resolve , reject)
  })
}



const handleLocation = async (locations) => {
    try{
        const res = await getLocation()
        const {latitude , longitude } = res.coords
        locations(latitude , longitude)
    }
    catch(err){
      console.log(err.message) 
    }
}

// handleLocation((latitude , longitude) => {
//   fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=436913924601987352488x50714`)
//   .then(res => res.json())
//   .then(data => console.log(data))
// })

// fetch("http://ip-api.com/json/").then(res => res.json()).then(data => {const countryCode = data.countryCode; return fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)})
// .then(res => res.json()).then(data => console.log(data))


const fetchIpData = async () => {
    
    try{
      const res = await fetch("http://ip-api.com/json/")
      const data = await res.json()
      return data
    }
    catch(err){
        console.log(err.message)
    }

}








btnip.addEventListener('click',() => {
  mainContainer.style.display = 'flex';
  initalDataContainer.style.opacity = 0;
  btnContainer.style.opacity = 0

})

btnHome.addEventListener('click', () => {
    mainContainer.style.display = 'none'
    initalDataContainer.style.opacity = 1
    btnContainer.style.opacity = 1
})

