import React from "react";

const SelectLeague = ({ setSelectedLeague, setIsDisabled }) => {
  const handleChangeLeague = (e) => {
    if (e.target.value === "リーグ名を選択してください") {
      setIsDisabled(true);
    } else {
      setSelectedLeague(e.target.value);
      setIsDisabled(false);
    }
  };

  return (
    <div className="container-fluid w-100 p-4 border">
      <select className="form-select" onChange={(e) => handleChangeLeague(e)}>
        <option>リーグ名を選択してください</option>
        <option
          defaultValue="English Premier League"
          style={{ color: "rgba(40, 255, 170, 1)", fontWeight: "bold" }}
        >
          English Premier League
        </option>
        <option
          defaultValue="LaLiga"
          style={{ color: "rgba(255,163,30,0.8)", fontWeight: "bold" }}
        >
          LaLiga
        </option>
        <option
          defaultValue="Bundes Liga"
          style={{ color: "#d10214", fontWeight: "bold" }}
        >
          Bundes Liga
        </option>
        <option
          defaultValue="Serie A"
          style={{ color: "#038aff", fontWeight: "bold" }}
        >
          Serie A
        </option>
        <option
          defaultValue="Ligue 1"
          style={{ color: "#9fc408", fontWeight: "bold" }}
        >
          Ligue 1
        </option>
        <option
          defaultValue="CL"
          style={{ color: "#010e8a", fontWeight: "bold" }}
        >
          CL
        </option>
        <option
          defaultValue="EL"
          style={{ color: "#ed7701", fontWeight: "bold" }}
        >
          EL
        </option>
        <option
          defaultValue="J-league"
          style={{ color: "red", fontWeight: "bold" }}
        >
          J-league
        </option>
        <option
          defaultValue="National"
          style={{ color: "#2955c8", fontWeight: "bold" }}
        >
          National
        </option>
      </select>
    </div>
  );
};

export default SelectLeague;
