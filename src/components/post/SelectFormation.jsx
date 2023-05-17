import React from "react";

const SelectFormation = ({ setSelectedFormation, setIsDisabled }) => {
  const handleChangeFormation = (e) => {
    if (e.target.value === "フォーメーションを選択してください") {
      setIsDisabled(true);
    } else {
      setSelectedFormation(e.target.value);
      setIsDisabled(false);
    }
  };

  return (
    <div className="container-fluid w-100 p-4">
      <div className="d-flex flex-column pb-3">
        <h3>スターティングメンバー</h3>
      </div>
      <select
        className="form-select"
        onChange={(e) => handleChangeFormation(e)}
      >
        <option defaultValue="" className="bg-dark text-light">
          フォーメーションを選択してください
        </option>
        {/* 4バック */}
        <option
          defaultValue="442"
          style={{ backgroundColor: "rgba(47,255,12,0.2)" }}
        >
          442
        </option>
        <option
          defaultValue="4411"
          style={{ backgroundColor: "rgba(47,255,12,0.2)" }}
        >
          4411
        </option>
        <option
          defaultValue="433"
          style={{ backgroundColor: "rgba(47,255,12,0.2)" }}
        >
          433
        </option>
        <option
          defaultValue="4321"
          style={{ backgroundColor: "rgba(47,255,12,0.2)" }}
        >
          4321
        </option>
        <option
          defaultValue="4312"
          style={{ backgroundColor: "rgba(47,255,12,0.2)" }}
        >
          4312
        </option>
        <option
          defaultValue="424"
          style={{ backgroundColor: "rgba(47,255,12,0.2)" }}
        >
          424
        </option>
        <option
          defaultValue="4231"
          style={{ backgroundColor: "rgba(47,255,12,0.2)" }}
        >
          4231
        </option>
        <option
          defaultValue="4222"
          style={{ backgroundColor: "rgba(47,255,12,0.2)" }}
        >
          4222
        </option>
        <option
          defaultValue="4213"
          style={{ backgroundColor: "rgba(47,255,12,0.2)" }}
        >
          4213
        </option>
        <option
          defaultValue="4141"
          style={{ backgroundColor: "rgba(47,255,12,0.2)" }}
        >
          4141
        </option>
        <option
          defaultValue="4132"
          style={{ backgroundColor: "rgba(47,255,12,0.2)" }}
        >
          4132
        </option>
        <option
          defaultValue="4123"
          style={{ backgroundColor: "rgba(47,255,12,0.2)" }}
        >
          4123
        </option>
        <option
          defaultValue="4114"
          style={{ backgroundColor: "rgba(47,255,12,0.2)" }}
        >
          4114
        </option>
        {/* 3バック */}
        <option defaultValue="343">343</option>
        <option defaultValue="3421">3421</option>
        <option defaultValue="3412">3412</option>
        <option defaultValue="334">334</option>
        <option defaultValue="3331">3331</option>
        <option defaultValue="3322">3322</option>
        <option defaultValue="3313">3313</option>
        <option defaultValue="3241">3241</option>
        <option defaultValue="3232">3232</option>
        <option defaultValue="3223">3223</option>
        <option defaultValue="3214">3214</option>
        <option defaultValue="3142">3142</option>
        <option defaultValue="3133">3133</option>
        <option defaultValue="3124">3124</option>

        {/* 5バック */}
        <option
          defaultValue="541"
          style={{ backgroundColor: "rgba(31,123,255,0.2)" }}
        >
          541
        </option>
        <option
          defaultValue="541"
          style={{ backgroundColor: "rgba(31,123,255,0.2)" }}
        >
          532
        </option>
        <option
          defaultValue="541"
          style={{ backgroundColor: "rgba(31,123,255,0.2)" }}
        >
          5311
        </option>
        <option
          defaultValue="541"
          style={{ backgroundColor: "rgba(31,123,255,0.2)" }}
        >
          523
        </option>
        <option
          defaultValue="541"
          style={{ backgroundColor: "rgba(31,123,255,0.2)" }}
        >
          5221
        </option>
        <option
          defaultValue="541"
          style={{ backgroundColor: "rgba(31,123,255,0.2)" }}
        >
          5212
        </option>
        <option
          defaultValue="541"
          style={{ backgroundColor: "rgba(31,123,255,0.2)" }}
        >
          514
        </option>
        <option
          defaultValue="541"
          style={{ backgroundColor: "rgba(31,123,255,0.2)" }}
        >
          5131
        </option>
        <option
          defaultValue="541"
          style={{ backgroundColor: "rgba(31,123,255,0.2)" }}
        >
          5122
        </option>
        <option
          defaultValue="541"
          style={{ backgroundColor: "rgba(31,123,255,0.2)" }}
        >
          5113
        </option>
      </select>
    </div>
  );
};

export default SelectFormation;
