import { useEffect, useState } from "react";
import "./App.css";
import Routers from "./Routers";
import AxiosLoading from "./pages/AxiosLoading";
import axios from "axios";

function App() {
  // 初期化を検知するState
  const [isFlag, setIsFlag] = useState(true);
  const [startMsg, setStartMsg] = useState("");

  // 初回のみにサーバーが起動するまで動作するローディング
  useEffect(() => {
    if (!isFlag && startMsg) return;

    const checkServer = async () => {
      await axios
        .get(process.env.REACT_APP_API_URL + "/auth/start/server")
        .then((res) => {
          setStartMsg(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsFlag(false);
        });
    };
    checkServer();
  }, [isFlag, !startMsg]);

  return (
    <div className="wrapper vh-100">
      {isFlag ? (
        <AxiosLoading loadingMsg="起動までに30秒ほどかかる場合がございます" />
      ) : (
        <Routers />
      )}
    </div>
  );
}

export default App;
