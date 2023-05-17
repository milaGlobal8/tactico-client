import { useState } from "react";

export const useChangeComponent = () => {
  //どのボタンが選択されているかどうかの状態 State (デフォルトでは"European”が選択されている状態)
  const [euSelected, setEuSelected] = useState(true);
  const [japSelected, setJapSelected] = useState(false);
  const [nationalSelected, setNationalSelected] = useState(false);

  //ボタンがクリックされたときの関数
  const onClickChangeComponent = (e) => {
    //innerTextの中身に応じて投稿コンポーネントの表示を変更する
    if (e.target.innerText === "European") {
      setEuSelected(true);
      setJapSelected(false);
      setNationalSelected(false);
    } else if (e.target.innerText === "J-league") {
      setJapSelected(true);
      setEuSelected(false);
      setNationalSelected(false);
    } else if (e.target.innerText === "National") {
      setNationalSelected(true);
      setEuSelected(false);
      setJapSelected(false);
    }
  };

  return {
    euSelected,
    japSelected,
    nationalSelected,
    onClickChangeComponent,
  };
};
