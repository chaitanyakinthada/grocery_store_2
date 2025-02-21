
import React from "react";
import "./About.css"; 

export const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>KiranaKart</strong>, your one-stop online grocery store. We aim to
        deliver fresh and high-quality products to your doorstep with
        convenience and affordability.
      </p>

      <h2>Our Mission</h2>
      <p>
        At KiranaKart, our mission is to provide easy access to groceries while
        ensuring the best prices and quick delivery. We believe in making
        grocery shopping hassle-free for everyone.
      </p>

      <h2>Our Story</h2>
      <p>
        Founded in 2025, we started with a simple idea: to bring convenience to
        your daily grocery shopping. Since then, we've expanded our range of
        products and improved our delivery services.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li>Fresh Fruits & Vegetables</li>
        <li>Dairy, Bread & Eggs</li>
        <li>Rice, Oil & Other Staples</li>
        <li>Frozen Foods & Ice Creams</li>
        <li>Packaged Snacks & Beverages</li>
      </ul>

      <h2>Why Choose Us?</h2>
      <ul>
        <li>🚀 Fast and reliable delivery</li>
        <li>💰 Affordable prices</li>
        <li>🛒 Wide range of products</li>
        <li>📦 Quality guaranteed</li>
      </ul>

      <h2>Contact Us</h2>
      <p>Email: support@kiranakart.com</p>
      <p>Phone: +1 (555) 123-4567</p>
      <p>Address: 123 Grocery Lane, City, Country</p>
    </div>
  );
};
