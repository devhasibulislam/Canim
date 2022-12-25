import { Badge, Button, Card } from "flowbite-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import displayAllProducts from "../../redux/thunk/product/displayAllProducts";
import { SiWish } from "react-icons/si";
import { BsCartPlusFill } from "react-icons/bs";
import { addToCart } from "../../hooks/useCart";
import { addToWishlist } from "../../hooks/useWishlist";
import SectionHeader from "../SectionHeader";

const Explore = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(displayAllProducts());
  }, [dispatch]);

  return (
    <section className="container mx-auto my-8 lg:px-0 px-4 rounded-xl py-8">
      <SectionHeader>Explore Products</SectionHeader>
      <div className="lg:columns-4 md:columns-2 columns-1 break-inside-avoid gap-6">
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
            <div key={_id} className="max-w-sm mb-4">
              <Card
                imgAlt={thumbnails[0]?.public_id}
                imgSrc={thumbnails[0]?.url}
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

/**
 * TailwindCSS Masonry Layout
 * https://medium.com/notonlycss/tailwindcss-masonry-layout-553cdaea2e8a
 */
