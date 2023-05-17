import React from "react";
import courtImg from "../../images/newCourt.jpg";

// 4バック
import FourFourTwo from "./formationList/four/FourFourTwo";
import FourFourOneOne from "./formationList/four/FourFourOneOne";
import FourThreeThree from "./formationList/four/FourThreeThree";
import FourThreeTwoOne from "./formationList/four/FourThreeTwoOne";
import FourThreeOneTwo from "./formationList/four/FourThreeOneTwo";
import FourTwoFour from "./formationList/four/FourTwoFour";
import FourTwoThreeOne from "./formationList/four/FourTwoThreeOne";
import FourTwoTwoTwo from "./formationList/four/FourTwoTwoTwo";
import FourTwoOneThree from "./formationList/four/FourTwoOneThree";
import FourOneFourOne from "./formationList/four/FourOneFourOne";
import FourOneThreeTwo from "./formationList/four/FourOneThreeTwo";
import FourOneTwoThree from "./formationList/four/FourOneTwoThree";
import FourOneOneFour from "./formationList/four/FourOneOneFour";

// 3バック
import ThreeFourThree from "./formationList/three/ThreeFourThree";
import ThreeFourTwoOne from "./formationList/three/ThreeFourTwoOne";
import ThreeFourOneTwo from "./formationList/three/ThreeFourOneTwo";
import ThreeThreeFour from "./formationList/three/ThreeThreeFour";
import ThreeThreeThreeOne from "./formationList/three/ThreeThreeThreeOne";
import ThreeThreeTwoTwo from "./formationList/three/ThreeThreeTwoTwo";
import ThreeThreeOneThree from "./formationList/three/ThreeThreeOneThree";
import ThreeTwoFourOne from "./formationList/three/ThreeTwoFourOne";
import ThreeTwoThreeTwo from "./formationList/three/ThreeTwoThreeTwo";
import ThreeTwoTwoThree from "./formationList/three/ThreeTwoTwoThree";
import ThreeTwoOneFour from "./formationList/three/ThreeTwoOneFour";
import ThreeOneFourTwo from "./formationList/three/ThreeOneFourTwo";
import ThreeOneThreeThree from "./formationList/three/ThreeOneThreeThree";
import ThreeOneTwoFour from "./formationList/three/ThreeOneTwoFour";

// 5バック
import FiveFourOne from "./formationList/five/FiveFourOne";
import FiveThreeTwo from "./formationList/five/FiveThreeTwo";
import FiveThreeOneOne from "./formationList/five/FiveThreeOneOne";
import FiveTwoThree from "./formationList/five/FiveTwoThree";
import FiveTwoTwoOne from "./formationList/five/FiveTwoTwoOne";
import FiveTwoOneTwo from "./formationList/five/FiveTwoOneTwo";
import FiveOneFour from "./formationList/five/FiveOneFour";
import FiveOneThreeOne from "./formationList/five/FiveOneThreeOne";
import FiveOneTwoTwo from "./formationList/five/FiveOneTwoTwo";
import FiveOneOneThree from "./formationList/five/FiveOneOneThree";

const Court = ({ selectedFormation }) => {
  if (selectedFormation) {
    switch (selectedFormation) {
      // 4バック
      case "442":
        return <FourFourTwo />;
      case "4411":
        return <FourFourOneOne />;
      case "433":
        return <FourThreeThree />;
      case "4321":
        return <FourThreeTwoOne />;
      case "4312":
        return <FourThreeOneTwo />;
      case "424":
        return <FourTwoFour />;
      case "4231":
        return <FourTwoThreeOne />;
      case "4222":
        return <FourTwoTwoTwo />;
      case "4213":
        return <FourTwoOneThree />;
      case "4141":
        return <FourOneFourOne />;
      case "4132":
        return <FourOneThreeTwo />;
      case "4123":
        return <FourOneTwoThree />;
      case "4114":
        return <FourOneOneFour />;

      // 3バック
      case "343":
        return <ThreeFourThree />;
      case "3421":
        return <ThreeFourTwoOne />;
      case "3412":
        return <ThreeFourOneTwo />;
      case "334":
        return <ThreeThreeFour />;
      case "3331":
        return <ThreeThreeThreeOne />;
      case "3322":
        return <ThreeThreeTwoTwo />;
      case "3313":
        return <ThreeThreeOneThree />;
      case "3241":
        return <ThreeTwoFourOne />;
      case "3232":
        return <ThreeTwoThreeTwo />;
      case "3223":
        return <ThreeTwoTwoThree />;
      case "3214":
        return <ThreeTwoOneFour />;
      case "3142":
        return <ThreeOneFourTwo />;
      case "3133":
        return <ThreeOneThreeThree />;
      case "3124":
        return <ThreeOneTwoFour />;

      // 5バック
      case "541":
        return <FiveFourOne />;
      case "532":
        return <FiveThreeTwo />;
      case "5311":
        return <FiveThreeOneOne />;
      case "523":
        return <FiveTwoThree />;
      case "5221":
        return <FiveTwoTwoOne />;
      case "5212":
        return <FiveTwoOneTwo />;
      case "514":
        return <FiveOneFour />;
      case "5131":
        return <FiveOneThreeOne />;
      case "5122":
        return <FiveOneTwoTwo />;
      case "5113":
        return <FiveOneOneThree />;

      default:
        break;
    }
  }

  return (
    <div className="container-fluid w-100 p-3">
      <div className="position-relative d-flex vstack gap-0 h-100">
        <img
          src={courtImg}
          alt="court"
          className="img-fluid h-100 border border-dark"
          style={{ maxHeight: "500px", maxWidth: "500px" }}
        />
        <div
          className="players container-fluid d-flex justify-content-center align-items-center position-absolute h-100 w-100"
          style={{ maxHeight: "500px", maxWidth: "500px" }}
        >
          <h3 className="text-light text-center">
            フォーメーションを選択してください
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Court;
