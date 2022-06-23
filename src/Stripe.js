import React from "react";
import StripeCheckout from "react-stripe-checkout";

const Stripe = ({ price }) => {
  const publishable_key =
    "pk_test_51KpNqzSEfC0LKOjwVzu8nI2t9wlZyguVBwkGTk9lUYHSxwX226DrqgBue5apCzO4Ljm6aUPIayLOxXi6CjgG43Wh00ELMQEgcY";
  return (
    <>
      <StripeCheckout
        label="pay now"
        name="kinumna"
        billingAddress
        shippingAddress
        description={`your total cost is $ ${price}`}
        panelLabel="pay the bill"
        token={(token) => alert("payment succeessfull")}
        stripeKey={publishable_key}
      ></StripeCheckout>
    </>
  );
};

export default Stripe;
