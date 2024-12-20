import React, { useState, useRef } from "react";
import axios from "axios";
import ResultUser from "./ResultUser";
import { Tooltip, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import ErrorComponent from "../common/ErrorComponent";
import NotResult from "./NotResult";

const SearchUser = () => {
  // 取得したユーザーを格納する変数
  const [users, setUsers] = useState([]);
  // ヒットしなかった場合に出すコンポーネント
  const [isEmpty, setIsEmpty] = useState(false);
  // 空文字の場合に出すコンポーネント
  const [isAlert, setIsAlert] = useState(false);
  // ユーザーが検索したいキーワード
  const keyword = useRef();

  // 検索する関数
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      keyword.current.value === "" ||
      typeof keyword.current.value === "undefined" ||
      keyword.current.value === null
    ) {
      setIsEmpty(false);
      setIsAlert(true);
      return;
    }

    if (isAlert === true) setIsAlert(false);
    const response = await axios.get(
      process.env.REACT_APP_API_URL +
        `/users/search/user/${keyword.current.value}`
    );

    if (Object.keys(response.data).length === 0) {
      setIsEmpty(true);
      // もし投稿があったら
      if (users) {
        setUsers([]);
      }
    } else {
      setIsEmpty(false);
      setUsers(response.data);
    }
  };
  return (
    <div className="search_user_input_form container-fluid p-0 border-bottom border-dark">
      {/* 検索欄 */}
      <div className="container-fluid p-0 m-0 border-start border-end border-bottom border-dark">
        <div className="form-outline mb-5 mx-5 text-center">
          <label htmlFor="search-input">
            <div className="main d-flex justify-content-center align-items-center gap-1">
              <h4 className="mt-5 mb-5">検索</h4>
              <Avatar sx={{ m: 0, color: "white", backgroundColor: "#1976d2" }}>
                <PersonSearchIcon sx={{ m: 0 }} />
              </Avatar>
            </div>
          </label>
          <form action="POST" onSubmit={(e) => handleSubmit(e)}>
            <div className="input-group">
              <input
                type="search"
                className="form-control"
                id="search-input"
                aria-label="Search"
                placeholder="検索"
                ref={keyword}
              />
              <button
                className="btn btn-outline-secondary"
                type="submit"
                id="button-addon2"
              >
                <Tooltip title="検索">
                  <SearchIcon />
                </Tooltip>
              </button>
            </div>
          </form>
          <label className="form-label" htmlFor="search-input"></label>
        </div>
      </div>

      <div className="result border border-dark bg-light">
        <h2 className="text-center py-2 m-0">検索結果</h2>
      </div>
      {isEmpty ? <NotResult /> : <></>}
      {isAlert ? <ErrorComponent /> : <ResultUser users={users} />}
    </div>
  );
};

export default SearchUser;
