import React, { useState, useEffect } from "react";

const modalContent = {
  background: "white",
  padding: "10px",
  borderRadius: "3px",
};

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Player1InputModal = ({
  isInputModal1,
  setIsInputModal1,
  player1,
  setPlayer1,
}) => {
  const [inputRef, setInputRef] = useState(null);

  // モーダルが表示されたときにinputタグにフォーカスを移す
  useEffect(() => {
    if (isInputModal1 && inputRef) {
      inputRef.focus();
    }
  }, [isInputModal1, inputRef]);

  // モーダル画面を閉じる関数
  const closeInputModal = () => {
    setIsInputModal1(false);
  };

  return (
    <>
      {isInputModal1 ? (
        <div id="overlay" style={overlay}>
          <div id="modalContent" style={modalContent}>
            <input
              type="text"
              onChange={(e) => setPlayer1(e.target.value)}
              defaultValue={player1}
              ref={setInputRef}
            />
            <button onClick={closeInputModal}>
              {player1 ? "入力" : "閉じる"}
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Player1InputModal;
