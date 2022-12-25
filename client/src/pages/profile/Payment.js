import React, { useEffect, useState } from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import Title from "../../components/Title";
import addPayment from "../../redux/thunk/payment/addPayment";
import persistMyAccount from "../../redux/thunk/user/persistMyAccount";

const Payment = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(persistMyAccount());
  }, [dispatch]);

  const [paymentMethod, setPaymentMethod] = useState("bkash");

  function handlePaymentMethod(event) {
    event.preventDefault();

    const paymentInfo = {
      user: user?._id,
      method: paymentMethod,
      paymentInformation: {
        receiver: user?.phone,
        cardNumber: event?.target?.cardNumber?.value,
        cvcNumber: event?.target?.cvcNumber?.value,
        transactionId: event?.target?.trnxID?.value,
      },
    };

    dispatch(addPayment(paymentInfo));
  }

  return (
    <section className="flex justify-center items-center h-full w-full">
      <Title>Add Payment Method</Title>
      <form
        className="shadow-lg md:p-10 p-4 rounded-lg flex flex-wrap gap-y-6 max-w-3xl justify-between bg-white"
        onSubmit={handlePaymentMethod}
      >
        {/* payment name */}
        <div class="w-full">
          <label
            for="name"
            class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
          >
            Your Name
          </label>
          <input
            type="text"
            id="payment"
            name="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={user?.name}
            readOnly
          />
        </div>

        {/* payment email */}
        <div class="w-full">
          <label
            for="email"
            class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
          >
            Your Email
          </label>
          <input
            type="email"
            id="payment"
            name="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={user?.email}
            readOnly
          />
        </div>

        {/* select payment method */}
        <div className="w-full">
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select payment method
          </label>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(event) => setPaymentMethod(event.target.value)}
            required
          >
            <option value="bkash">BKash</option>
            <option value="paypal">Paypal</option>
          </select>
        </div>

        {paymentMethod === "bkash" && (
          <>
            {/* payment phone */}
            <div class="w-full">
              <label
                for="phone"
                class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
              >
                Receiver Phone
              </label>
              <input
                type="phone"
                id="payment"
                name="phone"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value="+8801906-315901"
                readOnly
              />
            </div>

            {/* payment trnxID */}
            <div class="w-full">
              <label
                for="trnxID"
                class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
              >
                Your TrnxID
              </label>
              <input
                type="text"
                id="payment"
                name="trnxID"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Send Money to +8801906-315901"
                required
              />
            </div>
          </>
        )}

        {paymentMethod === "paypal" && (
          <>
            {/* card number */}
            <div class="w-full">
              <label
                for="title"
                class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
              >
                Your card number
                <HiOutlineQuestionMarkCircle
                  title="Name would be 100 characters"
                  className="cursor-help"
                />
              </label>
              <input
                type="text"
                id="payment"
                name="cardNumber"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Write your payment title"
                required
              />
            </div>

            {/* payment cvc/cvv */}
            <div class="w-full">
              <label
                for="title"
                class="flex justify-between items-center mb-2 text-sm font-medium text-gray-900"
              >
                Your CVC
                <HiOutlineQuestionMarkCircle
                  title="Name would be 100 characters"
                  className="cursor-help"
                />
              </label>
              <input
                type="text"
                id="payment"
                name="cvcNumber"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Write your card CVC or CVV numbers"
                required
              />
            </div>
          </>
        )}

        {/* payment button */}
        {/* user button */}
        <div className="flex lg:flex-row md:flex-row flex-col gap-4">
          <button
            type="submit"
            class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Add Payment
          </button>
        </div>
      </form>
    </section>
  );
};

export default Payment;
