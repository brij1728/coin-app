import { Route, Routes } from "react-router-dom";

import { Home } from "../pages";

export const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
