import React from "react";

const EnterGoodPlayer = ({ setGoodPlayer }) => {
  const handleChangeGoodPlayer = (e) => {
    setGoodPlayer(e.target.value);
  };

  return (
    <div className="container-fluid w-100 p-4 border">
      <input
        className="form-control"
        type="text"
        placeholder="あなたが注目する選手は？"
        onChange={(e) => handleChangeGoodPlayer(e)}
      />
    </div>
  );
};

export default EnterGoodPlayer;
