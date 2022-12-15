import React, { useEffect, useState } from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DashboardButton from "../../../components/DashboardButton";
import Loading from "../../../components/Loading";
import Title from "../../../components/Title";
import displayUser from "../../../redux/thunk/user/displayUser";
import updateUser from "../../../redux/thunk/user/updateUser";

const UpdateUser = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(displayUser(_id));
  }, [dispatch, _id]);

  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState({});
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    setUserInfo({
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      role: user?.role,
      status: user?.status,
    });
    setAvatar(user.avatar);
  }, [user]);

  function handleUpdateUserAvatar(event) {
    const formData = new FormData();
    formData.append("avatar", event.target.files[0]);

    const updateAvatar = async () => {
      setLoading(true);
      const request = await fetch(
        `https://canim.onrender.com/user/avatar?public_id=${user?.avtar?.public_id}`,
        {
          method: "PATCH",
          body: formData,
        }
      );
      const response = await request.json();
      if (response.acknowledgement) {
        setLoading(false);
        setAvatar({
          url: response.data.path,
          public_id: response.data.filename,
        });
        console.log(response.description);
      } else {
        setLoading(false);
        console.log(response.description);
      }
    };
    updateAvatar();
  }

  function handleUpdateUser(event) {
    event.preventDefault();

    const userInformation = {
      _id: user._id,
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      role: userInfo.role,
      status: userInfo.status,
      avatar: avatar,
    };

    dispatch(updateUser(userInformation));
  }

  return (
    <section className="flex justify-center items-center h-full w-full">
      <Title>Update User</Title>
      <form
        className="shadow-lg md:p-10 p-4 rounded-lg flex flex-wrap gap-y-6 max-w-3xl justify-between bg-white"
        onSubmit={handleUpdateUser}
      >
        {/* user name */}
        <div class="w-full">
          <label
            for="name"
            class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
          >
            User name
            <HiOutlineQuestionMarkCircle
              title="Title would be 100 characters"
              className="cursor-help"
            />
          </label>
          <input
            type="text"
            id="user"
            name="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={userInfo?.name}
            onChange={(event) =>
              setUserInfo({ ...userInfo, name: event.target.value })
            }
            required
          />
        </div>

        {/* user email */}
        <div class="w-full">
          <label
            for="email"
            class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
          >
            User email
            <HiOutlineQuestionMarkCircle
              title="Approach a valid email address"
              className="cursor-help"
            />
          </label>
          <input
            type="email"
            id="user"
            name="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={userInfo?.email}
            onChange={(event) =>
              setUserInfo({ ...userInfo, email: event.target.value })
            }
            required
          />
        </div>

        {/* user phone */}
        <div class="w-full">
          <label
            for="phone"
            class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
          >
            User phone
            <HiOutlineQuestionMarkCircle
              title="Number would be like: +8801xxxxxxxxx"
              className="cursor-help"
            />
          </label>
          <input
            type="tel"
            id="user"
            name="phone"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={userInfo?.phone}
            onChange={(event) =>
              setUserInfo({ ...userInfo, phone: event.target.value })
            }
            required
          />
        </div>

        {/* user role */}
        <div className="w-full">
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select user role
          </label>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(event) =>
              setUserInfo({ ...userInfo, role: event.target.value })
            }
          >
            <option selected={userInfo.role === "admin"} value="admin">
              Admin
            </option>
            <option selected={userInfo.role === "buyer"} value="buyer">
              Buyer
            </option>
            <option selected={userInfo.role === "seller"} value="seller">
              Seller
            </option>
            <option selected={userInfo.role === "supplier"} value="supplier">
              Supplier
            </option>
            <option selected={userInfo.role === "deliverer"} value="deliverer">
              Deliverer
            </option>
          </select>
        </div>

        {/* user status */}
        <div className="w-full">
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select user status
          </label>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(event) =>
              setUserInfo({ ...userInfo, status: event.target.value })
            }
          >
            <option selected={userInfo.status === "active"} value="active">
              Active
            </option>
            <option selected={userInfo.status === "inactive"} value="inactive">
              Inactive
            </option>
          </select>
        </div>

        {/* user avatar */}
        <div class="w-full">
          {loading ? (
            <Loading size={8} />
          ) : (
            <>
              <label
                class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
                for="file_input"
              >
                User avatar
                <HiOutlineQuestionMarkCircle
                  title="Avatar size would be less than or equal to 1MB"
                  className="cursor-help"
                />
              </label>
              <input
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                id="file_input"
                type="file"
                name="avatar"
                onChange={handleUpdateUserAvatar}
              />
            </>
          )}
        </div>

        {/* user button */}
        <DashboardButton />
      </form>
    </section>
  );
};

export default UpdateUser;
