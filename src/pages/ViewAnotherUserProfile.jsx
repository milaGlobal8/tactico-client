import React, { useContext } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import AnotherProfileNavBar from "../components/profile/AnotherProfileNavBar";
import ViewAnotherUserInfo from "./../components/profile/ViewAnotherUserInfo";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../state/AuthContext";
import Profile from "./Profile";

const ViewAnotherUserProfile = () => {
  // context
  const { user: currentUser } = useContext(AuthContext);
  // データの受け取り
  const location = useLocation();
  // navigate
  switch (location.state.userId) {
    case currentUser._id:
      return <Profile />;
    default:
      return (
        <div className="another_user_profile container-fluid vh-100 p-0 m-0 border border-dark">
          <Header />
          <ViewAnotherUserInfo user={location.state} />
          <AnotherProfileNavBar user={location.state} />
          <Footer />
        </div>
      );
  }
};

export default ViewAnotherUserProfile;
