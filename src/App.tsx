import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import HomePage from "./pages/home";

export const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Layout}>
        <Route index Component={HomePage} />
      </Route>
    </Routes>
  );
};
