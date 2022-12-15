import React, { useState } from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { useDispatch } from "react-redux";
import DashboardButton from "../../../components/DashboardButton";
import Loading from "../../../components/Loading";
import Title from "../../../components/Title";
import addBlog from "../../../redux/thunk/blog/addBlog";

const AddBlog = () => {
  const dispatch = useDispatch();
  const [thumbnail, setThumbnail] = useState({});
  const [loading, setLoading] = useState(false);

  function handleAddBlogThumbnail(event) {
    const formData = new FormData();
    formData.append("thumbnail", event.target.files[0]);

    const uploadBannerThumbnail = async () => {
      setLoading(true);
      const request = await fetch(`https://canim.onrender.com/blog/thumbnail`, {
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

  function handleAddBlog(event) {
    event.preventDefault();

    const blogInfo = {
      name: event.target.name.value,
      title: event.target.title.value,
      description: event.target.description.value,
      thumbnail: thumbnail,
    };

    dispatch(addBlog(blogInfo));
  }

  return (
    <section className="flex justify-center items-center h-full w-full">
      <Title>Add Blog</Title>
      <form
        className="shadow-lg md:p-10 p-4 rounded-lg flex flex-wrap gap-y-6 max-w-3xl justify-between bg-white"
        onSubmit={handleAddBlog}
      >
        {/* blog name */}
        <div class="w-full">
          <label
            for="name"
            class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
          >
            Blogger name
            <HiOutlineQuestionMarkCircle
              title="Title would be 100 characters"
              className="cursor-help"
            />
          </label>
          <input
            type="text"
            id="blog"
            name="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Write your blog name"
            required
          />
        </div>
        
        {/* blog title */}
        <div class="w-full">
          <label
            for="title"
            class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
          >
            Blog title
            <HiOutlineQuestionMarkCircle
              title="Title would be 100 characters"
              className="cursor-help"
            />
          </label>
          <input
            type="text"
            id="blog"
            name="title"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Write your blog title"
            required
          />
        </div>

        {/* blog description */}
        <div class="w-full">
          <label
            for="description"
            class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
          >
            Blog description
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
            placeholder="Write your blog description"
          />
        </div>

        {/* blog thumbnail */}
        <div class="w-full">
          {loading ? (
            <Loading size={8} />
          ) : (
            <>
              <label
                class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
                for="file_input"
              >
                Blog thumbnail
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
                onChange={handleAddBlogThumbnail}
              />
            </>
          )}
        </div>

        {/* blog button */}
        <DashboardButton />
      </form>
    </section>
  );
};

export default AddBlog;
