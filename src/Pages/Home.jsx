import React, { useState, useEffect } from "react";
import "../Styles/Home.css";
import FriendDetail from "../Components/FriendDetail/FriendDetail";
import AddFriend from "../Components/AddFriend/AddFriend";
import { IoArrowBack } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import BillDetails from "../Components/BillDetails/BillDetails";

const Home = () => {
  const [friend, setFriend] = useState(true);
  const [Showbill, setShowBill] = useState(false);
  const [completeData, SetCompleteData] = useState({});
  const [friendName, SetFriendName] = useState();
  const [friendsData, setFriendsData] = useState(() => {
    const storedData = localStorage.getItem("friendsData");
    return storedData
      ? JSON.parse(storedData)
      : [
          {
            id: 1,
            name: "Satyam",
            balance: 20,
            img: "https://randomuser.me/api/portraits/men/1.jpg",
          },
        ];
  });

  useEffect(() => {
    console.log("Updating localStorage with friendsData:", friendsData); // Debugging line
    localStorage.setItem("friendsData", JSON.stringify(friendsData));
  }, [friendsData]);

  const showbilldata = (name) => {
    setShowBill(true);
    SetFriendName(name);
    console.log("chal gya");
  };

  const handleBillData = (data)=>{
    SetCompleteData(data)
  }

  const closeBillDetails = () => {
    setShowBill(false);
  };
  const handleNewData = (value) => {
    setFriendsData((prev) => [...prev, value]);
  };

  const DeleteFriendData = (rmvId) => {
    console.log("Deleting friend with id:", rmvId); // Debugging line
    setFriendsData((prevData) => {
      const updatedFriendsData = prevData.filter(
        (friend) => friend.id !== rmvId
      );
      localStorage.setItem("friendsData", JSON.stringify(updatedFriendsData));
      return updatedFriendsData;
    });
    alert("Friend deleted");
  };

  const handleFriends = () => {
    setFriend(!friend);
  };
  console.log(completeData);

  return (
    <div className="home-container">
      <h3>Welcome To Our Billing App</h3>
      <div className="home-section">
        <aside className={`friendsData ${Showbill?`friendclose`:`friendopen`}`} >
          {friend === true ? (
            <h4>Friends</h4>
          ) : (
            <h4>
              <span>
                <span onClick={handleFriends} style={{cursor:"pointer"}}>
                  <IoArrowBack />
                </span>{" "}
                Add Friends
              </span>
            </h4>
          )}

          {friend === true ? (
            <>
              <div className="name-details">
                {friendsData.map((item, index) => (
                  <FriendDetail
                    key={index}
                    id={item.id}
                    name={item.name}
                    img={item.img}
                    balance={item.balance}
                    DeleteFriendData={DeleteFriendData}
                    showbilldata={showbilldata}
                    completeData={completeData}
                  />
                ))}
              </div>

              <div className="addbtn">
                <button onClick={handleFriends}>Add Friends</button>
              </div>
            </>
          ) : (
            <div className="addfriends-box">
              <AddFriend
                onAddFriend={handleNewData}
                handleFriends={handleFriends}
              />
            </div>
          )}
          
        </aside>

        <section className={`billingpage  ${Showbill?`billopen`:`billclose`}`}>
          <h4>
            Billing Page{" "}
            <span onClick={closeBillDetails} style={{cursor:"pointer"}}>
              <IoClose />
            </span>
          </h4>
          {Showbill && <BillDetails friendName={friendName} handleBillData={handleBillData}/>}
        </section>
      </div>
    </div>
  );
};

export default Home;
