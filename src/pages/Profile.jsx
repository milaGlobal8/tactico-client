import React from "react";
import Header from "./../components/common/Header";
import Footer from "./../components/common/Footer";

import UserInfo from "./../components/profile/UserInfo";
import ProfileNavBar from "./../components/profile/ProfileNavBar";

const Profile = () => {
  return (
    <div
      className="my_profile container-fluid p-0 m-0 border border-dark"
      style={{ minHeight: "100vh" }}
    >
      <Header />
      <UserInfo />
      <ProfileNavBar />
      <Footer />
    </div>
  );
};

export default Profile;
