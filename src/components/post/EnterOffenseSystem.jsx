import React from "react";

const EnterOffenseSystem = ({ offenseSystem, setOffenseSystem }) => {
  const handleChangeOffenseSystem = (e) => {
    setOffenseSystem(e.target.value);
  };
  return (
    <div className="container-fluid w-100 p-4 border">
      <div className="mb-3">
        <label htmlFor="OffenseSystem" className="form-label">
          攻撃時の原則
        </label>
        <textarea
          className="form-control"
          id="OffenseSystem"
          placeholder="400文字まで入力できます"
          maxLength="400"
          value={offenseSystem}
          rows="3"
          onChange={(e) => handleChangeOffenseSystem(e)}
        ></textarea>
      </div>
    </div>
  );
};

export default EnterOffenseSystem;
