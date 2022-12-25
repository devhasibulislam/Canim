import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "flowbite-react";
import SectionHeader from "../SectionHeader";
import displayAllCategories from "../../redux/thunk/category/displayAllCategories";

const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(displayAllCategories());
  }, [dispatch]);

  return (
    <div className="bg-slate-100" id="categories">
      <section className="container mx-auto my-8 lg:px-0 px-4 rounded-xl py-8">
        <SectionHeader>Explore Categories</SectionHeader>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
          {categories.map(({ _id, title, description, thumbnail }) => (
            <div key={_id} className="max-w-sm">
              <Card
                imgAlt={thumbnail?.public_id}
                imgSrc={thumbnail?.url}
                className="h-full"
              >
                <h5
                  className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white overflow-hidden text-ellipsis whitespace-nowrap"
                  title={title}
                >
                  {title}
                </h5>
                <p title={description}>{description?.slice(0, 100) + "..."}</p>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Categories;
