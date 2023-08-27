import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GalleryPage from "./GalleryPage";
import LandingPage from "./LandingPage";
import PostsPage from "./PostsPage";
import Profile from "./Profile";
import ProfilePage from "./ProfilePage";
import ToDoPage from "./ToDoPage";

const AllRoutes = () => {
  return (
    <div>
      {" "}
      <Router>
        {" "}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/profile/:id"
            element={
              <Profile>
                <ProfilePage />
              </Profile>
            }
          />
          <Route
            path="/posts"
            element={
              <Profile>
                {" "}
                <PostsPage />
              </Profile>
            }
          />
          <Route
            path="/gallery"
            element={
              <Profile>
                {" "}
                <GalleryPage />
              </Profile>
            }
          />
          <Route
            path="/todo"
            element={
              <Profile>
                {" "}
                <ToDoPage />
              </Profile>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default AllRoutes;
