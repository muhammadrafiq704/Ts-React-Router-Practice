import React from "react";
import { useLoaderData } from "react-router-dom";
import { SingleCategoryContainer, CategoryNavlink } from "./ui";
import { ProductImage, UIButton } from "../Products/ui";
import Scrollbars from "react-custom-scrollbars-2";
interface SingleCategory {
  id: number;
  category: string;
  description: string;
  price: number;
  title: string;
  image: string;
}
const Categories: React.FC = () => {
  const { SingleCategory } = useLoaderData() as {
    SingleCategory: SingleCategory[];
  };
  console.log("SingleCategory", SingleCategory);
  return (
    <SingleCategoryContainer>
      <Scrollbars style={{ width: "100%", height: "400px" }} autoHide>
        {SingleCategory.map((categoryName: SingleCategory) => (
          <>
            <div>
              <CategoryNavlink to={""}>
                <h4>{categoryName.category}</h4>
                <ProductImage>
                  <img
                    src={categoryName.image}
                    alt={`Product ${categoryName.title}`}
                  />
                </ProductImage>
                <p>{categoryName.title}</p>
                <span> Price:{categoryName.price}</span>
                <UIButton>Learn More</UIButton>
              </CategoryNavlink>
            </div>
          </>
        ))}
      </Scrollbars>
    </SingleCategoryContainer>
  );
};

export default Categories;
