import React from "react";
import styles from "./Search.module.scss";
import { SearchContext } from "../../App";

function Search() {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  return (
    <input
      value={searchValue}
      type="text"
      placeholder="Поиск пиццы..."
      className={styles.root}
      onChange={(event) => setSearchValue(event.target.value)}
    />
  );
}
export default Search;
