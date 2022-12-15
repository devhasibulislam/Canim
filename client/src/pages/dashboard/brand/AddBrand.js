import React, { useState } from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { useDispatch } from "react-redux";
import DashboardButton from "../../../components/DashboardButton";
import Loading from "../../../components/Loading";
import Title from "../../../components/Title";
import addBrand from "../../../redux/thunk/brand/addBrand";

const AddBrand = () => {
  const dispatch = useDispatch();
  const [logo, setLogo] = useState({});
  const [loading, setLoading] = useState(false);

  function handleAddBrandLogo(event) {
    const formData = new FormData();
    formData.append("logo", event.target.files[0]);

    const uploadBrandLogo = async () => {
      setLoading(true);
      const request = await fetch(`https://canim.onrender.com/brand/logo`, {
        method: "POST",
        body: formData,
      });
      const response = await request.json();
      if (response?.acknowledgement) {
        setLogo({
          url: response?.data?.path,
          public_id: response?.data?.filename,
        });
        setLoading(false);
        console.log(response.description);
      } else {
        setLoading(false);
        console.log(response.description);
      }
    };
    uploadBrandLogo();
  }

  function handleAddBrand(event) {
    event.preventDefault();

    const brandInfo = {
      title: event.target.title.value,
      email: event.target.email.value,
      website: event.target.url.value,
      description: event.target.description.value,
      location: event.target.location.value,
      logo: logo,
    };

    dispatch(addBrand(brandInfo));
  }

  return (
    <section className="flex justify-center items-center h-full w-full">
      <Title>Add Brand</Title>
      <form
        className="shadow-lg md:p-10 p-4 rounded-lg flex flex-wrap gap-y-6 max-w-3xl justify-between bg-white"
        onSubmit={handleAddBrand}
      >
        {/* brand title */}
        <div class="w-full">
          <label
            for="title"
            class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
          >
            Brand title
            <HiOutlineQuestionMarkCircle
              title="Title would be 100 characters"
              className="cursor-help"
            />
          </label>
          <input
            type="text"
            id="brand"
            name="title"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Write your brand title"
            required
          />
        </div>

        {/* brand email */}
        <div class="w-full">
          <label
            for="email"
            class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
          >
            Brand email
          </label>
          <input
            type="email"
            id="brand"
            name="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Write your brand email"
            required
          />
        </div>

        {/* brand url */}
        <div class="w-full">
          <label
            for="url"
            class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
          >
            Brand URL
          </label>
          <input
            type="url"
            id="brand"
            name="url"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400"
            placeholder="i.e.: https://google.com"
            required
          />
        </div>

        {/* brand description */}
        <div class="w-full">
          <label
            for="description"
            class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
          >
            Brand description
            <HiOutlineQuestionMarkCircle
              title="Description would be 500 characters"
              className="cursor-help"
            />
          </label>
          <textarea
            id="description"
            rows="4"
            name="description"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write your brand description"
          />
        </div>

        {/* brand logo */}
        <div class="w-full">
          {loading ? (
            <Loading size={8} />
          ) : (
            <>
              <label
                class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
                for="file_input"
              >
                Brand logo
                <HiOutlineQuestionMarkCircle
                  title="Thumbnail size would be less than or equal to 1MB"
                  className="cursor-help"
                />
              </label>
              <input
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                id="file_input"
                type="file"
                name="logo"
                onChange={handleAddBrandLogo}
              />
            </>
          )}
        </div>

        {/* brand location */}
        <div class="w-full">
          <label
            for="location"
            class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
          >
            Brand location
            <HiOutlineQuestionMarkCircle
              title="Brand address would be 100 characters"
              className="cursor-help"
            />
          </label>
          <input
            type="text"
            id="brand"
            name="location"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Write your brand location"
            required
          />
        </div>

        {/* brand button */}
        <DashboardButton />
      </form>
    </section>
  );
};

export default AddBrand;
