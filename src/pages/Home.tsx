import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchContext } from "../App";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { setCategoryId, setFilters } from "../redux/slises/FilterSlise";
import { fetchPizzas } from "../redux/slises/pizzasSlice";
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort.tsx";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination/index";

import { list } from "../components/Sort/Sort.tsx";

const Home: React.FC = () => {
  const categoryId = useSelector((state) => state.filter.category);
  const { items, status } = useSelector((state) => state.pizza);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { searchValue } = React.useContext(SearchContext);
  const [currentPage, serCurrentPage] = React.useState(1);
  const onClickCategories = (id: number) => {
    dispatch(setCategoryId(id));
  };
  const [sortId, setSortId] = React.useState({
    name: "Популярности",
    sortProperty: "rating",
  });

  const getPizzas = async () => {
    dispatch(fetchPizzas({ categoryId, sortId, searchValue, currentPage }));

    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = list.find((obj) => {
        return obj.sortProperty === params.sortProperty;
      });

      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
    }
  });

  React.useEffect(() => {
    getPizzas();
  }, [categoryId, sortId, searchValue, currentPage]);

  React.useEffect(() => {
    const queryString = qs.stringify({
      sortProperty: sortId.sortProperty,
      categoryId,
      currentPage,
    });

    navigate(`?${queryString}`);
  }, [categoryId, sortId, currentPage]);

  const pizzas = Array.from(items)
    .filter((obj) => {
      if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      } else {
        return false;
      }
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
          onClickCategories={onClickCategories}
        />
        <Sort sortId={sortId} onClickSort={(index) => setSortId(index)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {status === "loading" ? skeletons : pizzas}
      </div>
      <div>
        <Pagination onChangePage={(number) => serCurrentPage(number)} />
      </div>
    </div>
  );
};

export default Home;
