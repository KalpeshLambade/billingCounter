export const billingData = (billCounter,newCustomer) => {
    
  let sumArray = [];

  for (let i = 0; i < billCounter.length; i++) {
    let sum = 0;
    for (let j = 0; j < billCounter[i].length; j++) {
      sum += billCounter[i][j];
    }
    sumArray.push(sum);
  }

  let newIndex = sumArray.indexOf(Math.min(...sumArray));

  billCounter[newIndex].push(newCustomer[0]);
  

  return billCounter;
};

// console.log(billingData);
