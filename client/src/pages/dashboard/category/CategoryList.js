import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Title from "../../../components/Title";
import displayAllCategories from "../../../redux/thunk/category/displayAllCategories";
import removeCategory from "../../../redux/thunk/category/removeCategory";

const CategoryList = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(displayAllCategories());
  }, [dispatch]);

  return (
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <Title>Category List</Title>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              Title
            </th>
            <th scope="col" class="py-3 px-6">
              Thumbnail
            </th>
            <th scope="col" class="py-3 px-6">
              Description
            </th>
            <th scope="col" class="py-3 px-6">
              Created_At
            </th>
            <th scope="col" class="py-3 px-6">
              Updated_At
            </th>
            <th scope="col" class="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {categories?.map(
            ({ thumbnail, title, description, _id, createdAt, updatedAt }) => (
              <tr
                key={_id}
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  {title}
                </th>
                <td class="py-4 px-6">
                  <img
                    src={thumbnail?.url}
                    alt={_id}
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover object-center"
                  />
                </td>
                <td class="py-4 px-6 whitespace-normal" title={description}>
                  {description?.slice(0, 20) + "..."}
                </td>
                <td class="py-4 px-6 whitespace-normal">
                  <span className="flex gap-x-2">
                    {createdAt?.split("T")[0]}
                  </span>
                </td>
                <td class="py-4 px-6 whitespace-normal">
                  {updatedAt?.split("T")[0]}
                </td>
                <td class="py-4 px-6">
                  <span
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-1 cursor-pointer"
                    onClick={() => navigate(`update/${_id}`)}
                  >
                    Edit
                  </span>
                  <span
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-1 cursor-pointer"
                    onClick={() => dispatch(removeCategory(_id))}
                  >
                    Delete
                  </span>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;
