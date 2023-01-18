import React, { useState } from "react";

const CheckoutPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <div>
      <h2>Checkout</h2>
      <div>
        <h3>Payment</h3>
        <form onSubmit={handleSubmit}>
          <label>
            First name:
            <input type="text" value={firstName} onChange={handleFirstNameChange} />
          </label>
          <br />
          <br />
          <label>
            Last name:
            <input type="text" value={lastName} onChange={handleLastNameChange} />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email" value={email} placeholder="you@example.com" onChange={handleEmailChange}
            />
          </label>
          <hr />
          <label>
          <input type="radio" value="credit card" checked={selectedOption === 'credit card'} onChange={handleOptionChange}
          />
          Credit Card
        </label>
        <label>
          <input
            type="radio"
            value="debit card"
            checked={selectedOption === 'debit card'}
            onChange={handleOptionChange}
          />
          Debit Card
        </label>
        <label>
          <input
            type="radio"
            value="UPI"
            checked={selectedOption === 'UPI'}
            onChange={handleOptionChange}
          />
          UPI
        </label>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
