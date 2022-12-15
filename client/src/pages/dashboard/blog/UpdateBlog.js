import React, { useEffect, useState } from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DashboardButton from "../../../components/DashboardButton";
import Loading from "../../../components/Loading";
import Title from "../../../components/Title";
import displayBlog from "../../../redux/thunk/blog/displayBlog";
import updateBlog from "../../../redux/thunk/blog/updateBlog";

const UpdateBlog = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(displayBlog(_id));
  }, [dispatch, _id]);

  const [loading, setLoading] = useState(false);
  const [thumbnail, setThumbnail] = useState({});
  const [blogInfo, setBlogInfo] = useState({});

  useEffect(() => {
    setBlogInfo({
      name: blog?.name,
      title: blog?.title,
      description: blog?.description,
    });
    setThumbnail(blog.thumbnail);
  }, [blog]);

  function handleUpdateBlogThumbnail(event) {
    const formData = new FormData();
    formData.append("thumbnail", event.target.files[0]);

    const uploadThumbnail = async () => {
      setLoading(true);
      const request = await fetch(
        `https://canim.onrender.com/blog/thumbnail?public_id=${blog.thumbnail.public_id}`,
        {
          method: "PATCH",
          body: formData,
        }
      );
      const response = await request.json();
      if (response.acknowledgement) {
        setLoading(false);
        setThumbnail({
          url: response.data.path,
          public_id: response.data.filename,
        });
        console.log(response.description);
      } else {
        setLoading(false);
        console.log(response.description);
      }
    };
    uploadThumbnail();
  }

  function handleUpdateBlog(event) {
    event.preventDefault();

    const bannerInformation = {
      _id: blog._id,
      name: event.target.name.value,
      title: event.target.title.value,
      description: event.target.description.value,
      thumbnail: thumbnail,
    };

    dispatch(updateBlog(bannerInformation));
  }

  return (
    <section className="flex justify-center items-center h-full w-full">
      <Title>Update Blog</Title>
      <form
        className="shadow-lg md:p-10 p-4 rounded-lg flex flex-wrap gap-y-6 max-w-3xl justify-between bg-white"
        onSubmit={handleUpdateBlog}
      >
        {/* blog name */}
        <div class="w-full">
          <label
            for="name"
            class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
          >
            Blog name
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
            value={blogInfo?.name}
            onChange={(event) =>
              setBlogInfo({ ...blogInfo, name: event.target.value })
            }
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
            value={blogInfo?.title}
            onChange={(event) =>
              setBlogInfo({ ...blogInfo, title: event.target.value })
            }
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
            value={blogInfo?.description}
            onChange={(event) =>
              setBlogInfo({ ...blogInfo, description: event.target.value })
            }
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
                onChange={handleUpdateBlogThumbnail}
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

export default UpdateBlog;
