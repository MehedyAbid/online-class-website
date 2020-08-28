import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const course = cart[i];
    total = total + course.price;
  }
  const discount = Math.round(total / 10);
  return (
    <div class="alert alert-success stick">
      <h3>
        Order Summary
        <br></br>
        <p>Course enrolled: {cart.length}</p>
        <p>Course Price: $ {total}</p>
        <p>Discount: ${discount}</p>
        <p>Total: ${total - discount}</p>
        <button class="btn btn-success">Order Now</button>
      </h3>
    </div>
  );
};

export default Cart;
