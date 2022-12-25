import { Badge, Button, Card } from "flowbite-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import displayAllProducts from "../../redux/thunk/product/displayAllProducts";
import { SiWish } from "react-icons/si";
import { BsCartPlusFill } from "react-icons/bs";
import { addToCart } from "../../hooks/useCart";
import { addToWishlist } from "../../hooks/useWishlist";

const Explore = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(displayAllProducts());
  }, [dispatch]);

  return (
    <section className="bg-slate-100 container mx-auto my-4 lg:px-0 px-4 rounded-xl">
      <h1 className="lg:text-6xl md:text-3xl text-xl text-center py-4">
        Explore your needs
      </h1>
      <div className="p-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {products.map(
          ({
            _id,
            title,
            description,
            thumbnails,
            price,
            category,
            brand,
            store,
          }) => (
            <div key={_id} className="max-w-sm">
              <Card
                imgAlt={thumbnails[0]?.public_id}
                imgSrc={thumbnails[0]?.url}
                className="h-full"
              >
                <a href="/">
                  <h5
                    className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white overflow-hidden text-ellipsis whitespace-nowrap"
                    title={title}
                  >
                    {title}
                  </h5>
                </a>
                <p title={description}>{description?.slice(0, 100) + "..."}</p>
                <div className="mt-2.5 mb-5 flex gap-x-2 items-center">
                  <Badge color="pink">{category?.title}</Badge>
                  <Badge color="warning">{brand?.title}</Badge>
                  <Badge color="indigo">{store?.title}</Badge>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${price}
                  </span>
                  <div className="flex items-center gap-x-2">
                    <Button
                      pill={true}
                      onClick={() =>
                        addToCart({
                          _id,
                          title,
                          description,
                          thumbnails,
                          price,
                          category,
                          brand,
                          store,
                          quantity: 1,
                        })
                      }
                    >
                      <BsCartPlusFill />
                    </Button>
                    <Button
                      color={"purple"}
                      pill={true}
                      onClick={() =>
                        addToWishlist({
                          _id,
                          title,
                          description,
                          thumbnails,
                          price,
                          category,
                          brand,
                          store,
                          quantity: 1,
                        })
                      }
                    >
                      <SiWish />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Explore;
