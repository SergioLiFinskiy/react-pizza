import React from "react";

function Categories(props) {
  const [category, setCategory] = React.useState(0);

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  function onClickCategories(index) {
    setCategory(index);
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            onClick={() => props.onClickCategories(index)}
            className={props.categoryId === index ? "active" : ""}
            key={index}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
