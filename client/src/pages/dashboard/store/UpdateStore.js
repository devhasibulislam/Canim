import React, { useEffect, useState } from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DashboardButton from "../../../components/DashboardButton";
import Loading from "../../../components/Loading";
import Title from "../../../components/Title";
import displayStore from "../../../redux/thunk/store/displayStore";
import updateStore from "../../../redux/thunk/store/updateStore";

const UpdateStore = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { store } = useSelector((state) => state.store);

  useEffect(() => {
    dispatch(displayStore(_id));
  }, [dispatch, _id]);

  const [loading, setLoading] = useState(false);
  const [thumbnail, setThumbnail] = useState({});
  const [storeInfo, setStoreInfo] = useState({});

  useEffect(() => {
    setStoreInfo({
      title: store?.title,
      description: store?.description,
      status: store?.status,
    });
    setThumbnail(store.thumbnail);
  }, [store]);

  function handleUpdateStoreThumbnail(event) {
    const formData = new FormData();
    formData.append("thumbnail", event.target.files[0]);

    const uploadThumbnail = async () => {
      setLoading(true);
      const request = await fetch(
        `https://canim.onrender.com/store/thumbnail?public_id=${store.thumbnail.public_id}`,
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

  function handleUpdateStore(event) {
    event.preventDefault();

    const storeInformation = {
      _id: store._id,
      title: event.target.title.value,
      description: event.target.description.value,
      status: storeInfo.status,
      thumbnail: thumbnail,
    };

    dispatch(updateStore(storeInformation));
  }

  return (
    <section className="flex justify-center items-center h-full w-full">
      <Title>Update Store</Title>
      <form
        className="shadow-lg md:p-10 p-4 rounded-lg flex flex-wrap gap-y-6 max-w-3xl justify-between bg-white"
        onSubmit={handleUpdateStore}
      >
        {/* store title */}
        <div class="w-full">
          <label
            for="title"
            class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
          >
            Store title
            <HiOutlineQuestionMarkCircle
              title="Title would be 100 characters"
              className="cursor-help"
            />
          </label>
          <input
            type="text"
            id="store"
            name="title"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={storeInfo?.title}
            onChange={(event) =>
              setStoreInfo({ ...storeInfo, title: event.target.value })
            }
            required
          />
        </div>

        {/* store description */}
        <div class="w-full">
          <label
            for="description"
            class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
          >
            Store description
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
            value={storeInfo?.description}
            onChange={(event) =>
              setStoreInfo({ ...storeInfo, description: event.target.value })
            }
          />
        </div>

        {/* store thumbnail */}
        <div class="w-full">
          {loading ? (
            <Loading size={8} />
          ) : (
            <>
              <label
                class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
                for="file_input"
              >
                Store thumbnail
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
                onChange={handleUpdateStoreThumbnail}
              />
            </>
          )}
        </div>

        {/* store status */}
        <div className="w-full">
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select store status
          </label>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(event) =>
              setStoreInfo({ ...storeInfo, status: event.target.value })
            }
          >
            <option selected={storeInfo.status === "active"} value="active">Active</option>
            <option selected={storeInfo.status === "inactive"} value="inactive">Inactive</option>
          </select>
        </div>

        {/* store button */}
        <DashboardButton />
      </form>
    </section>
  );
};

export default UpdateStore;
