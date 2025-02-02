import React, { useState } from "react";
import "./BillDetails.css";

const BillDetails = ({friendName,handleBillData}) => {
  const [billData, setBillData] = useState({
    billValue: "",
    yourExpense: "",
    friendExpense: "",
    billPayBy: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setBillData({
      ...billData,
      [name]: value, // Updates the correct field in state
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh
    console.log(billData);
    handleBillData(billData); 
  };
  
  
  return (
    <div>
      <form className="bill-details" onSubmit={handleSubmit}>
        <p>Split A Bill With {friendName}</p>
        <div className="input1">
          <label>Bill Value</label>
          <input
            type="number"
            name="billValue" // Add name attribute
            placeholder="Enter Bill Value"
            value={billData.billValue}
            onChange={handleChange}
          />
        </div>
        <div className="input1">
          <label>Your Expense</label>
          <input
            type="number"
            name="yourExpense" // Add name attribute
            placeholder="Your Expense"
            value={billData.yourExpense}
            onChange={handleChange}
          />
        </div>
        <div className="input1">
          <label>{friendName} Expenses</label>
          <input
            type="number"
            name="friendExpense" // Add name attribute
            placeholder={`${friendName} Expense`}
            value={billData.friendExpense}
            onChange={handleChange}
          />
        </div>
        <div className="input1">
          <label>Who is paying the bill?</label>
          <select
            name="billPayBy" // Add name attribute
            value={billData.billPayBy}
            onChange={handleChange}
          >
            <option value="You">You</option>
            <option value="Friend">{friendName}</option>
          </select>
        </div>
        <button type="submit">Split Bill</button>
      </form>
    </div>
  );
};

export default BillDetails;
