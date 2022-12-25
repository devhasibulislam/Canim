import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Card } from "flowbite-react";
import SectionHeader from "../SectionHeader";
import displayAllStores from "../../redux/thunk/store/displayAllStores";

const Stores = () => {
  const dispatch = useDispatch();
  const { stores } = useSelector((state) => state.store);

  useEffect(() => {
    dispatch(displayAllStores());
  }, [dispatch]);

  return (
    <div className="bg-slate-100" id="stores">
      <section className="container mx-auto my-8 lg:px-0 px-4 rounded-xl py-8">
        <SectionHeader>Explore Stores</SectionHeader>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
          {stores.map(
            ({ _id, title, description, thumbnail, seller, status }) => (
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
                  <p title={description}>
                    {description?.slice(0, 100) + "..."}
                  </p>
                  <div className="mt-2.5 mb-5 flex flex-wrap gap-2 items-center">
                    <Badge color="pink">{seller?.name}</Badge>
                    <Badge color="warning">{status}</Badge>
                  </div>
                </Card>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Stores;
