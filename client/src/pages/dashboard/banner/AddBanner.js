import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import DashboardButton from "../../../components/DashboardButton";
import Loading from "../../../components/Loading";
import addBanner from "../../../redux/thunk/banner/addBanner";
import Title from "../../../components/Title";

const AddBanner = () => {
  const dispatch = useDispatch();
  const [thumbnail, setThumbnail] = useState({});
  const [loading, setLoading] = useState(false);

  function handleAddBannerThumbnail(event) {
    const formData = new FormData();
    formData.append("thumbnail", event.target.files[0]);

    const uploadBannerThumbnail = async () => {
      setLoading(true);
      const request = await fetch(`https://canim.onrender.com/banner/thumbnail`, {
        method: "POST",
        body: formData,
      });
      const response = await request.json();
      if (response?.acknowledgement) {
        setThumbnail({
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
    uploadBannerThumbnail();
  }

  function handleAddBanner(event) {
    event.preventDefault();

    const blogInfo = {
      title: event.target.title.value,
      description: event.target.description.value,
      url: event.target.url.value,
      thumbnail: thumbnail,
    };

    dispatch(addBanner(blogInfo));
  }

  return (
    <section className="flex justify-center items-center h-full w-full">
      <Title>Add Banner</Title>
      <form
        className="shadow-lg md:p-10 p-4 rounded-lg flex flex-wrap gap-y-6 max-w-3xl justify-between bg-white"
        onSubmit={handleAddBanner}
      >
        {/* banner title */}
        <div class="w-full">
          <label
            for="title"
            class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
          >
            Banner title
            <HiOutlineQuestionMarkCircle
              title="Title would be 25 characters"
              className="cursor-help"
            />
          </label>
          <input
            type="text"
            id="banner"
            name="title"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Write your banner title"
            required
          />
        </div>

        {/* banner description */}
        <div class="w-full">
          <label
            for="description"
            class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
          >
            Banner description
            <HiOutlineQuestionMarkCircle
              title="Description would be 50 characters"
              className="cursor-help"
            />
          </label>
          <textarea
            id="description"
            rows="4"
            name="description"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write your banner description"
          />
        </div>

        {/* banner thumbnail */}
        <div class="w-full">
          {loading ? (
            <Loading size={8} />
          ) : (
            <>
              <label
                class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
                for="file_input"
              >
                Banner thumbnail
                <HiOutlineQuestionMarkCircle
                  title="Thumbnail size would be less than or equal to 1MB"
                  className="cursor-help"
                />
              </label>
              <input
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                id="file_input"
                type="file"
                name="thumbnail"
                onChange={handleAddBannerThumbnail}
              />
            </>
          )}
        </div>

        {/* banner url */}
        <div class="w-full">
          <label
            for="url"
            class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
          >
            Banner URL
            <HiOutlineQuestionMarkCircle
              title="URL based on existing category"
              className="cursor-help"
            />
          </label>
          <input
            type="url"
            id="banner"
            name="url"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400"
            placeholder="i.e.: https://google.com"
            required
          />
        </div>

        {/* banner button */}
        <DashboardButton />
      </form>
    </section>
  );
};

export default AddBanner;
