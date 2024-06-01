import React from "react";
import "./scss/app.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Card";
import NotFoundBlock from "./components/NotFoundBlock/NotFoundBlock";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { decrement, increment } from "../src/redux/slises/FinlerSlise";

export const SearchContext = React.createContext("");

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*/cart" element={<Cart />} />
              <Route path="*" element={<NotFoundBlock />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
