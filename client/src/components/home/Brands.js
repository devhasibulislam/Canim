import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Card } from "flowbite-react";
import SectionHeader from "../SectionHeader";
import displayAllBrands from "../../redux/thunk/brand/displayAllBrands";

const Brands = () => {
  const dispatch = useDispatch();
  const { brands } = useSelector((state) => state.brand);

  useEffect(() => {
    dispatch(displayAllBrands());
  }, [dispatch]);

  return (
    <section className="container mx-auto my-8 lg:px-0 px-4 rounded-xl py-8" id="brands">
      <SectionHeader>Explore Brands</SectionHeader>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
        {brands.map(
          ({ _id, title, description, logo, email, website, location }) => (
            <div key={_id} className="max-w-sm">
              <Card
                imgAlt={logo?.public_id}
                imgSrc={logo?.url}
                className="h-full"
              >
                <h5
                  className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white overflow-hidden text-ellipsis whitespace-nowrap"
                  title={title}
                >
                  {title}
                </h5>
                <p title={description}>{description?.slice(0, 100) + "..."}</p>
                <div className="mt-2.5 mb-5 flex flex-wrap gap-2 items-center">
                  <Badge color="pink">{email}</Badge>
                  <Badge color="warning">{website}</Badge>
                  <Badge color="success">{location}</Badge>
                </div>
              </Card>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Brands;
