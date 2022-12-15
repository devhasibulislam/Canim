import React, { useEffect, useState } from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DashboardButton from "../../../components/DashboardButton";
import Loading from "../../../components/Loading";
import Title from "../../../components/Title";
import displayBrand from "../../../redux/thunk/brand/displayBrand";
import updateBrand from "../../../redux/thunk/brand/updateBrand";

const UpdateBrand = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { brand } = useSelector((state) => state.brand);

  useEffect(() => {
    dispatch(displayBrand(_id));
  }, [dispatch, _id]);

  const [loading, setLoading] = useState(false);
  const [logo, setLogo] = useState({});
  const [brandInfo, setBrandInfo] = useState({});

  useEffect(() => {
    setBrandInfo({
      title: brand?.title,
      email: brand?.email,
      website: brand?.website,
      description: brand?.description,
      location: brand?.location,
    });
    setLogo(brand.logo);
  }, [brand]);

  function handleUpdateBrandLogo(event) {
    const formData = new FormData();
    formData.append("logo", event.target.files[0]);

    const uploadThumbnail = async () => {
      setLoading(true);
      const request = await fetch(
        `https://canim.onrender.com/brand/logo?public_id=${brand.logo.public_id}`,
        {
          method: "PATCH",
          body: formData,
        }
      );
      const response = await request.json();
      if (response.acknowledgement) {
        setLoading(false);
        setLogo({
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

  function handleUpdateBrand(event) {
    event.preventDefault();

    const brandInformation = {
      _id: brand._id,
      title: event.target.title.value,
      email: event.target.email.value,
      website: event.target.website.value,
      description: event.target.description.value,
      location: event.target.location.value,
      logo: logo,
    };

    dispatch(updateBrand(brandInformation));
  }

  return (
    <section className="flex justify-center items-center h-full w-full">
      <Title>Update Brand</Title>
      <form
        className="shadow-lg md:p-10 p-4 rounded-lg flex flex-wrap gap-y-6 max-w-3xl justify-between bg-white"
        onSubmit={handleUpdateBrand}
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
            value={brandInfo?.title}
            onChange={(event) =>
              setBrandInfo({ ...brandInfo, title: event.target.value })
            }
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
            <HiOutlineQuestionMarkCircle
              title="Title would be 100 characters"
              className="cursor-help"
            />
          </label>
          <input
            type="email"
            id="brand"
            name="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={brandInfo?.email}
            onChange={(event) =>
              setBrandInfo({ ...brandInfo, email: event.target.value })
            }
            required
          />
        </div>

        {/* brand website */}
        <div class="w-full">
          <label
            for="website"
            class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
          >
            Brand website
            <HiOutlineQuestionMarkCircle
              title="Title would be 100 characters"
              className="cursor-help"
            />
          </label>
          <input
            type="url"
            id="brand"
            name="website"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={brandInfo?.website}
            onChange={(event) =>
              setBrandInfo({ ...brandInfo, website: event.target.value })
            }
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
            value={brandInfo?.description}
            onChange={(event) =>
              setBrandInfo({ ...brandInfo, description: event.target.value })
            }
          />
        </div>

        {/* brand location */}
        <div class="w-full">
          <label
            for="location"
            class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
          >
            Brand location
            <HiOutlineQuestionMarkCircle
              title="Title would be 100 characters"
              className="cursor-help"
            />
          </label>
          <input
            type="text"
            id="brand"
            name="location"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={brandInfo?.location}
            onChange={(event) =>
              setBrandInfo({ ...brandInfo, location: event.target.value })
            }
            required
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
                onChange={handleUpdateBrandLogo}
              />
            </>
          )}
        </div>

        {/* brand button */}
        <DashboardButton />
      </form>
    </section>
  );
};

export default UpdateBrand;
