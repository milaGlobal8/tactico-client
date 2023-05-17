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

const Player9InputModal = ({
  isInputModal9,
  setIsInputModal9,
  player9,
  setPlayer9,
}) => {
  const [inputRef, setInputRef] = useState(null);

  // モーダルが表示されたときにinputタグにフォーカスを移す
  useEffect(() => {
    if (isInputModal9 && inputRef) {
      inputRef.focus();
    }
  }, [isInputModal9, inputRef]);

  // モーダル画面を閉じる関数
  const closeInputModal = () => {
    setIsInputModal9(false);
  };

  return (
    <>
      {isInputModal9 ? (
        <div id="overlay" style={overlay}>
          <div id="modalContent" style={modalContent}>
            <input
              type="text"
              onChange={(e) => setPlayer9(e.target.value)}
              defaultValue={player9}
              ref={setInputRef}
            />
            <button onClick={closeInputModal}>
              {player9 ? "入力" : "閉じる"}
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Player9InputModal;
