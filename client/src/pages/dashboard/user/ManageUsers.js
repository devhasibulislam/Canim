import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Title from "../../../components/Title";
import displayAllUsers from "../../../redux/thunk/user/displayAllUsers";
import removeUser from "../../../redux/thunk/user/removeUser";

const ManageUsers = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(displayAllUsers());
  }, [dispatch]);

  return (
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <Title>Manage User</Title>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              Name
            </th>
            <th scope="col" class="py-3 px-6">
              Avatar
            </th>
            <th scope="col" class="py-3 px-6">
              Email
            </th>
            <th scope="col" class="py-3 px-6">
              Phone
            </th>
            <th scope="col" class="py-3 px-6">
              Role
            </th>
            <th scope="col" class="py-3 px-6">
              Status
            </th>
            <th scope="col" class="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.map(({ name, email, avatar, phone, role, status, _id }) => (
            <tr
              key={_id}
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                {name}
              </th>
              <td class="py-4 px-6">
                <img
                  src={avatar?.url}
                  alt={_id}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover object-center ring-2 ring-gray-300 dark:ring-gray-500 p-1"
                />
              </td>
              <td class="py-4 px-6 whitespace-normal">{email}</td>
              <td class="py-4 px-6 whitespace-normal">{phone}</td>
              <td class="py-4 px-6 whitespace-normal">
                <span class="bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900">
                  {role}
                </span>
              </td>
              <td class="py-4 px-6 whitespace-normal capitalize">{status}</td>
              <td class="py-4 px-6">
                <span
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-1 cursor-pointer"
                  onClick={() => navigate(`update/${_id}`)}
                >
                  Edit
                </span>
                <span
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-1 cursor-pointer"
                  onClick={() => dispatch(removeUser(_id))}
                >
                  Delete
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
