import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AnalyticCard from "../../components/AnalyticCard";
import Title from "../../components/Title";
import displayAllBanners from "../../redux/thunk/banner/displayAllBanners";
import displayAllBlogs from "../../redux/thunk/blog/displayAllBlogs";
import displayAllBrands from "../../redux/thunk/brand/displayAllBrands";
import displayAllCategories from "../../redux/thunk/category/displayAllCategories";
import displayAllProducts from "../../redux/thunk/product/displayAllProducts";
import displayAllReviews from "../../redux/thunk/review/displayAllReviews";
import displayAllStores from "../../redux/thunk/store/displayAllStores";
import displayAllUsers from "../../redux/thunk/user/displayAllUsers";

const Analytics = () => {
  const dispatch = useDispatch();
  const {
    banner: { banners },
    blog: { blogs },
    brand: { brands },
    category: { categories },
    product: { products },
    review: { reviews },
    store: { stores },
    user: { users },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(displayAllBanners());
    dispatch(displayAllBlogs());
    dispatch(displayAllBrands());
    dispatch(displayAllCategories());
    dispatch(displayAllProducts());
    dispatch(displayAllReviews());
    dispatch(displayAllStores());
    dispatch(displayAllUsers());
  }, [dispatch]);

  const analytics = [
    { title: "banners", count: banners.length },
    { title: "blogs", count: blogs.length },
    { title: "brands", count: brands.length },
    { title: "categories", count: categories.length },
    { title: "products", count: products.length },
    { title: "reviews", count: reviews.length },
    { title: "stores", count: stores.length },
    { title: "users", count: users.length },
  ];

  return (
    <>
      <Title>Analytics</Title>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4">
        {analytics.map((analytic, index) => (
          <AnalyticCard
            key={index}
            title={analytic.title}
            count={analytic.count}
          />
        ))}
      </div>
    </>
  );
};

export default Analytics;
