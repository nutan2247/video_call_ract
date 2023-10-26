import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate();

  const handleJoinRoom = () => {
    navigate(`/room/${value}`);
    // console.log(hi);
  };
  return (
    <>
      <div className="center">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter Room Code"
        />
        <button onClick={handleJoinRoom}>Join</button>
      </div>
    </>
  );
};

export default Home;
