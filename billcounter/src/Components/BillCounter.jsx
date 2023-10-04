import React, { useEffect, useState } from "react";
import { billingData } from "../utils/billing";
import { removeOldCustomer } from "../utils/customer";


const BillCounter = () => {
  const[billCounter, setBillCounter] = useState([[4, 1], [2, 2, 1], [3, 1], [5], [2, 1]]);
  const[newCustomer,setNewCustomer] = useState([4, 3, 2, 1, 5, 1, 2]);


  const [customer, setCustomer] = useState(billingData(billCounter,newCustomer));

  useEffect(() => {

    const removeCustomer = setTimeout(() => {

      setBillCounter(removeOldCustomer(billCounter));
      setCustomer(billCounter);
     
      if(newCustomer.length >1) {

        setCustomer(billingData(billCounter,newCustomer));
        const updatedCustomer = newCustomer.slice(1);
        setNewCustomer(updatedCustomer);
      }

 
    }, 1000);

    return () => {
      clearTimeout(removeCustomer);
    };

  }, [billCounter,newCustomer]);


// console.log(customer);


  return (
    <>
      <main className="border border-blue-800 p-5 w-[50%] flex items-center justify-around flex-col">
        <h1 className="text-center border border-red-800 p-2">
          Billing Counter
        </h1>

        {/* Billing desk */}
        <section className="border border-red-800 w-[95%] h-20 my-4 flex justify-evenly items-center">
          <div className="border border-blue-800 w-[20%] h-[80%] flex items-center justify-center">
            1
          </div>
          <div className="border border-blue-800 w-[20%] h-[80%] flex items-center justify-center">
            2
          </div>
          <div className="border border-blue-800 w-[20%] h-[80%] flex items-center justify-center">
            3
          </div>
          <div className="border border-blue-800 w-[20%] h-[80%] flex items-center justify-center">
            4
          </div>
          <div className="border border-blue-800 w-[20%] h-[80%] flex items-center justify-center">
            5
          </div>
        </section>

        <section className="border border-red-800 w-[95%] flex justify-evenly items-center">
          {customer &&
            customer.map((e, i) => (
              <>
                <div
                  className="border border-blue-800 w-[20%] flex items-center justify-center flex-col"
                  key={i}
                >
                  {e &&
                    e.map((value, j) => (
                      <div
                        className="border border-red-800 w-[90%] flex items-center justify-center h-16 my-2"
                        key={j}
                      >
                        {value}
                      </div>
                    ))}
                </div>
              </>
            ))}
        </section>
      </main>
    </>
  );
};

export default BillCounter;
