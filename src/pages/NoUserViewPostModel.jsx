import React from "react";
import Header from "./../components/common/Header";
import Footer from "./../components/common/Footer";
// 投稿コンポーネント
import NoUserPostTitleGrid from "./../components/home/postModel/NoUserPostTitleGrid";
import NoUserPostMainGrid from "./../components/home/postModel/NoUserPostMainGrid";
// データ系
import { useLocation } from "react-router-dom";

const NoUserViewPostModel = () => {
  const location = useLocation();

  return (
    <div className="container-fluid p-0 m-0 border-bottom border-dark">
      <Header />
      {/* 投稿 */}
      <NoUserPostTitleGrid post={location.state} />
      <NoUserPostMainGrid post={location.state} />
      <Footer />
    </div>
  );
};

export default NoUserViewPostModel;
