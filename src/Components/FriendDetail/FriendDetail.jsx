import React from "react";
import "./FriendDetail.css";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
const FriendDetail = ({
  name,
  img,
  balance,
  DeleteFriendData,
  id,
  showbilldata,
  completeData,
}) => {
  const [isbalance, setBalance] = useState(0);

  const resultForYou = completeData.friendExpense;
  const resultForFriend = completeData.yourExpense;

  console.log(resultForFriend, resultForYou);

  return (
    <div className="friend-details" onClick={() => showbilldata(name)}>
      <div className="img">
        <img src={img} alt="" />
      </div>

      <div className="nametitle ">
        <p>{name}</p>
        <span
          className={
            completeData.billPayBy === "You" ? "text-green" : "text-red"
          }
        >
          {completeData.billPayBy === "You"
            ? `I have to take ${resultForYou || balance} rupees from  ${name}`
            : `I have to give  ${
                resultForFriend || balance
              } rupees to  ${name}`}
        </span>
      </div>
      <span className="dlticon" onClick={() => DeleteFriendData(id)}>
        <MdDelete />
      </span>
      {/* <button name="" id="" className="selectbtn"  >
       SetBill
      </button> */}
    </div>
  );
};

export default FriendDetail;
