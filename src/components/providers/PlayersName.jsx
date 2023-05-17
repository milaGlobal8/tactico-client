import { createContext, useState } from "react";

export const PlayersNameContext = createContext({});

export const PlayersNameProvider = (props) => {
  const { children } = props;

  // player11人の名前を入れるState
  //選手名
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player3, setPlayer3] = useState("");
  const [player4, setPlayer4] = useState("");
  const [player5, setPlayer5] = useState("");
  const [player6, setPlayer6] = useState("");
  const [player7, setPlayer7] = useState("");
  const [player8, setPlayer8] = useState("");
  const [player9, setPlayer9] = useState("");
  const [player10, setPlayer10] = useState("");
  const [player11, setPlayer11] = useState("");

  // valueの中にグローバルに扱う値を設定
  return (
    <PlayersNameContext.Provider
      value={{
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
      }}
    >
      {children}
    </PlayersNameContext.Provider>
  );
};
