import React from "react";

const EnterDefenseSystem = ({ defenseSystem, setDefenseSystem }) => {
  const handleChangeDefenseSystem = (e) => {
    setDefenseSystem(e.target.value);
  };
  return (
    <div className="container-fluid w-100 p-4 border">
      <div className="mb-3">
        <label htmlFor="DefenseSystem" className="form-label">
          守備時の原則
        </label>
        <textarea
          className="form-control"
          id="DefenseSystem"
          placeholder="400文字まで入力できます"
          maxLength="400"
          value={defenseSystem}
          rows="3"
          onChange={(e) => handleChangeDefenseSystem(e)}
        ></textarea>
      </div>
    </div>
  );
};

export default EnterDefenseSystem;
