import React from "react";
import "./scss/app.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Card";
import NotFoundBlock from "./components/NotFoundBlock/NotFoundBlock";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

export const SearchContext = React.createContext({});

function App() {
  const [searchValue, setSearchValue] = React.useState("");
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
