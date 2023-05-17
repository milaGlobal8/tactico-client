import React from "react";

const EnterPostTitle = ({ setPostTitle }) => {
  const handleChangePostTitle = (e) => {
    setPostTitle(e.target.value);
  };
  return (
    <div className="container-fluid w-100 p-4 border">
      <input
        className="form-control"
        type="text"
        placeholder="投稿する試合のタイトルを入力してください"
        onChange={(e) => handleChangePostTitle(e)}
      />
    </div>
  );
};

export default EnterPostTitle;
