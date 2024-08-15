import React from "react";
import styles from "./Search.module.scss";
import { SearchContext } from "../../App";
import debounce from "lodash.debounce";

const Search: React.FC = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  const [value, setValue] = React.useState("");

  const testDebounce = React.useCallback(
    debounce((str) => {
      // console.log(str);
      setSearchValue(str);
    }, 1000),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    testDebounce(event.target.value);
  };

  // const onChangeInput = (event) => {
  //   setSearchValue(event.target.value);
  //   testDebounce();
  // };

  return (
    <input
      value={value}
      type="text"
      placeholder="Поиск пиццы..."
      className={styles.root}
      //onChange={(event) => setSearchValue(event.target.value)}
      onChange={onChangeInput}
    />
  );
};
export default Search;
