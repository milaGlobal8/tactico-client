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

const Player7InputModal = ({
  isInputModal7,
  setIsInputModal7,
  player7,
  setPlayer7,
}) => {
  const [inputRef, setInputRef] = useState(null);

  // モーダルが表示されたときにinputタグにフォーカスを移す
  useEffect(() => {
    if (isInputModal7 && inputRef) {
      inputRef.focus();
    }
  }, [isInputModal7, inputRef]);

  // モーダル画面を閉じる関数
  const closeInputModal = () => {
    setIsInputModal7(false);
  };

  return (
    <>
      {isInputModal7 ? (
        <div id="overlay" style={overlay}>
          <div id="modalContent" style={modalContent}>
            <input
              type="text"
              onChange={(e) => setPlayer7(e.target.value)}
              defaultValue={player7}
              ref={setInputRef}
            />
            <button onClick={closeInputModal}>
              {player7 ? "入力" : "閉じる"}
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Player7InputModal;
