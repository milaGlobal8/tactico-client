import React, { memo } from "react";
import courtImg from "../../../images/newCourt.jpg";
import CircleIcon from "@mui/icons-material/Circle";
// 4バック
import ForViewFourFourTwo from "./../forViewFormation/four/ForViewFourFourTwo";
import ForViewFourFourOneOne from "./../forViewFormation/four/ForViewFourFourOneOne";
import ForViewFourThreeThree from "./../forViewFormation/four/ForViewFourThreeThree";
import ForViewFourThreeTwoOne from "./../forViewFormation/four/ForViewFourThreeTwoOne";
import ForViewFourThreeOneTwo from "./../forViewFormation/four/ForViewFourThreeOneTwo";
import ForViewFourTwoFour from "./../forViewFormation/four/ForViewFourTwoFour";
import ForViewFourTwoThreeOne from "./../forViewFormation/four/ForViewFourTwoThreeOne";
import ForViewFourTwoTwoTwo from "./../forViewFormation/four/ForViewFourTwoTwoTwo";
import ForViewFourTwoOneThree from "./../forViewFormation/four/ForViewFourTwoOneThree";
import ForViewFourOneFourOne from "./../forViewFormation/four/ForViewFourOneFourOne";
import ForViewFourOneThreeTwo from "./../forViewFormation/four/ForViewFourOneThreeTwo";
import ForViewFourOneTwoThree from "./../forViewFormation/four/ForViewFourOneTwoThree";
import ForViewFourOneOneFour from "./../forViewFormation/four/ForViewFourOneOneFour";
// 3バック
import ForViewThreeFourThree from "./../forViewFormation/three/ForViewThreeFourThree";
import ForViewThreeFourTwoOne from "./../forViewFormation/three/ForViewThreeFourTwoOne";
import ForViewThreeFourOneTwo from "./../forViewFormation/three/ForViewThreeFourOneTwo";
import ForViewThreeThreeFour from "./../forViewFormation/three/ForViewThreeThreeFour";
import ForViewThreeThreeThreeOne from "./../forViewFormation/three/ForViewThreeThreeThreeOne";
import ForViewThreeThreeTwoTwo from "./../forViewFormation/three/ForViewThreeThreeTwoTwo";
import ForViewThreeThreeOneThree from "./../forViewFormation/three/ForViewThreeThreeOneThree";
import ForViewThreeTwoFourOne from "./../forViewFormation/three/ForViewThreeTwoFourOne";
import ForViewThreeTwoThreeTwo from "./../forViewFormation/three/ForViewThreeTwoThreeTwo";
import ForViewThreeTwoTwoThree from "./../forViewFormation/three/ForViewThreeTwoTwoThree";
import ForViewThreeTwoOneFour from "./../forViewFormation/three/ForViewThreeTwoOneFour";
import ForViewThreeOneFourTwo from "./../forViewFormation/three/ForViewThreeOneFourTwo";
import ForViewThreeOneThreeThree from "./../forViewFormation/three/ForViewThreeOneThreeThree";
import ForViewThreeOneTwoFour from "./../forViewFormation/three/ForViewThreeOneTwoFour";
// 5バック
import ForViewFiveFourOne from "./../forViewFormation/five/ForViewFiveFourOne";
import ForViewFiveThreeTwo from "./../forViewFormation/five/ForViewFiveThreeTwo";
import ForViewFiveThreeOneOne from "./../forViewFormation/five/ForViewFiveThreeOneOne";
import ForViewFiveTwoThree from "./../forViewFormation/five/ForViewFiveTwoThree";
import ForViewFiveTwoTwoOne from "./../forViewFormation/five/ForViewFiveTwoTwoOne";
import ForViewFiveTwoOneTwo from "./../forViewFormation/five/ForViewFiveTwoOneTwo";
import ForViewFiveOneFour from "./../forViewFormation/five/ForViewFiveOneFour";
import ForViewFiveOneThreeOne from "./../forViewFormation/five/ForViewFiveOneThreeOne";
import ForViewFiveOneTwoTwo from "./../forViewFormation/five/ForViewFiveOneTwoTwo";
import ForViewFiveOneOneThree from "./../forViewFormation/five/ForViewFiveOneOneThree";
import NotFound from "../../../pages/NotFound";

const Formation = memo(({ post }) => {
  if (post.formation) {
    switch (post.formation) {
      // 4バック
      case "442":
        return <ForViewFourFourTwo post={post} />;
      case "4411":
        return <ForViewFourFourOneOne post={post} />;
      case "433":
        return <ForViewFourThreeThree post={post} />;
      case "4321":
        return <ForViewFourThreeTwoOne post={post} />;
      case "4312":
        return <ForViewFourThreeOneTwo post={post} />;
      case "424":
        return <ForViewFourTwoFour post={post} />;
      case "4231":
        return <ForViewFourTwoThreeOne post={post} />;
      case "4222":
        return <ForViewFourTwoTwoTwo post={post} />;
      case "4213":
        return <ForViewFourTwoOneThree post={post} />;
      case "4141":
        return <ForViewFourOneFourOne post={post} />;
      case "4132":
        return <ForViewFourOneThreeTwo post={post} />;
      case "4123":
        return <ForViewFourOneTwoThree post={post} />;
      case "4114":
        return <ForViewFourOneOneFour post={post} />;

      // 3バック
      case "343":
        return <ForViewThreeFourThree post={post} />;
      case "3421":
        return <ForViewThreeFourTwoOne post={post} />;
      case "3412":
        return <ForViewThreeFourOneTwo post={post} />;
      case "334":
        return <ForViewThreeThreeFour post={post} />;
      case "3331":
        return <ForViewThreeThreeThreeOne post={post} />;
      case "3322":
        return <ForViewThreeThreeTwoTwo post={post} />;
      case "3313":
        return <ForViewThreeThreeOneThree post={post} />;
      case "3241":
        return <ForViewThreeTwoFourOne post={post} />;
      case "3232":
        return <ForViewThreeTwoThreeTwo post={post} />;
      case "3223":
        return <ForViewThreeTwoTwoThree post={post} />;
      case "3214":
        return <ForViewThreeTwoOneFour post={post} />;
      case "3142":
        return <ForViewThreeOneFourTwo post={post} />;
      case "3133":
        return <ForViewThreeOneThreeThree post={post} />;
      case "3124":
        return <ForViewThreeOneTwoFour post={post} />;

      // 5バック
      case "541":
        return <ForViewFiveFourOne post={post} />;
      case "532":
        return <ForViewFiveThreeTwo post={post} />;
      case "5311":
        return <ForViewFiveThreeOneOne post={post} />;
      case "523":
        return <ForViewFiveTwoThree post={post} />;
      case "5221":
        return <ForViewFiveTwoTwoOne post={post} />;
      case "5212":
        return <ForViewFiveTwoOneTwo post={post} />;
      case "514":
        return <ForViewFiveOneFour post={post} />;
      case "5131":
        return <ForViewFiveOneThreeOne post={post} />;
      case "5122":
        return <ForViewFiveOneTwoTwo post={post} />;
      case "5113":
        return <ForViewFiveOneOneThree post={post} />;

      default:
        return <NotFound />;
    }
  }

  return (
    <div className="position-relative d-flex vstack gap-0 h-100">
      <img src={courtImg} alt="court" className="img-fluid h-100" />
      <div className="players container-fluid vstack gap-0 position-absolute top-0 h-100 w-100">
        {/* <!-- grandchild_rowFW --> */}
        <div
          id="rowFW"
          className="rowFW d-flex justify-content-center flex-grow-1"
        >
          {/* player1 */}
          <div className="player1 d-flex flex-column justify-content-center align-items-center">
            <CircleIcon sx={{ color: "#FFFFEF" }} />
            <p className="fw-bold text-white text-center ">ウェルベック</p>
          </div>
        </div>
        {/* <!-- grandchild_rowAMF --> */}
        <div
          id="rowAMF"
          className="rowAMF d-flex justify-content-between flex-grow-1"
        >
          {/* player2 */}
          <div className="player2 d-flex flex-column justify-content-center align-items-center">
            <CircleIcon sx={{ color: "#FFFFEF" }} />
            <p className="fw-bold text-white text-center">三笘</p>
          </div>
          {/* player3 */}
          <div className="player3 d-flex flex-column justify-content-center align-items-center">
            <CircleIcon sx={{ color: "#FFFFEF" }} />
            <p className="fw-bold text-white text-center">マクアリスター</p>
          </div>
          {/* player4 */}
          <div className="player4 d-flex flex-column justify-content-center align-items-center">
            <CircleIcon sx={{ color: "#FFFFEF" }} />
            <p className="fw-bold text-white text-center">マーチ</p>
          </div>
        </div>
        {/* <!-- grandchild_rowDMF --> */}
        <div
          id="rowDMF"
          className="rowDMF d-flex justify-content-evenly flex-grow-1"
        >
          {/* player5 */}
          <div className="player5 d-flex flex-column justify-content-center align-items-center">
            <CircleIcon sx={{ color: "#FFFFEF" }} />
            <p className="fw-bold text-white text-center">カイセド</p>
          </div>
          {/* player6 */}
          <div className="player6 d-flex flex-column justify-content-center align-items-center">
            <CircleIcon sx={{ color: "#FFFFEF" }} />
            <p className="fw-bold text-white text-center">グロス</p>
          </div>
        </div>
        {/* <!-- grandchild_rowDF --> */}
        <div
          id="rowDF"
          className="rowDF d-flex justify-content-between flex-grow-1"
        >
          {/* player7 */}
          <div className="player7 d-flex flex-column justify-content-center align-items-center">
            <CircleIcon sx={{ color: "#FFFFEF" }} />
            <p className="fw-bold text-white text-center">エストゥピニャン</p>
          </div>
          {/* player8 */}
          <div className="player8 d-flex flex-column justify-content-center align-items-center">
            <CircleIcon sx={{ color: "#FFFFEF" }} />
            <p className="fw-bold text-white text-center">ダンク</p>
          </div>
          {/* player9 */}
          <div className="player9 d-flex flex-column justify-content-center align-items-center">
            <CircleIcon sx={{ color: "#FFFFEF" }} />
            <p className="fw-bold text-white text-center">ウェブスター</p>
          </div>
          {/* player10 */}
          <div className="player10 d-flex flex-column justify-content-center align-items-center">
            <CircleIcon sx={{ color: "#FFFFEF" }} />
            <p className="fw-bold text-white text-center">フェルトマン</p>
          </div>
        </div>
        {/* <!-- grandchild_rowGK --> */}
        <div className="rowGK d-flex justify-content-center flex-grow-1">
          {/* player11 */}
          <div className="player11 d-flex flex-column justify-content-center align-items-center">
            <CircleIcon sx={{ color: "#FFFFEF" }} />
            <p className="fw-bold text-white text-center pb-4">サンチェス</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Formation;
