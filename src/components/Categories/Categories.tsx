import React from "react";

type CategoriesProps = {
  categoryId: number;
  onClickCategories: (i: number) => void;
};

const Categories: React.FC<CategoriesProps> = ({
  categoryId,
  onClickCategories,
}) => {
  const [category, setCategory] = React.useState(0);

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  // function onClickCategories(index) {
  //   setCategory(index);
  // }

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            onClick={() => onClickCategories(index)}
            className={categoryId === index ? "active" : ""}
            key={index}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
