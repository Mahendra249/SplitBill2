import React, { useState } from "react";
import "./AddFriend.css";

const AddFriend = ({ onAddFriend, handleFriends }) => {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState("");
  const [img, setImg] = useState("");
  const [suggestions, setSuggestions] = useState([
    // Male images
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/men/4.jpg",
    "https://randomuser.me/api/portraits/men/13.jpg",
    "https://randomuser.me/api/portraits/men/14.jpg",
    "https://randomuser.me/api/portraits/men/15.jpg",
    "https://randomuser.me/api/portraits/men/18.jpg",
    "https://randomuser.me/api/portraits/men/19.jpg",
    "https://randomuser.me/api/portraits/men/6.jpg",
    "https://randomuser.me/api/portraits/men/7.jpg",
    "https://randomuser.me/api/portraits/men/9.jpg",
    "https://randomuser.me/api/portraits/men/10.jpg",
    "https://randomuser.me/api/portraits/men/22.jpg",
    ,
    // Female images
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/women/3.jpg",
    "https://randomuser.me/api/portraits/women/5.jpg",
    "https://randomuser.me/api/portraits/women/8.jpg",
    "https://randomuser.me/api/portraits/women/9.jpg",
    "https://randomuser.me/api/portraits/women/10.jpg",
    "https://randomuser.me/api/portraits/women/11.jpg",
    "https://randomuser.me/api/portraits/women/12.jpg",
    "https://randomuser.me/api/portraits/women/13.jpg",
    "https://randomuser.me/api/portraits/women/14.jpg",
    "https://randomuser.me/api/portraits/women/15.jpg",
    "https://randomuser.me/api/portraits/women/17.jpg",
    "https://randomuser.me/api/portraits/women/18.jpg",
    "https://randomuser.me/api/portraits/women/19.jpg",
    "https://randomuser.me/api/portraits/women/20.jpg",
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || balance === "" || !img) {
      alert("Please fill out all fields.");
      return;
    }

    const newFriend = {
      id: Date.now(),
      name,
      balance: parseFloat(balance),
      img,
    };

    onAddFriend(newFriend);
    setName("");
    setBalance("");
    setImg("");
    handleFriends();
  };

  const handleSuggestionClick = (url) => {
    setImg(url);
  };

  return (
    <form className="add-friend-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="balance">Balance:</label>
        <input
          type="number"
          id="balance"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
          placeholder="Enter balance (e.g., 20 or -50)"
        />
      </div>

      <div className="form-group">
        <label htmlFor="img">Profile Image URL:</label>
        <input
          type="url"
          id="img"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          placeholder="Enter image URL"
        />
        <div className="suggestions">
          <p> Suggest Image </p>
          {suggestions
            .filter((url) => url.toLowerCase().includes(img.toLowerCase()))
            .map((suggestion, index) => (
              <div
                key={index}
                className="suggestion-item"
                onClick={() => handleSuggestionClick(suggestion)}
              >
        
                <img src={suggestion} alt="" />
              </div>
            ))}
        </div>
      </div>

      <div className="addbtn">
        <button type="submit">Add Friend</button>
      </div>
    </form>
  );
};

export default AddFriend;
