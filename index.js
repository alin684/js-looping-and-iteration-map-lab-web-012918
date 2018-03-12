// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  let newArray = [];
  drivers.map(function (driver) {
    newArray.push(driver.toLowerCase())
  })
  return newArray
}

function nameToAttributes(drivers) {
  newArr = []
  drivers.map(function (driver) {
    let splitdriver = driver.split(" ")
    newArr.push({firstName: splitdriver[0], lastName: splitdriver[1]})
  })
  return newArr
}

function attributesToPhrase(drivers) {
  let newArr = []
  drivers.map(function (driver) {
    newArr.push(`${driver.name} is from ${driver.hometown}`)
  })
  return newArr
}
