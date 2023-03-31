import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Modules/Homes/Homes";
import Explore from "../Modules/Explore/Widgets/Explore";
import Messages from "../Modules/Messages/Messages";
import Feeds from "../Modules/Explore/Widgets/Feeds.js";
import Reels from "../Modules/Explore/Widgets/Reels";
import FYP from "../Modules/Explore/Widgets/FYP";
import Profiles from "../Modules/Profiles/Profiles";
import NotFound from "../Layouts/Components/Error_404/Error_404";
import Login from "../Modules/Login/Login";

export default function AppRoute() {
  const routes = [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/explore",
      component: Explore,
      children: [
        { path: "feeds", component: Feeds },
        { path: "reels", component: Reels },
        { path: "fyp", component: FYP },
      ],
    },
    {
      path: "/messages",
      component: Messages,
    },
    {
      path: "/profile",
      component: Profiles,
    },
  ];

  return (
    <Routes>
      <Route
        index
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      {routes.map((e, index) =>
        e.children ? (
          <Route
            path={e.path}
            element={
              <Layout>
                <e.component />
              </Layout>
            }
            key={index}
          >
            {e.children.map((c, index) => (
              <Route path={c.path} element={<c.component />} key={index} />
            ))}
          </Route>
        ) : (
          <Route
            path={e.path}
            element={
              <Layout>
                <e.component />
              </Layout>
            }
            key={index}
          />
        )
      )}
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}