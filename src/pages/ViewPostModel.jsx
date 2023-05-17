import React, { memo } from "react";
import Header from "./../components/common/Header";
import Footer from "./../components/common/Footer";
// 投稿コンポーネント
import PostTitleGrid from "./../components/home/postModel/PostTitleGrid";
import PostMainGrid from "./../components/home/postModel/PostMainGrid";
// データ系
import { useLocation } from "react-router-dom";

const ViewPostModel = memo(() => {
  // データの受け取り
  const location = useLocation();

  return (
    <div className="container-fluid p-0 m-0 border-bottom border-dark">
      <Header />
      {/* 投稿 */}
      <PostTitleGrid post={location.state} />
      <PostMainGrid post={location.state} />
      <Footer />
    </div>
  );
});
export default ViewPostModel;
