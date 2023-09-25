// Define returnFirstTwoDrivers as a function
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // Define returnLastTwoDrivers as a function
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // Define selectingDrivers as an array containing returnFirstTwoDrivers and returnLastTwoDrivers
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Define createFareMultiplier as a higher-order function
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };
  
  // Define fareDoubler as a function that doubles the fare
  const fareDoubler = createFareMultiplier(2);
  
  // Define fareTripler as a function that triples the fare
  const fareTripler = createFareMultiplier(3);
  
  // Define selectDifferentDrivers as a function that takes an array of drivers and a function
  function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);
  }
  
