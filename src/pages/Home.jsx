import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { SearchContext } from "../App";

import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination/index";

function Home() {
  const categoryId = useSelector((state) => state.filter.category);

  const dispatch = useDispatch();

  const setCategory = () => {};

  const { searchValue } = React.useContext(SearchContext);

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, serCurrentPage] = React.useState(1);

  const onClickCategories = (id) => {
    useDispatch;
  };

  // Вынос хуков из компонентов
  // const [categoryId, setCategoryId] = React.useState(0);
  const [sortId, setSortId] = React.useState({
    name: "Популярности",
    sortProperty: "rating",
  });

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://6643c2bb6c6a656587083ff3.mockapi.io/Items?${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortId.sortProperty}&order=desc&${
        searchValue ? `search=${searchValue}` : ""
      }&limit=4&page=${currentPage}`
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortId, searchValue, currentPage]);

  const pizzas = items
    .filter((obj) => {
      if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => (
      <PizzaBlock
        key={obj.id}
        id={obj.id}
        imageUrl={obj.imageUrl}
        name={obj.name}
        types={obj.types}
        sizes={obj.sizes}
        price={obj.price}
        category={obj.category}
        rating={obj.rating}
      />
    ));
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          categoryId={categoryId}
          onClickCategories={(index) => setCategoryId(index)}
        />
        <Sort sortId={sortId} onClickSort={(index) => setSortId(index)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <div>
        <Pagination onChangePage={(number) => serCurrentPage(number)} />
      </div>
    </div>
  );
}

export default Home;
