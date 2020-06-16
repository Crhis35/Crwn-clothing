import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const prifeForStripe = price * 100;
  const publishablekey =
    'pk_test_51GuhclJ3Ue8NGrycLAN1LeXdkbPcWIMbIvEP3p2bMj8TbhDaxb3tws9ieO3pBDQvt9eoc7unAhfX0lhXNmJcdgUw00OqX8X206';
  const onToken = (token) => {
    alert('Payment Succesful');
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothin Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/Cuz.svg"
      description={`Your total is $${price}`}
      amount={prifeForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};
export default StripeCheckoutButton;
