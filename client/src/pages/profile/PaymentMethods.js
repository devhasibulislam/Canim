import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title";
import displayAllPayments from "../../redux/thunk/payment/displayAllPayments";
import removePayment from "../../redux/thunk/payment/removePayment";
import { Badge } from "flowbite-react";

const PaymentMethods = () => {
  const dispatch = useDispatch();
  const { payments } = useSelector((state) => state.payment);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(displayAllPayments());
  }, [dispatch]);

  return (
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <Title>Payment Methods List</Title>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              User
            </th>
            <th scope="col" class="py-3 px-6">
              Method
            </th>
            <th scope="col" class="py-3 px-6">
              Information
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
          {payments?.map(
            ({
              user,
              method,
              paymentInformation: {
                transactionId,
                cardNumber,
                cvcNumber,
                receiver,
              },
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
                  {user?.name}
                </th>
                <td class="py-4 px-6 whitespace-normal">{method}</td>
                <td class="py-4 px-6 whitespace-normal">
                  <span className="flex gap-x-2">
                    {method === "bkash" && (
                      <>
                        <Badge color="info">{transactionId}</Badge>
                      </>
                    )}
                    {method === "paypal" && (
                      <>
                        <Badge color="indigo">{cardNumber}</Badge>
                        <Badge color="purple">{cvcNumber}</Badge>
                      </>
                    )}
                    <Badge color="warning">{receiver}</Badge>
                  </span>
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
                    onClick={() => dispatch(removePayment(_id))}
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

export default PaymentMethods;
