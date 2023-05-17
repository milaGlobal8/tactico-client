import React from "react";

const PostBtn = ({ isDisabled }) => {
  return (
    <div className="container-fluid w-100 p-4 border">
      <div className="d-grid gap-2">
        <button className="btn btn-primary" type="submit" disabled={isDisabled}>
          投稿する
        </button>
      </div>
    </div>
  );
};

export default PostBtn;
