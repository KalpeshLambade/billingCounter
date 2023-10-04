export const removeOldCustomer = (billCounter)=>{

    for (let i = 0; i < billCounter.length; i++) {
        for (let j = 0; j < billCounter[i].length; j++) {
      
          if (billCounter[i][j] > 0) {
            billCounter[i][j] = billCounter[i][j] - 1;
          }

            if(billCounter[i][j] === 0){
            billCounter[i].splice(j,1)
          }
      
        }
      }

    return billCounter;
}