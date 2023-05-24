import React, { useState, useRef } from "react";
import axios from "axios";
import ResultPost from "./ResultPost";
import { Avatar, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import ErrorComponent from "../common/ErrorComponent";
import NotResult from "./NotResult";
import AxiosLoading from "./../../pages/AxiosLoading";
import { useNavigate } from "react-router-dom";

const SearchPost = () => {
  const navigate = useNavigate();
  // 検索ローディング
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  // 取得した投稿を格納する変数
  const [posts, setPosts] = useState([]);
  // ヒットしなかった場合に出すコンポーネント
  const [isEmpty, setIsEmpty] = useState(false);
  // 空文字の場合に出すコンポーネント
  const [isAlert, setIsAlert] = useState(false);
  // ユーザーが検索したいキーワード
  const keyword = useRef();

  // 検索する関数
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSearchLoading(true);

      // 検索欄の中が空の場合
      if (
        keyword.current.value === "" ||
        typeof keyword.current.value === "undefined" ||
        keyword.current.value === null
      ) {
        setIsEmpty(false);
        setIsAlert(true);
        setIsSearchLoading(false);
        return;
      }

      // 警告文が出ていたら消してから検索
      if (isAlert === true) {
        setIsSearchLoading(false);
        setIsAlert(false);
      }

      await axios
        .get(
          process.env.REACT_APP_API_URL +
            `/posts/search/post/${keyword.current.value}`
        )
        .then((response) => {
          if (Object.keys(response.data).length === 0) {
            setIsEmpty(true);
            setIsSearchLoading(false);
            // もし前に検索した投稿があったら空にする
            if (posts) {
              setPosts([]);
            }
          } else {
            setIsEmpty(false);
            setIsSearchLoading(false);
            setPosts(response.data);
          }
        })
        .catch((err) => {
          setIsSearchLoading(false);
          console.log(err);
          navigate("*");
        });
      setIsSearchLoading(false);
    } catch (err) {
      setIsSearchLoading(false);
      console.log(err);
      navigate("*");
    }
  };

  return (
    <div className="search_post_input_form container-fluid p-0 border-bottom border-dark">
      {/* 検索欄 */}
      <div className="container-fluid p-0 m-0 border-start border-end border-bottom border-dark">
        <div className="form-outline mb-5 mx-5 text-center">
          <label htmlFor="search-input">
            <div className="main d-flex justify-content-center align-items-center gap-1">
              <h4 className="mt-5 mb-5">検索</h4>
              <Avatar sx={{ m: 0, color: "white", backgroundColor: "#1976d2" }}>
                <ContentPasteSearchIcon sx={{ m: 0 }} />
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
      {isSearchLoading ? (
        <AxiosLoading loadingMsg="検索中です" />
      ) : (
        <>
          {isEmpty ? <NotResult /> : <></>}
          {isAlert ? <ErrorComponent /> : <ResultPost posts={posts} />}
        </>
      )}
    </div>
  );
};

export default SearchPost;
