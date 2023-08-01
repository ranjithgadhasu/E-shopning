import React from 'react'
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
       <div className="item">
        <h1>Categories</h1>
        <span>Women</span>
        <span>Men</span>
        <span>Shoes</span>
        <span>Accessories</span>
        <span>New Arrivvals</span>
       </div>
       <div className="item">
       <h1>Links</h1>
        <span>FAQ</span>
        <span>Pages</span>
        <span>Stores</span>
        <span>Compare</span>
        <span>Cookies</span>
       </div>
       <div className="item">
        <h1>About</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet earum possimus, fugiat suscipit perferendis vero nostrum debitis. Aliquam nobis optio at assumenda quia. Doloribus impedit, consectetur at laboriosam magnam aliquid.
        </span>
       </div>
       <div className="item">
       <h1>Contact</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet earum possimus, fugiat suscipit perferendis vero nostrum debitis. Aliquam nobis optio at assumenda quia. Doloribus impedit, consectetur at laboriosam magnam aliquid.
        </span>
       </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Ranjithstore</span>
          <span className="copyright">©Copyright2023.All Right Reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;