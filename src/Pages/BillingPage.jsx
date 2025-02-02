import React from "react";
import BillDetails from "../Components/BillDetails/BillDetails";
import { IoClose } from "react-icons/io5";
    
const BillingPage = () => {
  return (
    <div>
      <section className="billingpage">
        <h4>
          {/* <span onClick={closeBillDetails}>
            <IoClose />
          </span> */}
        </h4>
      <BillDetails />
      </section>
    </div>
  );
};

export default BillingPage;
