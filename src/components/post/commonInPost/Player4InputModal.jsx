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

const Player4InputModal = ({
  isInputModal4,
  setIsInputModal4,
  player4,
  setPlayer4,
}) => {
  const [inputRef, setInputRef] = useState(null);

  // モーダルが表示されたときにinputタグにフォーカスを移す
  useEffect(() => {
    if (isInputModal4 && inputRef) {
      inputRef.focus();
    }
  }, [isInputModal4, inputRef]);

  // モーダル画面を閉じる関数
  const closeInputModal = () => {
    setIsInputModal4(false);
  };

  return (
    <>
      {isInputModal4 ? (
        <div id="overlay" style={overlay}>
          <div id="modalContent" style={modalContent}>
            <input
              type="text"
              onChange={(e) => setPlayer4(e.target.value)}
              defaultValue={player4}
              ref={setInputRef}
            />
            <button onClick={closeInputModal}>
              {player4 ? "入力" : "閉じる"}
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Player4InputModal;
