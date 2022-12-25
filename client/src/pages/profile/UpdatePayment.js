import React, { useEffect, useState } from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DashboardButton from "../../components/DashboardButton";
import Title from "../../components/Title";
import displayPayment from "../../redux/thunk/payment/displayPayment";
import updatePayment from "../../redux/thunk/payment/updatePayment";

const UpdatePayment = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { payment } = useSelector((state) => state.payment);

  useEffect(() => {
    dispatch(displayPayment(_id));
  }, [dispatch, _id]);

  const [paymentInfo, setPaymentInfo] = useState({});

  useEffect(() => {
    setPaymentInfo({
      user: payment?.user,
      method: payment?.method,
      paymentInformation: payment?.paymentInformation,
    });
  }, [payment]);

  function handleUpdatePayment(event) {
    event.preventDefault();

    const paymentInformation = {
      _id: payment?._id,
      user: payment?.user?._id,
      method: payment?.method,
      paymentInformation: {
        transactionId: event?.target?.transactionId?.value,
        cardNumber: event?.target?.cardNumber?.value,
        cvcNumber: event?.target?.cvcNumber?.value,
        receiver: event?.target?.receiver?.value,
      },
    };

    dispatch(updatePayment(paymentInformation));
  }

  return (
    <section className="flex justify-center items-center h-full w-full">
      <Title>Update Payment</Title>
      <form
        className="shadow-lg md:p-10 p-4 rounded-lg flex flex-wrap gap-y-6 max-w-3xl justify-between bg-white"
        onSubmit={handleUpdatePayment}
      >
        {/* payment user */}
        <div class="w-full">
          <label
            for="user"
            class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
          >
            Payment user
          </label>
          <input
            type="text"
            id="payment"
            name="user"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={paymentInfo?.user?.name}
            required
          />
        </div>

        {/* payment method */}
        <div class="w-full">
          <label
            for="method"
            class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
          >
            Payment method
          </label>
          <input
            type="text"
            id="payment"
            name="method"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 capitalize"
            value={paymentInfo?.method}
            required
          />
        </div>

        {/* payment transactionId */}
        {paymentInfo?.method === "bkash" && (
          <div class="w-full">
            <label
              for="transactionId"
              class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
            >
              Payment transactionId
              <HiOutlineQuestionMarkCircle
                title="Title would be 13 characters"
                className="cursor-help"
              />
            </label>
            <input
              type="text"
              id="payment"
              name="transactionId"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 capitalize"
              value={paymentInfo?.paymentInformation?.transactionId}
              onChange={(event) =>
                setPaymentInfo({
                  ...paymentInfo,
                  paymentInformation: {
                    ...paymentInfo?.paymentInformation,
                    [event.target.name]: event.target.value,
                  },
                })
              }
              required
            />
          </div>
        )}

        {/* payment with paypal */}
        {paymentInfo?.method === "paypal" && (
          <>
            <div class="w-full">
              <label
                for="cardNumber"
                class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
              >
                Payment cardNumber
                <HiOutlineQuestionMarkCircle
                  title="Title would be 13 characters"
                  className="cursor-help"
                />
              </label>
              <input
                type="text"
                id="payment"
                name="cardNumber"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 capitalize"
                value={paymentInfo?.paymentInformation?.cardNumber}
                onChange={(event) =>
                  setPaymentInfo({
                    ...paymentInfo,
                    paymentInformation: {
                      ...paymentInfo?.paymentInformation,
                      [event.target.name]: event.target.value,
                    },
                  })
                }
                required
              />
            </div>
            
            <div class="w-full">
              <label
                for="cvcNumber"
                class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
              >
                Payment cvcNumber
                <HiOutlineQuestionMarkCircle
                  title="Title would be 13 characters"
                  className="cursor-help"
                />
              </label>
              <input
                type="text"
                id="payment"
                name="cvcNumber"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 capitalize"
                value={paymentInfo?.paymentInformation?.cvcNumber}
                onChange={(event) =>
                  setPaymentInfo({
                    ...paymentInfo,
                    paymentInformation: {
                      ...paymentInfo?.paymentInformation,
                      [event.target.name]: event.target.value,
                    },
                  })
                }
                required
              />
            </div>
          </>
        )}

        {/* payment receiver */}
        <div class="w-full">
          <label
            for="receiver"
            class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
          >
            Payment receiver
            <HiOutlineQuestionMarkCircle
              title="Title would be 14 characters"
              className="cursor-help"
            />
          </label>
          <input
            type="text"
            id="payment"
            name="receiver"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 capitalize"
            value={paymentInfo?.paymentInformation?.receiver}
            onChange={(event) =>
              setPaymentInfo({
                ...paymentInfo,
                paymentInformation: {
                  ...paymentInfo?.paymentInformation,
                  [event.target.name]: event.target.value,
                },
              })
            }
            required
          />
        </div>

        {/* payment button */}
        <DashboardButton />
      </form>
    </section>
  );
};

export default UpdatePayment;

/**
 * onChange() function for updating state with nested objects on form
 * https://stackoverflow.com/questions/71489019/onchange-function-for-updating-state-with-nested-objects-on-form
 */
