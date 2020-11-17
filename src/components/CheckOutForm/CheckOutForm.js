import React, { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { Button } from 'react-bootstrap';
const CheckoutForm = (props) => {
  const [paymentError, setPaymentError] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(false)
      console.log('[error]', error);
    } else {
      setPaymentError(false);
      setPaymentSuccess(true);
      const paymentIdNumber=paymentMethod.id;
      const dataId={paymentIdNumber};
      props.stepHandlerFunction(dataId)
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

  return (
   <div>
      <form onSubmit={handleSubmit}>
      <CardElement />
      <Button className="pt-2 pb-2 px-3 py-1 mt-2" type="submit" disabled={!stripe}>
        Pay
      </Button>
    </form>
    {
      paymentError&&<div class="alert alert-danger mt-3" role="alert">
      {paymentError}
    </div>
    }
    {
      paymentSuccess&&<div class="alert alert-success mt-3" role="alert">
      Your payment was successfull!
    </div>
    }
   </div>
  );
};

export default CheckoutForm;