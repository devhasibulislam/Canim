export const addToWishlist = (product) => {
  const wishlist = getFromWishlist();
  const existingProduct = wishlist.find((prod) => prod._id === product._id);
  if (!existingProduct) {
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }
};

export const getFromWishlist = () => {
  const wishlistItems = localStorage.getItem("wishlist");
  let items = [];

  if (wishlistItems?.length) {
    items = JSON.parse(wishlistItems);
  }

  return items;
};

export const removeFromWishlist = (_id) => {
  const wishlistItems = getFromWishlist();
  const newWishlistItems = wishlistItems?.filter((item) => item._id !== _id);
  localStorage.setItem("wishlist", JSON.stringify(newWishlistItems));
};
