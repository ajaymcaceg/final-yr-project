import React, { useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Authentication } from "./pages/Auth/Authentication";
import { Home } from "./pages/Home/Home";
import { useAppSelector } from "./state/hooks";
import { routeNamePath, routeNames } from "./data/routeUtils";

import { Profile } from "./pages/Profile/Profile";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { AddEditData } from "./components/AddEditData/AddEditData";
import { SearchData } from "./components/SearchData/SearchData";
import { Analytics } from "./components/Analytics/Analytics";
import { AnalyticsView } from "./pages/AnalyticsView";
function App() {
  // const isUserLoggediIn = isLoggedIn ? <Home /> : <Authentication />;
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/");
  //   }
  // }, [isLoggedIn]);

  return (
    <Routes>
      <Route path={routeNamePath[routeNames.HOME]} element={<Home />}>
        <Route
          path={routeNamePath[routeNames.HOME]}
          element={<AddEditData />}
        />
        <Route
          path={routeNamePath[routeNames.FORM]}
          element={<AddEditData />}
        />

        <Route
          path={routeNamePath[routeNames.Search]}
          element={<SearchData />}
        />

        <Route
          path={routeNamePath[routeNames.VIEW_DATA]}
          element={<Analytics />}
        />
        <Route
          path={routeNamePath[routeNames.ANALYTICS]}
          element={<AnalyticsView />}
        />
        <Route path={routeNamePath[routeNames.PROFILE]} element={<Profile />} />

        <Route path={"*"} element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
