import React, { useEffect, useState } from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import DashboardButton from "../../../components/DashboardButton";
import Loading from "../../../components/Loading";
import Title from "../../../components/Title";
import displayAllBrands from "../../../redux/thunk/brand/displayAllBrands";
import displayAllCategories from "../../../redux/thunk/category/displayAllCategories";
import addProduct from "../../../redux/thunk/product/addProduct";
import displayAllStores from "../../../redux/thunk/store/displayAllStores";

const AddProduct = () => {
  const dispatch = useDispatch();
  const {
    category: { categories },
    brand: { brands },
    store: { stores },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(displayAllCategories());
    dispatch(displayAllBrands());
    dispatch(displayAllStores());
  }, [dispatch]);

  const [thumbnails, setThumbnails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productFilters, setProductFilters] = useState({
    category: "",
    brand: "",
    store: "",
  });

  function handleAddProductThumbnails(event) {
    const formData = new FormData();
    for (let thumbnail = 0; thumbnail < event?.target?.files?.length; thumbnail++)
      formData.append("thumbnails", event.target.files[thumbnail]);

    const uploadThumbnails = async () => {
      setLoading(true);
      const request = await fetch(`https://canim.onrender.com/product/thumbnails`, {
        method: "POST",
        body: formData,
      });
      const response = await request.json();
      if (response?.acknowledgement) {
        for (let thumbnail = 0; thumbnail < response?.data?.length; thumbnail++)
          setThumbnails((thumbnails) => [
            ...thumbnails,
            {
              url: response?.data[thumbnail]?.path,
              public_id: response?.data[thumbnail]?.filename,
            },
          ]);
        setLoading(false);
        console.log(response.description);
      } else {
        setLoading(false);
        console.log(response.description);
      }
    };
    uploadThumbnails();
  }

  function handleAddProduct(event) {
    event.preventDefault();

    const productInfo = {
      title: event.target.title.value,
      description: event.target.description.value,
      price: event.target.price.value,
      thumbnails: thumbnails.length === 0 ? undefined : thumbnails,
      category: productFilters.category,
      brand: productFilters.brand,
      store: productFilters.store,
    };

    dispatch(addProduct(productInfo));
  }

  return (
    <section className="flex justify-center items-center h-full w-full">
      <Title>Add Product</Title>
      <form
        className="shadow-lg md:p-10 p-4 rounded-lg flex flex-wrap gap-y-6 max-w-3xl justify-between bg-white"
        onSubmit={handleAddProduct}
      >
        {/* product title */}
        <div class="w-full">
          <label
            for="title"
            class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
          >
            Product title
            <HiOutlineQuestionMarkCircle
              title="Title would be 100 characters"
              className="cursor-help"
            />
          </label>
          <input
            type="text"
            id="product"
            name="title"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Write your product title"
            required
          />
        </div>

        {/* product description */}
        <div class="w-full">
          <label
            for="description"
            class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
          >
            Product description
            <HiOutlineQuestionMarkCircle
              title="Description would be 1000 characters"
              className="cursor-help"
            />
          </label>
          <textarea
            id="description"
            rows="4"
            name="description"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write your product description"
          />
        </div>

        {/* product price */}
        <div class="w-full">
          <label
            for="price"
            class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
          >
            Product price
          </label>
          <input
            type="number"
            id="product"
            name="price"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Write your product price"
            required
          />
        </div>

        {/* product thumbnail */}
        <div class="w-full">
          {loading ? (
            <Loading size={8} />
          ) : (
            <>
              <label
                class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
                for="file_input"
              >
                Product thumbnails
                <HiOutlineQuestionMarkCircle
                  title="Each thumbnail size would be less than or equal to 1MB upto 5 thumbnails"
                  className="cursor-help"
                />
              </label>
              <input
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                id="file_input"
                name="thumbnails"
                type="file"
                multiple
                onChange={handleAddProductThumbnails}
              />
            </>
          )}
        </div>

        {/* product category */}
        <div className="w-full">
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select category
          </label>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(event) =>
              setProductFilters({
                ...productFilters,
                category: event.target.value,
              })
            }
            required
          >
            <option selected disabled>
              Choose a category
            </option>
            {categories.map(({ _id, title }) => (
              <option key={_id} value={_id} className="capitalize">
                {title}
              </option>
            ))}
          </select>
        </div>

        {/* product brand */}
        <div className="w-full">
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select brand
          </label>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(event) =>
              setProductFilters({
                ...productFilters,
                brand: event.target.value,
              })
            }
            required
          >
            <option selected disabled>
              Choose a brand
            </option>
            {brands.map(({ _id, title }) => (
              <option key={_id} value={_id} className="capitalize">
                {title}
              </option>
            ))}
          </select>
        </div>

        {/* product store */}
        <div className="w-full">
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select store
          </label>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(event) =>
              setProductFilters({
                ...productFilters,
                store: event.target.value,
              })
            }
            required
          >
            <option selected disabled>
              Choose a store
            </option>
            {stores.map(({ _id, title }) => (
              <option key={_id} value={_id} className="capitalize">
                {title}
              </option>
            ))}
          </select>
        </div>

        {/* product button */}
        <DashboardButton />
      </form>
    </section>
  );
};

export default AddProduct;
