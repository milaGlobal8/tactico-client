import React from "react";

const EnterYourTeam = ({ setTeam }) => {
  const handleChangeTeam = (e) => {
    setTeam(e.target.value);
  };
  return (
    <div className="container-fluid w-100 p-4 border">
      <input
        className="form-control"
        type="text"
        placeholder="どちらのチームの戦術を考察しますか？"
        onChange={(e) => handleChangeTeam(e)}
      />
    </div>
  );
};

export default EnterYourTeam;
