import React, { useEffect, useState } from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DashboardButton from "../../../components/DashboardButton";
import Title from "../../../components/Title";
import displayReview from "../../../redux/thunk/review/displayReview";
import updateReview from "../../../redux/thunk/review/updateReview";

const UpdateReview = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { review } = useSelector((state) => state.review);

  useEffect(() => {
    dispatch(displayReview(_id));
  }, [dispatch, _id]);

  const [reviewInfo, setReviewInfo] = useState({});

  useEffect(() => {
    setReviewInfo({
      designation: review?.designation,
      description: review?.description,
    });
  }, [review]);

  function handleUpdateReview(event) {
    event.preventDefault();

    const storeInformation = {
      _id: review._id,
      designation: event.target.designation.value,
      description: event.target.description.value,
    };

    dispatch(updateReview(storeInformation));
  }

  return (
    <section className="flex justify-center items-center h-full w-full">
      <Title>Update Review</Title>
      <form
        className="shadow-lg md:p-10 p-4 rounded-lg flex flex-wrap gap-y-6 max-w-3xl justify-between bg-white"
        onSubmit={handleUpdateReview}
      >
        {/* review designation */}
        <div class="w-full">
          <label
            for="designation"
            class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
          >
            Review designation
            <HiOutlineQuestionMarkCircle
              designation="Title would be 100 characters"
              className="cursor-help"
            />
          </label>
          <input
            type="text"
            id="review"
            name="designation"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={reviewInfo?.designation}
            onChange={(event) =>
              setReviewInfo({ ...reviewInfo, designation: event.target.value })
            }
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
              title="Description would be 2000 characters"
              className="cursor-help"
            />
          </label>
          <textarea
            id="description"
            rows="4"
            name="description"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            value={reviewInfo?.description}
            onChange={(event) =>
              setReviewInfo({ ...reviewInfo, description: event.target.value })
            }
          />
        </div>

        {/* store button */}
        <DashboardButton />
      </form>
    </section>
  );
};

export default UpdateReview;
