import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function PaymentMethodScreen(props) {
    const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress.adresse) {
    navigate('/shipping');
  }
  const [paypal, setPaypal] = useState('PayPal');
  const [visa, setVisa] = useState('Visa');
  const [mastercard, setMastercard] = useState('MasterCard');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paypal, visa, mastercard));
    navigate('/placeorder');
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Zahlungsmethode</h1>
        </div>
     <div>
        <div>
          <div>
            <input
              type="radio"
              id="paypal"
              value="PayPal"
              name="paymentMethod"
              required
              onChange={(e) => setPaypal(e.target.value)}
            ></input>
            <label htmlFor="paypal">PayPal</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="visa"
              value="Visa"
              name="paymentMethod"
              required
              onChange={(e) => setVisa(e.target.value)}
            ></input>
            <label htmlFor="visa">Visa</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="mastercard"
              value="MasterCard"
              name="paymentMethod"
              required
              onChange={(e) => setMastercard(e.target.value)}
            ></input>
            <label htmlFor="mastercard">MasterCard</label>
          </div>
        </div>
    </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Weiter
          </button>
        </div>
      </form>
    </div>
  );
}