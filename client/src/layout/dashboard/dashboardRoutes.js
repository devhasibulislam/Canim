import { GiTatteredBanner } from "react-icons/gi";
import { GrBlog } from "react-icons/gr";
import { TbBrandAirtable } from "react-icons/tb";
import { MdCategory, MdOutlineProductionQuantityLimits, MdOutlineRateReview } from "react-icons/md";
import { FiEdit3, FiUsers } from "react-icons/fi";
import { BiStoreAlt } from "react-icons/bi";

const iconStyle = "lg:h-4 md:h-10 h-8 lg:w-4 md:w-10 w-8 lg:mx-0 md:mx-auto";
const routes = [
  {
    icon: <GiTatteredBanner className={iconStyle} />,
    name: "Add Banner",
    anchor: "add-banner",
  },
  {
    icon: <FiEdit3 className={iconStyle} />,
    name: "Banner List",
    anchor: "banner-list",
  },
  {
    icon: <GrBlog className={iconStyle} />,
    name: "Add Blog",
    anchor: "add-blog",
  },
  {
    icon: <FiEdit3 className={iconStyle} />,
    name: "Blog List",
    anchor: "blog-list",
  },
  {
    icon: <TbBrandAirtable className={iconStyle} />,
    name: "Add Brand",
    anchor: "add-brand",
  },
  {
    icon: <FiEdit3 className={iconStyle} />,
    name: "Brand List",
    anchor: "brand-list",
  },
  {
    icon: <MdCategory className={iconStyle} />,
    name: "Add Category",
    anchor: "add-category",
  },
  {
    icon: <FiEdit3 className={iconStyle} />,
    name: "Category List",
    anchor: "category-list",
  },
  {
    icon: <BiStoreAlt className={iconStyle} />,
    name: "Add Store",
    anchor: "add-store",
  },
  {
    icon: <FiEdit3 className={iconStyle} />,
    name: "Store List",
    anchor: "store-list",
  },
  {
    icon: <MdOutlineProductionQuantityLimits className={iconStyle} />,
    name: "Add Product",
    anchor: "add-product",
  },
  {
    icon: <FiEdit3 className={iconStyle} />,
    name: "Product List",
    anchor: "product-list",
  },
  {
    icon: <MdOutlineRateReview className={iconStyle} />,
    name: "Add Review",
    anchor: "add-review",
  },
  {
    icon: <FiEdit3 className={iconStyle} />,
    name: "Review List",
    anchor: "review-list",
  },
  {
    icon: <FiUsers className={iconStyle} />,
    name: "Manage users",
    anchor: "manage-users",
  },
];

export default routes;
