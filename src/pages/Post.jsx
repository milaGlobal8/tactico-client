import React from "react";
import Header from "./../components/common/Header";
import PostForm from "./../components/post/PostForm";
import Footer from "./../components/common/Footer";

const Post = () => {
  return (
    <div className="container-fluid p-0 m-0 border-bottom border-dark">
      <Header />
      <PostForm />
      <Footer />
    </div>
  );
};

export default Post;
