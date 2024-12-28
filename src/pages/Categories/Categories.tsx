import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { CategoriesHead, CategoryContainer, CategoryNavlink } from "./ui";

const Categories: React.FC = () => {
  const { categories } = useLoaderData() as { categories: string[] };
  //   console.log("categories", categories);
  return (
    <>
      <CategoriesHead>
        <h3>Choose Your Category</h3>
      </CategoriesHead>
      <CategoryContainer>
        {categories.map((category, index) => (
          <CategoryNavlink
            to={`/products/categories/${category}`}
            key={category}
          >
            {index}.{category}
          </CategoryNavlink>
        ))}
      </CategoryContainer>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Categories;
