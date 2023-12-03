import React from "react";
import { Provider } from "react-redux";
import store from "./globalComponents/features/store";
import Home from "./components/Home";
import GlobalStyle from "./globalComponents/globalStyle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DepartmentDetails from "./components/DepartmentIDetails";
import ArtworkDetails from "./components/ArtWorkDetails";
import Favorites from "./components/Favorites";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/department/:id"
              element={<DepartmentDetails />}
            />
            <Route path="/artwork/:id" element={<ArtworkDetails />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} /> 
          </Routes>
        </Router>
      </Provider>
    </>
  );
}