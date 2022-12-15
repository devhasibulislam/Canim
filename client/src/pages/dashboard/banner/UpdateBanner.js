import React, { useEffect, useState } from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DashboardButton from "../../../components/DashboardButton";
import Loading from "../../../components/Loading";
import Title from "../../../components/Title";
import displayBanner from "../../../redux/thunk/banner/displayBanner";
import updateBanner from "../../../redux/thunk/banner/updateBanner";

const UpdateBanner = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { banner } = useSelector((state) => state.banner);

  useEffect(() => {
    dispatch(displayBanner(_id));
  }, [dispatch, _id]);

  const [loading, setLoading] = useState(false);
  const [thumbnail, setThumbnail] = useState({});
  const [bannerInfo, setBannerInfo] = useState({});

  useEffect(() => {
    setBannerInfo({
      title: banner?.title,
      description: banner?.description,
      url: banner?.url,
    });
    setThumbnail(banner.thumbnail);
  }, [banner]);

  function handleUpdateBannerThumbnail(event) {
    const formData = new FormData();
    formData.append("thumbnail", event.target.files[0]);

    const uploadThumbnail = async () => {
      setLoading(true);
      const request = await fetch(
        `https://canim.onrender.com/banner/thumbnail?public_id=${banner.thumbnail.public_id}`,
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

  function handleUpdateBanner(event) {
    event.preventDefault();

    const bannerInformation = {
      _id: banner._id,
      title: event.target.title.value,
      description: event.target.description.value,
      url: event.target.url.value,
      thumbnail: thumbnail,
    };

    dispatch(updateBanner(bannerInformation));
  }

  return (
    <section className="flex justify-center items-center h-full w-full">
      <Title>Update Banner</Title>
      <form
        className="shadow-lg md:p-10 p-4 rounded-lg flex flex-wrap gap-y-6 max-w-3xl justify-between bg-white"
        onSubmit={handleUpdateBanner}
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
            value={bannerInfo?.title}
            onChange={(event) =>
              setBannerInfo({ ...bannerInfo, title: event.target.value })
            }
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
            value={bannerInfo?.description}
            onChange={(event) =>
              setBannerInfo({ ...bannerInfo, description: event.target.value })
            }
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
                onChange={handleUpdateBannerThumbnail}
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
            value={bannerInfo?.url}
            onChange={(event) =>
              setBannerInfo({ ...bannerInfo, url: event.target.value })
            }
            required
          />
        </div>

        {/* banner button */}
        <DashboardButton />
      </form>
    </section>
  );
};

export default UpdateBanner;
