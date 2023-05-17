import React, { useState, useContext } from "react";
import courtImg from "../../../../images/newCourt.jpg";
import CircleIcon from "@mui/icons-material/Circle";
import Player1InputModal from "../../commonInPost/Player1InputModal";
import Player2InputModal from "../../commonInPost/Player2InputModal";
import Player3InputModal from "../../commonInPost/Player3InputModal";
import Player4InputModal from "../../commonInPost/Player4InputModal";
import Player5InputModal from "../../commonInPost/Player5InputModal";
import Player6InputModal from "../../commonInPost/Player6InputModal";
import Player7InputModal from "../../commonInPost/Player7InputModal";
import Player8InputModal from "../../commonInPost/Player8InputModal";
import Player9InputModal from "../../commonInPost/Player9InputModal";
import Player10InputModal from "../../commonInPost/Player10InputModal";
import Player11InputModal from "../../commonInPost/Player11InputModal";
import { PlayersNameContext } from "./../../../providers/PlayersName";

const FourTwoOneThree = () => {
  //モーダルを表示するか否か
  const [isInputModal1, setIsInputModal1] = useState(false);
  const [isInputModal2, setIsInputModal2] = useState(false);
  const [isInputModal3, setIsInputModal3] = useState(false);
  const [isInputModal4, setIsInputModal4] = useState(false);
  const [isInputModal5, setIsInputModal5] = useState(false);
  const [isInputModal6, setIsInputModal6] = useState(false);
  const [isInputModal7, setIsInputModal7] = useState(false);
  const [isInputModal8, setIsInputModal8] = useState(false);
  const [isInputModal9, setIsInputModal9] = useState(false);
  const [isInputModal10, setIsInputModal10] = useState(false);
  const [isInputModal11, setIsInputModal11] = useState(false);

  //選手名
  // Context内のplayer11人分を取得
  const {
    player1,
    setPlayer1,
    player2,
    setPlayer2,
    player3,
    setPlayer3,
    player4,
    setPlayer4,
    player5,
    setPlayer5,
    player6,
    setPlayer6,
    player7,
    setPlayer7,
    player8,
    setPlayer8,
    player9,
    setPlayer9,
    player10,
    setPlayer10,
    player11,
    setPlayer11,
  } = useContext(PlayersNameContext);

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
            className="rowFW d-flex justify-content-around flex-grow-1"
          >
            {/* player1 */}
            <div className="player1 d-flex flex-column justify-content-center align-items-center">
              <CircleIcon
                sx={{ color: "#FFFFEF" }}
                onClick={() => setIsInputModal1(!isInputModal1)}
              />
              {isInputModal1 ? (
                <Player1InputModal
                  isInputModal1={isInputModal1}
                  setIsInputModal1={setIsInputModal1}
                  player1={player1}
                  setPlayer1={setPlayer1}
                />
              ) : (
                <></>
              )}
              {/* 選手名 */}
              {player1 !== null && player1 !== undefined ? (
                <p className="fw-bold text-white text-center">{player1}</p>
              ) : (
                <></>
              )}
            </div>{" "}
            {/* player2 */}
            <div className="player2 d-flex flex-column justify-content-center align-items-center">
              <CircleIcon
                sx={{ color: "#FFFFEF" }}
                onClick={() => setIsInputModal2(!isInputModal2)}
              />
              {isInputModal2 ? (
                <Player2InputModal
                  isInputModal2={isInputModal2}
                  setIsInputModal2={setIsInputModal2}
                  player2={player2}
                  setPlayer2={setPlayer2}
                />
              ) : (
                <></>
              )}
              {/* 選手名 */}
              {player2 !== null && player2 !== undefined ? (
                <p className="fw-bold text-white text-center">{player2}</p>
              ) : (
                <></>
              )}
            </div>{" "}
            {/* player3 */}
            <div className="player3 d-flex flex-column justify-content-center align-items-center">
              <CircleIcon
                sx={{ color: "#FFFFEF" }}
                onClick={() => setIsInputModal3(!isInputModal3)}
              />
              {isInputModal3 ? (
                <Player3InputModal
                  isInputModal3={isInputModal3}
                  setIsInputModal3={setIsInputModal3}
                  player3={player3}
                  setPlayer3={setPlayer3}
                />
              ) : (
                <></>
              )}
              {/* 選手名 */}
              {player3 !== null && player3 !== undefined ? (
                <p className="fw-bold text-white text-center">{player3}</p>
              ) : (
                <></>
              )}
            </div>{" "}
          </div>

          {/* <!-- grandchild_rowAMF --> */}
          <div
            id="rowAMF"
            className="rowAMF d-flex justify-content-center flex-grow-1 gap-5"
          >
            {" "}
            {/* player4 */}
            <div className="player4 d-flex flex-column justify-content-center align-items-center">
              <CircleIcon
                sx={{ color: "#FFFFEF" }}
                onClick={() => setIsInputModal4(!isInputModal4)}
              />
              {isInputModal4 ? (
                <Player4InputModal
                  isInputModal4={isInputModal4}
                  setIsInputModal4={setIsInputModal4}
                  player4={player4}
                  setPlayer4={setPlayer4}
                />
              ) : (
                <></>
              )}
              {/* 選手名 */}
              {player4 !== null && player4 !== undefined ? (
                <p className="fw-bold text-white text-center">{player4}</p>
              ) : (
                <></>
              )}
            </div>
          </div>

          {/* <!-- grandchild_rowDMF --> */}
          <div
            id="rowDMF"
            className="rowDMF d-flex justify-content-evenly flex-grow-1"
          >
            {" "}
            {/* player5 */}
            <div className="player5 d-flex flex-column justify-content-center align-items-center">
              <CircleIcon
                sx={{ color: "#FFFFEF" }}
                onClick={() => setIsInputModal5(!isInputModal5)}
              />
              {isInputModal5 ? (
                <Player5InputModal
                  isInputModal5={isInputModal5}
                  setIsInputModal5={setIsInputModal5}
                  player5={player5}
                  setPlayer5={setPlayer5}
                />
              ) : (
                <></>
              )}
              {/* 選手名 */}
              {player5 !== null && player5 !== undefined ? (
                <p className="fw-bold text-white text-center">{player5}</p>
              ) : (
                <></>
              )}
            </div>
            {/* player6 */}
            <div className="player6 d-flex flex-column justify-content-center align-items-center">
              <CircleIcon
                sx={{ color: "#FFFFEF" }}
                onClick={() => setIsInputModal6(!isInputModal6)}
              />
              {isInputModal6 ? (
                <Player6InputModal
                  isInputModal6={isInputModal6}
                  setIsInputModal6={setIsInputModal6}
                  player6={player6}
                  setPlayer6={setPlayer6}
                />
              ) : (
                <></>
              )}
              {/* 選手名 */}
              {player6 !== null && player6 !== undefined ? (
                <p className="fw-bold text-white text-center">{player6}</p>
              ) : (
                <></>
              )}{" "}
            </div>
          </div>

          {/* <!-- grandchild_rowDF --> */}
          <div
            id="rowDF"
            className="rowDF d-flex justify-content-around flex-grow-1"
          >
            {" "}
            {/* player7 */}
            <div className="player7 d-flex flex-column justify-content-center align-items-center">
              <CircleIcon
                sx={{ color: "#FFFFEF" }}
                onClick={() => setIsInputModal7(!isInputModal7)}
              />
              {isInputModal7 ? (
                <Player7InputModal
                  isInputModal7={isInputModal7}
                  setIsInputModal7={setIsInputModal7}
                  player7={player7}
                  setPlayer7={setPlayer7}
                />
              ) : (
                <></>
              )}
              {/* 選手名 */}
              {player7 !== null && player7 !== undefined ? (
                <p className="fw-bold text-white text-center">{player7}</p>
              ) : (
                <></>
              )}{" "}
            </div>
            {/* player8 */}
            <div className="player8 d-flex flex-column justify-content-center align-items-center">
              <CircleIcon
                sx={{ color: "#FFFFEF" }}
                onClick={() => setIsInputModal8(!isInputModal8)}
              />
              {isInputModal8 ? (
                <Player8InputModal
                  isInputModal8={isInputModal8}
                  setIsInputModal8={setIsInputModal8}
                  player8={player8}
                  setPlayer8={setPlayer8}
                />
              ) : (
                <></>
              )}
              {/* 選手名 */}
              {player8 !== null && player8 !== undefined ? (
                <p className="fw-bold text-white text-center">{player8}</p>
              ) : (
                <></>
              )}{" "}
            </div>
            {/* player9 */}
            <div className="player9 d-flex flex-column justify-content-center align-items-center">
              <CircleIcon
                sx={{ color: "#FFFFEF" }}
                onClick={() => setIsInputModal9(!isInputModal9)}
              />
              {isInputModal9 ? (
                <Player9InputModal
                  isInputModal9={isInputModal9}
                  setIsInputModal9={setIsInputModal9}
                  player9={player9}
                  setPlayer9={setPlayer9}
                />
              ) : (
                <></>
              )}
              {/* 選手名 */}
              {player9 !== null && player9 !== undefined ? (
                <p className="fw-bold text-white text-center">{player9}</p>
              ) : (
                <></>
              )}{" "}
            </div>
            {/* player10 */}
            <div className="player10 d-flex flex-column justify-content-center align-items-center">
              <CircleIcon
                sx={{ color: "#FFFFEF" }}
                onClick={() => setIsInputModal10(!isInputModal10)}
              />
              {isInputModal10 ? (
                <Player10InputModal
                  isInputModal10={isInputModal10}
                  setIsInputModal10={setIsInputModal10}
                  player10={player10}
                  setPlayer10={setPlayer10}
                />
              ) : (
                <></>
              )}
              {/* 選手名 */}
              {player10 !== null && player10 !== undefined ? (
                <p className="fw-bold text-white text-center">{player10}</p>
              ) : (
                <></>
              )}{" "}
            </div>
          </div>

          {/* <!-- grandchild_rowGK --> */}
          <div className="rowGK d-flex justify-content-center flex-grow-1">
            {/* player11 */}
            <div className="player11 d-flex flex-column justify-content-center align-items-center">
              <CircleIcon
                sx={{ color: "#FFFFEF" }}
                onClick={() => setIsInputModal11(!isInputModal11)}
              />
              {isInputModal11 ? (
                <Player11InputModal
                  isInputModal11={isInputModal11}
                  setIsInputModal11={setIsInputModal11}
                  player11={player11}
                  setPlayer11={setPlayer11}
                />
              ) : (
                <></>
              )}
              {/* 選手名 */}
              {player11 !== null && player11 !== undefined ? (
                <p className="fw-bold text-white text-center">{player11}</p>
              ) : (
                <></>
              )}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourTwoOneThree;
