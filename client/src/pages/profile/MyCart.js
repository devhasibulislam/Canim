import React from "react";
import Title from "../../components/Title";

const MyCart = () => {
  const products = [];

  return (
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <Title>My Cart</Title>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              Title
            </th>
            <th scope="col" class="py-3 px-6">
              Thumbnails
            </th>
            <th scope="col" class="py-3 px-6">
              Price
            </th>
            <th scope="col" class="py-3 px-6">
              Category
            </th>
            <th scope="col" class="py-3 px-6">
              Store
            </th>
            <th scope="col" class="py-3 px-6">
              Brand
            </th>
            <th scope="col" class="py-3 px-6">
              Quantity
            </th>
            <th scope="col" class="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.map(
            ({
              thumbnails,
              title,
              brand,
              store,
              category,
              price,
              quantity,
              _id,
            }) => (
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
                  <div class="flex mb-5 -space-x-4">
                    {thumbnails?.map(({ public_id, url }) => (
                      <img
                        src={url}
                        alt={public_id}
                        loading="lazy"
                        class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 object-cover object-center"
                      />
                    ))}
                  </div>
                </td>
                <td class="py-4 px-6 whitespace-normal">{price}</td>
                <td class="py-4 px-6 whitespace-normal capitalize">
                  {category?.title}
                </td>
                <td class="py-4 px-6 whitespace-normal capitalize">
                  {store?.title}
                </td>
                <td class="py-4 px-6 whitespace-normal capitalize">
                  {brand?.title}
                </td>
                <td class="py-4 px-6 whitespace-normal">{quantity}</td>
                <td class="py-4 px-6">
                  <span class="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-1 cursor-pointer">
                    Purchase
                  </span>
                  <span class="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-1 cursor-pointer">
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

export default MyCart;
