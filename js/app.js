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


console.log("hello World")

const getLocation = () => {
  return new Promise((resolve , reject) => {
        navigator.geolocation.getCurrentPosition(resolve , reject)
  })
}


getLocation()
.then(res => {
    const {latitude , longitude } = res.coords
})
.catch(err => console.log(err))


