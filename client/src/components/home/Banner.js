import React, { useEffect } from "react";
import { Button, Carousel } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import displayAllBanners from "../../redux/thunk/banner/displayAllBanners";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const dispatch = useDispatch();
  const { banners } = useSelector((state) => state.banner);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(displayAllBanners());
  }, [dispatch]);

  return (
    <div
      className="h-56 sm:h-64 xl:h-80 2xl:h-96 bg-repeat bg-contain"
      style={{ backgroundImage: "url(/slider_bg.svg)" }}
    >
      <Carousel>
        {banners.map(
          ({
            title,
            description,
            thumbnail: { url, public_id },
            url: anchor,
            _id,
          }) => (
            <div
              key={_id}
              className="flex lg:justify-between md:justify-between lg:flex-row md:flex-row flex-col items-center"
            >
              <article className="flex flex-col lg:gap-y-4 md:gap-y-4 gap-y-2 lg:order-1 md:order-1 order-2 w-full">
                <h1 className="lg:text-6xl md:text-3xl text-xl">{title}</h1>
                <p className="lg:font-bold md:font-bold text-sm">
                  {description}
                </p>
                <Button
                  color={"purple"}
                  className="w-fit"
                  onClick={() => navigate(`//${anchor}`)}
                >
                  Click here
                </Button>
              </article>
              <img
                src={url}
                alt={public_id}
                className="max-w-full lg:w-1/2 md:w-1/2 w-full lg:h-auto md:h-auto h-20 lg:order-2 md:order-2 order-1 object-cover"
                loading="lazy"
              />
            </div>
          )
        )}
      </Carousel>
    </div>
  );
};

export default Banner;
