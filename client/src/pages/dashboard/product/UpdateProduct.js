import React, { useEffect, useState } from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DashboardButton from "../../../components/DashboardButton";
import Loading from "../../../components/Loading";
import Title from "../../../components/Title";
import displayAllBrands from "../../../redux/thunk/brand/displayAllBrands";
import displayAllCategories from "../../../redux/thunk/category/displayAllCategories";
import displayProduct from "../../../redux/thunk/product/displayProduct";
import updateProduct from "../../../redux/thunk/product/updateProduct";
import displayAllStores from "../../../redux/thunk/store/displayAllStores";

const UpdateProduct = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const {
    product: { product },
    brand: { brands },
    category: { categories },
    store: { stores },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(displayProduct(_id));
    dispatch(displayAllBrands());
    dispatch(displayAllCategories());
    dispatch(displayAllStores());
  }, [dispatch, _id]);

  const [loading, setLoading] = useState(false);
  const [thumbnails, setThumbnails] = useState([]);
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    setProductInfo({
      title: product?.title,
      description: product?.description,
      price: product?.price,
      category: product?.category?._id,
      brand: product?.brand?._id,
      store: product?.store?._id,
    });
  }, [product]);

  function handleUpdateProductThumbnails(event) {
    const formData = new FormData();
    for (
      let thumbnail = 0;
      thumbnail < event?.target?.files?.length;
      thumbnail++
    )
      formData.append("thumbnails", event.target.files[thumbnail]);

    const uploadThumbnails = async () => {
      setLoading(true);
      const request = await fetch(
        `https://canim.onrender.com/product/thumbnails?_id=${_id}`,
        {
          method: "PATCH",
          body: formData,
        }
      );
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

  function handleUpdateProduct(event) {
    event.preventDefault();

    const productInformation = {
      _id: product._id,
      title: productInfo?.title,
      description: productInfo?.description,
      price: productInfo?.price,
      category: productInfo?.category,
      store: productInfo?.store,
      brand: productInfo?.brand,
      thumbnails: thumbnails.length ? thumbnails : product.thumbnails,
    };

    dispatch(updateProduct(productInformation));
  }

  return (
    <section className="flex justify-center items-center h-full w-full">
      <Title>Update Product</Title>
      <form
        className="shadow-lg md:p-10 p-4 rounded-lg flex flex-wrap gap-y-6 max-w-3xl justify-between bg-white"
        onSubmit={handleUpdateProduct}
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
            value={productInfo?.title}
            onChange={(event) =>
              setProductInfo({ ...productInfo, title: event.target.value })
            }
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
              title="Description would be 2000 characters"
              className="cursor-help"
            />
          </label>
          <textarea
            id="description"
            rows="4"
            name="description"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            value={productInfo?.description}
            onChange={(event) =>
              setProductInfo({
                ...productInfo,
                description: event.target.value,
              })
            }
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
            value={productInfo?.price}
            onChange={(event) =>
              setProductInfo({
                ...productInfo,
                price: event.target.value,
              })
            }
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
                Product thumbnail
                <HiOutlineQuestionMarkCircle
                  title="Thumbnail size would be less than or equal to 1MB"
                  className="cursor-help"
                />
              </label>
              <input
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                id="file_input"
                type="file"
                name="thumbnails"
                multiple
                onChange={handleUpdateProductThumbnails}
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
              setProductInfo({
                ...productInfo,
                category: event.target.value,
              })
            }
          >
            <option selected disabled>
              {product?.category?.title}
            </option>
            {categories.map(({ _id, title }) => (
              <option
                key={_id}
                value={_id}
                className="capitalize"
                selected={productInfo.category === _id}
              >
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
              setProductInfo({
                ...productInfo,
                brand: event.target.value,
              })
            }
          >
            <option selected disabled>
              {product?.brand?.title}
            </option>
            {brands.map(({ _id, title }) => (
              <option
                key={_id}
                value={_id}
                className="capitalize"
                selected={productInfo.brand === _id}
              >
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
              setProductInfo({
                ...productInfo,
                store: event.target.value,
              })
            }
          >
            <option selected disabled>
              {product?.store?.title}
            </option>
            {stores.map(({ _id, title }) => (
              <option
                key={_id}
                value={_id}
                className="capitalize"
                selected={productInfo.store === _id}
              >
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

export default UpdateProduct;
