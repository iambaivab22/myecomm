export const reducer = (state, action) => {
  let product;
  let index;
  let updatedprice;
  let updatedqty;

  const { shoppingcart, totalprice, qty } = state;
  console.log(shoppingcart);
  switch (action.type) {
    case "Addtocart":
      console.log(action.id);
      console.log(shoppingcart);
      const check = shoppingcart.filter((product) => product.id==action.id);
      console.log(check);
      if (check.length==1) {
        product = action.data;
        product.qty =product.qty+1;
       product.eachtotalprice = product.qty * product.price;
      updatedprice = totalprice + product.price;
      updatedqty = qty + 1;
      console.log(updatedprice);
      return {
        shoppingcart: [...shoppingcart],
        totalprice: updatedprice,
        qty: updatedqty,
      };
       
      } else {
        product = action.data;
        product["qty"] = 1;
        product["eachtotalprice"] = product.price;
        updatedqty = qty + 1;
        updatedprice = totalprice + product.price;

        return {
          shoppingcart: [product, ...shoppingcart],
          totalprice: updatedprice,
          qty: updatedqty,
        };
      }
      break;

    case "delete":
      const filtered = shoppingcart.filter(
        (product) => product.id !== action.id
      );
      product = action.cart;
      updatedqty = qty - product.qty;
      updatedprice = totalprice - product.price * product.qty;

      return {
        shoppingcart: [...filtered],
        totalprice: updatedprice,
        qty: updatedqty,
      };
      break;

    case "increment":
      product = action.cart;
      product.qty = product.qty + 1;
      product.eachtotalprice = product.qty * product.price;
      updatedprice = totalprice + product.price;
      updatedqty = qty + 1;
      console.log(updatedprice);
      return {
        shoppingcart: [...shoppingcart],
        totalprice: updatedprice,
        qty: updatedqty,
      };

      break;

    case "decrement":
      product = action.cart;
      product.qty = product.qty - 1;
      product.eachtotalprice = product.qty * product.price;
      updatedprice = totalprice - product.price;
      updatedqty = qty - 1;
      console.log(updatedprice);
      return {
        shoppingcart: [...shoppingcart],
        totalprice: updatedprice,
        qty: updatedqty,
      };

    default:
      return state;
  }
};
