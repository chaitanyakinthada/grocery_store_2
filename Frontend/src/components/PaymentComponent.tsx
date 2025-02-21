import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const stripePromise = loadStripe('deea352e-5253-49cb-96bf-4a8c86501970');

const CheckoutForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    if (cardElement == null) return;

    setProcessing(true);

  
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    const { clientSecret } = await response.json();

    
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });
    
    if (error) {
      setError(error.message);
      setProcessing(false);
    } else if (paymentIntent?.status === 'succeeded') {
      setSucceeded(true);
      setProcessing(false);
      navigate('/success'); // Redirect to a success page
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Payment Details</h3>
      <CardElement />
      {error && <div className="text-danger mt-2">{error}</div>}
      <Button
        type="submit"
        disabled={processing || succeeded}
        variant="primary"
        className="mt-3"
      >
        {processing ? 'Processing…' : 'Pay Now'}
      </Button>
    </Form>
  );
};

export function PaymentPage() {
  return (
    <div>
      <h2>Checkout</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
