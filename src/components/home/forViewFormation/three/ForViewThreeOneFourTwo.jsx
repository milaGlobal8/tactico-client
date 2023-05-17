import React from "react";
import courtImg from "../../../../images/newCourt.jpg";
import CircleIcon from "@mui/icons-material/Circle";

const ForViewThreeOneFourTwo = ({ post }) => {
  return (
    <div className="container-fluid w-100 p-3">
      <div className="position-relative d-flex vstack gap-0 h-100">
        <img
          src={courtImg}
          alt="court"
          className="img-fluid h-100 border border-dark"
          style={{ maxHeight: "450px", maxWidth: "450px" }}
        />
        <div
          className="players container-fluid vstack gap-0 position-absolute top-0 h-100 w-100"
          style={{ maxHeight: "450px", maxWidth: "450px" }}
        >
          {/* <!-- grandchild_rowFW --> */}
          <div
            id="rowFW"
            className="rowFW d-flex justify-content-center flex-grow-1 gap-5"
          >
            {/* player1 */}
            <div className="player1 d-flex flex-column justify-content-center align-items-center">
              <CircleIcon sx={{ color: "#FFFFEF" }} />
              {/* 選手名 */}
              <p className="fw-bold text-white text-center">{post.player1}</p>
            </div>
            {/* player2 */}
            <div className="player2 d-flex flex-column justify-content-center align-items-center">
              <CircleIcon sx={{ color: "#FFFFEF" }} />
              {/* 選手名 */}
              <p className="fw-bold text-white text-center">{post.player2}</p>
            </div>
          </div>

          {/* <!-- grandchild_rowAMF --> */}
          <div
            id="rowAMF"
            className="rowAMF d-flex justify-content-around flex-grow-1"
          >
            {/* player3 */}
            <div className="player3 d-flex flex-column justify-content-center align-items-center">
              <CircleIcon sx={{ color: "#FFFFEF" }} />
              {/* 選手名 */}
              <p className="fw-bold text-white text-center">{post.player3}</p>
            </div>
            {/* player4 */}
            <div className="player4 d-flex flex-column justify-content-center align-items-center">
              <CircleIcon sx={{ color: "#FFFFEF" }} />
              {/* 選手名 */}
              <p className="fw-bold text-white text-center">{post.player4}</p>
            </div>
            {/* player5 */}
            <div className="player5 d-flex flex-column justify-content-center align-items-center">
              <CircleIcon sx={{ color: "#FFFFEF" }} />
              {/* 選手名 */}
              <p className="fw-bold text-white text-center">{post.player5}</p>
            </div>
            {/* player6 */}
            <div className="player6 d-flex flex-column justify-content-center align-items-center">
              <CircleIcon sx={{ color: "#FFFFEF" }} />
              {/* 選手名 */}
              <p className="fw-bold text-white text-center">{post.player6}</p>
            </div>
          </div>

          {/* <!-- grandchild_rowDMF --> */}
          <div
            id="rowDMF"
            className="rowDMF d-flex justify-content-center flex-grow-1"
          >
            {/* player7 */}
            <div className="player7 d-flex flex-column justify-content-center align-items-center">
              <CircleIcon sx={{ color: "#FFFFEF" }} />
              {/* 選手名 */}
              <p className="fw-bold text-white text-center">{post.player7}</p>
            </div>
          </div>

          {/* <!-- grandchild_rowDF --> */}
          <div
            id="rowDF"
            className="rowDF d-flex justify-content-around flex-grow-1"
          >
            {/* player8 */}
            <div className="player8 d-flex flex-column justify-content-center align-items-center">
              <CircleIcon sx={{ color: "#FFFFEF" }} />
              {/* 選手名 */}
              <p className="fw-bold text-white text-center">{post.player8}</p>
            </div>
            {/* player9 */}
            <div className="player9 d-flex flex-column justify-content-center align-items-center">
              <CircleIcon sx={{ color: "#FFFFEF" }} />
              {/* 選手名 */}
              <p className="fw-bold text-white text-center">{post.player9}</p>
            </div>
            {/* player10 */}
            <div className="player10 d-flex flex-column justify-content-center align-items-center">
              <CircleIcon sx={{ color: "#FFFFEF" }} />
              {/* 選手名 */}
              <p className="fw-bold text-white text-center">{post.player10}</p>
            </div>
          </div>

          {/* <!-- grandchild_rowGK --> */}
          <div className="rowGK d-flex justify-content-center flex-grow-1">
            {/* player11 */}
            <div className="player11 d-flex flex-column justify-content-center align-items-center">
              <CircleIcon sx={{ color: "#FFFFEF" }} />
              {/* 選手名 */}
              <p className="fw-bold text-white text-center">{post.player11}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForViewThreeOneFourTwo;
