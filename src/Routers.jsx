import React, { useContext } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import EplPosts from "./components/home/eachPost/EplPosts";
import SllPosts from "./components/home/eachPost/SllPosts";
import GblPosts from "./components/home/eachPost/GblPosts";
import IsaPosts from "./components/home/eachPost/IsaPosts";
import Fl1Posts from "./components/home/eachPost/Fl1Posts";
import CLPosts from "./components/home/eachPost/CLPosts";
import ELPosts from "./components/home/eachPost/ELPosts";

import ViewAnotherUserProfile from "./pages/ViewAnotherUserProfile";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import ViewPostModel from "./pages/ViewPostModel";

import NotFound from "./pages/NotFound";
import { AuthContext } from "./state/AuthContext";
import NoUserViewPostModel from "./pages/NoUserViewPostModel";
import EditProfile from "./components/profile/edit/EditProfile";
import Mailer from "./components/inquiry/Mailer";
import Question from "./components/inquiry/question/Question";

const Routers = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={user ? <Post /> : <SignIn />} />
          <Route path="/search" element={user ? <Search /> : <SignIn />} />
          <Route path="/profile" element={user ? <Profile /> : <SignIn />} />
          <Route
            path="/signIn"
            element={user ? <Navigate to="/" /> : <SignIn />}
          />
          <Route
            path="/signUp"
            element={user ? <Navigate to="/" /> : <SignUp />}
          />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/eplPosts" element={<EplPosts />} />
          <Route path="/sllPosts" element={<SllPosts />} />
          <Route path="/gblPosts" element={<GblPosts />} />
          <Route path="/isaPosts" element={<IsaPosts />} />
          <Route path="/fl1Posts" element={<Fl1Posts />} />
          <Route path="/clPosts" element={<CLPosts />} />
          <Route path="/elPosts" element={<ELPosts />} />
          <Route
            path="/profile/:username"
            element={<ViewAnotherUserProfile />}
          />

          <Route path="/profile/:username/edit" element={<EditProfile />} />

          <Route
            path="/view-post"
            element={user ? <ViewPostModel /> : <NoUserViewPostModel />}
          />
          <Route path="/inquiry" element={<Mailer />} />
          <Route path="/question" element={<Question />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routers;
