import React, { useEffect } from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import DashboardButton from "../../../components/DashboardButton";
import Title from "../../../components/Title";
import addReview from "../../../redux/thunk/review/addReview";
import persistMyAccount from "../../../redux/thunk/user/persistMyAccount";

const AddReview = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(persistMyAccount());
  }, [dispatch]);

  function handleAddReview(event) {
    event.preventDefault();

    const reviewInfo = {
      reviewer: user?._id,
      designation: event.target.designation.value,
      description: event.target.description.value,
    };

    dispatch(addReview(reviewInfo));
  }

  return (
    <section className="flex justify-center items-center h-full w-full">
      <Title>Add Review</Title>
      <form
        className="shadow-lg md:p-10 p-4 rounded-lg flex flex-wrap gap-y-6 max-w-3xl justify-between bg-white"
        onSubmit={handleAddReview}
      >
        {/* reviewer designation */}
        <div class="w-full">
          <label
            for="designation"
            class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
          >
            Reviewer designation
            <HiOutlineQuestionMarkCircle
              title="Designation would be 100 characters"
              className="cursor-help"
            />
          </label>
          <input
            type="text"
            id="review"
            name="designation"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Write your review designation"
            required
          />
        </div>

        {/* review description */}
        <div class="w-full">
          <label
            for="description"
            class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
          >
            Review description
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
            placeholder="Write your review description"
          />
        </div>

        {/* review button */}
        <DashboardButton />
      </form>
    </section>
  );
};

export default AddReview;
