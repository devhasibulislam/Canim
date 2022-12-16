import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Title from "../../../components/Title";
import displayAllReviews from "../../../redux/thunk/review/displayAllReviews";
import removeReview from "../../../redux/thunk/review/removeReview";

const ReviewList = () => {
  const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.review);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(displayAllReviews());
  }, [dispatch]);

  return (
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <Title>Review List</Title>
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
              Designation
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
          {reviews?.map(
            ({
              avatar,
              name,
              description,
              designation,
              _id,
              createdAt,
              updatedAt,
            }) => (
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
                    loading="lazy"
                    class="p-1 w-10 h-10 rounded-full object-cover object-center ring-2 ring-gray-300 dark:ring-gray-500"
                    src={avatar?.url}
                    alt={_id}
                  />
                </td>
                <td class="py-4 px-6 whitespace-normal">{designation}</td>
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
                    onClick={() => dispatch(removeReview(_id))}
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

export default ReviewList;
