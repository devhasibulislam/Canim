import RequireAuth from "../components/RequireAuth";
import Dashboard from "../layout/dashboard/Dashboard";
import Analytics from "../pages/dashboard/Analytics";
import AddBanner from "../pages/dashboard/banner/AddBanner";
import BannerList from "../pages/dashboard/banner/BannerList";
import UpdateBanner from "../pages/dashboard/banner/UpdateBanner";
import AddBlog from "../pages/dashboard/blog/AddBlog";
import BlogList from "../pages/dashboard/blog/BlogList";
import UpdateBlog from "../pages/dashboard/blog/UpdateBlog";
import AddBrand from "../pages/dashboard/brand/AddBrand";
import BrandList from "../pages/dashboard/brand/BrandList";
import UpdateBrand from "../pages/dashboard/brand/UpdateBrand";
import AddCategory from "../pages/dashboard/category/AddCategory";
import CategoryList from "../pages/dashboard/category/CategoryList";
import UpdateCategory from "../pages/dashboard/category/UpdateCategory";
import AddProduct from "../pages/dashboard/product/AddProduct";
import ProductList from "../pages/dashboard/product/ProductList";
import UpdateProduct from "../pages/dashboard/product/UpdateProduct";
import AddReview from "../pages/dashboard/review/AddReview";
import ReviewList from "../pages/dashboard/review/ReviewList";
import UpdateReview from "../pages/dashboard/review/UpdateReview";
import AddStore from "../pages/dashboard/store/AddStore";
import StoreList from "../pages/dashboard/store/StoreList";
import UpdateStore from "../pages/dashboard/store/UpdateStore";
import ManageUsers from "../pages/dashboard/user/ManageUsers";
import UpdateUser from "../pages/dashboard/user/UpdateUser";

const dashboardRoute = {
  path: "/dashboard",
  element: (
    <RequireAuth>
      <Dashboard />
    </RequireAuth>
  ),
  children: [
    {
      path: "/dashboard",
      element: <Analytics />,
    },
    {
      path: "add-banner",
      element: <AddBanner />,
    },
    {
      path: "banner-list",
      element: <BannerList />,
    },
    {
      path: "banner-list/update/:_id",
      element: <UpdateBanner />,
    },
    {
      path: "add-blog",
      element: <AddBlog />,
    },
    {
      path: "blog-list",
      element: <BlogList />,
    },
    {
      path: "blog-list/update/:_id",
      element: <UpdateBlog />,
    },
    {
      path: "add-brand",
      element: <AddBrand />,
    },
    {
      path: "brand-list",
      element: <BrandList />,
    },
    {
      path: "brand-list/update/:_id",
      element: <UpdateBrand />,
    },
    {
      path: "add-category",
      element: <AddCategory />,
    },
    {
      path: "category-list",
      element: <CategoryList />,
    },
    {
      path: "category-list/update/:_id",
      element: <UpdateCategory />,
    },
    {
      path: "add-store",
      element: <AddStore />,
    },
    {
      path: "store-list",
      element: <StoreList />,
    },
    {
      path: "store-list/update/:_id",
      element: <UpdateStore />,
    },
    {
      path: "add-product",
      element: <AddProduct />,
    },
    {
      path: "product-list",
      element: <ProductList />,
    },
    {
      path: "product-list/update/:_id",
      element: <UpdateProduct />,
    },
    {
      path: "add-review",
      element: <AddReview />,
    },
    {
      path: "review-list",
      element: <ReviewList />,
    },
    {
      path: "review-list/update/:_id",
      element: <UpdateReview />,
    },
    {
      path: "manage-users",
      element: <ManageUsers />,
    },
    {
      path: "manage-users/update/:_id",
      element: <UpdateUser />,
    },
  ],
};

export default dashboardRoute;
