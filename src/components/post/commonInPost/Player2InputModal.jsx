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

const Player2InputModal = ({
  isInputModal2,
  setIsInputModal2,
  player2,
  setPlayer2,
}) => {
  const [inputRef, setInputRef] = useState(null);

  // モーダルが表示されたときにinputタグにフォーカスを移す
  useEffect(() => {
    if (isInputModal2 && inputRef) {
      inputRef.focus();
    }
  }, [isInputModal2, inputRef]);

  // モーダル画面を閉じる関数
  const closeInputModal = () => {
    setIsInputModal2(false);
  };

  return (
    <>
      {isInputModal2 ? (
        <div id="overlay" style={overlay}>
          <div id="modalContent" style={modalContent}>
            <input
              type="text"
              onChange={(e) => setPlayer2(e.target.value)}
              defaultValue={player2}
              ref={setInputRef}
            />
            <button onClick={closeInputModal}>
              {player2 ? "入力" : "閉じる"}
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Player2InputModal;
