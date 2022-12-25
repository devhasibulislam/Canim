export const addToCart = (product) => {
  const cart = getFromCart();
  const existingProduct = cart.find((prod) => prod._id === product._id);
  if (!existingProduct) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const getFromCart = () => {
  const cartItems = localStorage.getItem("cart");
  let items = [];

  if (cartItems?.length) {
    items = JSON.parse(cartItems);
  }

  return items;
};

export const removeFromCart = (_id) => {
  const cartItems = getFromCart();
  const newCartItems = cartItems?.filter((item) => item._id !== _id);
  localStorage.setItem("cart", JSON.stringify(newCartItems));
};
