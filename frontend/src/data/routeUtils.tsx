import { matchPath, useLocation } from "react-router-dom";

export enum routeNames {
  HOME = "Home",
  FORM = "Form",
  PROFILE = "Profile",
  ANALYTICS = "Analytics",
}
export const routeNamePath = {
  [routeNames.HOME]: "/",
  [routeNames.FORM]: "/form",
  [routeNames.ANALYTICS]: "/analytics",
  [routeNames.PROFILE]: "/profile",
};
export const routePaths = [
  { path: "/", name: routeNames.HOME },

  { path: "/analytics", name: routeNames.ANALYTICS },
  { path: "/form", name: routeNames.FORM },

  { path: "/profile", name: routeNames.PROFILE },
];
export const getRouteName = () => {
  const { pathname } = useLocation();
  for (const route of routePaths) {
    if (matchPath({ path: route.path }, pathname)) {
      return route.name;
    }
  }
  return pathname;
};
