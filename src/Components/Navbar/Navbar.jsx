import React from "react";
import "./Navbar.css";
import logo from "../../assets/shopify.png";
import hero from "../../assets/shopify1.jpg";
import lsl from "../../assets/lsl.png";
import air from "../../assets/air.png";
import fl from "../../assets/fl.png";
import swb from "../../assets/swb.png";
import lsm from "../../assets/lsm.png";
import mac from "../../assets/mac.png";
import home from "../../assets/home.png";
import ipad from "../../assets/ipad.png";
import s from "../../assets/stripe.png";
import v from "../../assets/visa.png";
import ma from "../../assets/mastercard.png";
import a from "../../assets/amazon.png";
import k from "../../assets/klarna.png";
import p from "../../assets/paypal.png";
import ap from "../../assets/apple pay.png";
import g from "../../assets/google pay.png";
import m from "../../assets/aa.png"
import f from "../../assets/furniture.png"
import b from "../../assets/bag.png"
import bo from "../../assets/books.png"
import t from "../../assets/Tech.png"
import sn from "../../assets/Sneakers.png"
import tr from "../../assets/Travel.png"
import st from "../../assets/staples.png"
import sp from "../../assets/sprouts.png"
import go from "../../assets/go.png"
import ms from "../../assets/ms.png"
import sb from "../../assets/sb.png"
import cs from "../../assets/cs.png"
import target from "../../assets/target.png"
import bev from "../../assets/bev.png"
import ft from "../../assets/ft.png"
import hab from "../../assets/hab.png"
import shoe from "../../assets/shoe.png"
import hep from "../../assets/hep.png"
import lap from "../../assets/lap.png"
import books from "../../assets/books.png"
import ft1 from "../../assets/ft1.png"
import b1 from "../../assets/b1.png"
import shirt from "../../assets/shirt.png"
import scb from "../../assets/scb.png"
import { FaSearch, FaUser, FaShoppingCart, FaChevronDown, FaRegHeart } from "react-icons/fa";
import sellerIcon from "../../assets/seller.svg";
import giftIcon from "../../assets/gc.svg";
import helpIcon from "../../assets/gcc.svg";
const Navbar = () => {
  return (
    <>
      
      <div className="top-bar">

        <p className="phone">📞 +001234567890</p>

        <p className="offer">
          Get 50% Off on Selected Items | <span className="shop-now">Shop Now</span>
        </p>

        <div className="top-right">
          <div className="lang">
            Eng <FaChevronDown className="down-icon" />
          </div>

          <div className="location">
            Location <FaChevronDown className="down-icon" />
          </div>
        </div>

      </div>


      
      <div className="navbar">

        <div className="nav-left">
          <img src={logo} alt="logo" className="logo" />
          <h2>Shopcart</h2>
        </div>
 <div className="menu-wrapper" tabIndex="0">

  <label htmlFor="menu-toggle" className="menu-icon">
    ☰
  </label>
        <ul className="nav-links">
          <li className="category-link">
  Category <FaChevronDown />

  <div className="dropdown">

    <h3>Popular Categories</h3>
    <hr />

    <div className="dropdown-grid">

   
      <div className="drop-card">
        <img src={ft} alt="" />
        <div>
          <h4>Furniture</h4>
          <p>240 Item Available</p>
        </div>
      </div>

      <div className="drop-card">
        <img src={hab} alt="" />
        <div>
          <h4>Hand Bag</h4>
          <p>240 Item Available</p>
        </div>
      </div>

      <div className="drop-card">
        <img src={shoe} alt="" />
        <div>
          <h4>Shoe</h4>
          <p>240 Item Available</p>
        </div>
      </div>

      <div className="drop-card">
        <img src={hep} alt="" />
        <div>
          <h4>Headphone</h4>
          <p>240 Item Available</p>
        </div>
      </div>

      <div className="drop-card">
        <img src={lap} alt="" />
        <div>
          <h4>Laptop</h4>
          <p>240 Item Available</p>
        </div>
      </div>

      <div className="drop-card">
        <img src={books} alt="" />
        <div>
          <h4>Book</h4>
          <p>240 Item Available</p>
        </div>
      </div>

    </div>

  </div>
</li>
          <li>Deals</li>
          <li>What's New</li>
          <li>Delivery</li>
        </ul>
</div>
        
        <div className="nav-right">

        
          <div className="search-box">
            <input type="text" placeholder="Search Product" />
            <FaSearch className="search-icon" />
          </div>

         
          <div className="icon-box">
            <FaUser />
            <span>Account</span>
          </div>

          {/* CART */}
          <div className="icon-box">
            <FaShoppingCart />
            <span>Cart</span>
          </div>

        </div>

      </div>


     
      <div className="hero">

        <img src={hero} alt="shopping" className="hero-bg" />

        <div className="hero-content">
          <h1>Shopping And <br /> Department Store.</h1>

          <p>
            Shopping is a bit of a relaxing hobby for me,
            which <br /> is sometimes troubling for the bank balance.
          </p>

          <button className="learn-btn">Learn More</button>
        </div>

      </div>
      <section className="top-categories">

  <h2>Shop Our Top Categories</h2>

  <div className="categories-grid">

    <div className="cat-card">
      <img src={f} alt="furniture"/>
      <h3>Furniture</h3>
    </div>

    <div className="cat-card">
      <img src={b} alt="bag"/>
      <h3>Hand Bag</h3>
    </div>

    <div className="cat-card">
      <img src={bo} alt="books"/>
      <h3>Books</h3>
    </div>

    <div className="cat-card">
      <img src={t} alt="tech"/>
      <h3>Tech</h3>
    </div>

    <div className="cat-card">
      <img src={sn} alt="sneakers"/>
      <h3>Sneakers</h3>
    </div>

    <div className="cat-card">
      <img src={tr} alt="travel"/>
      <h3>Travel</h3>
    </div>

  </div>


<section className="brands">

  <h2>Choose By Brand</h2>

  <div className="brand-grid">

    
    <div className="brand-card">
      <img src={st} alt="staples"/>
      <div>
        <h3>Staples</h3>
        <p>Delivery with in 24 hours</p>
      </div>
    </div>

    
    <div className="brand-card">
      <img src={sp} alt="Sprouts"/>
      <div>
        <h3>Sprouts</h3>
        <p>Delivery with in 24 hours</p>
      </div>
    </div>

    
    <div className="brand-card">
    <img src= {go} alt="Grocery"/>
      <div>
        <h3>Grocery outlet</h3>
        <p>Delivery with in 24 hours</p>
      </div>
    </div>

    
    <div className="brand-card">
      <img src= {ms} alt="Mollie"/>
      <div>
        <h3>Mollie stones</h3>
        <p>Delivery with in 24 hours</p>
      </div>
    </div>

  
    <div className="brand-card">
      <img src= {sb} alt="Sports"/>
      <div>
        <h3>Sports Basement</h3>
        <p>Delivery with in 24 hours</p>
      </div>
    </div>

    
    <div className="brand-card">
      <img src= {cs} alt="Container"/>
      <div>
        <h3>Container Store</h3>
        <p>Delivery with in 24 hours</p>
      </div>
    </div>

    
    <div className="brand-card">
      <img src= {target} alt="Target"/>
      <div>
        <h3>Target</h3>
        <p>Delivery with in 24 hours</p>
      </div>
    </div>

   
    <div className="brand-card">
      <img src= {bev} alt="Bevmo"/>
      <div>
        <h3>Bevmo!</h3>
        <p>Delivery with in 24 hours</p>
      </div>
    </div>

  </div>

</section>
</section>


<section className="offers">

  <h2>Get Up To 70% Off</h2>

  <div className="offers-grid">

    
    <div className="offer-card card1">
      <div className="offer-text">
        <p>Save</p>
        <h1>$100</h1>
        <span>Explore Our Furniture & Home Furnishing Range</span>
      </div>
      <img src={ft1} alt="furniture" />
    </div>

    
    <div className="offer-card card2">
      <div className="offer-text">
        <p>Save</p>
        <h1>$29</h1>
        <span>Explore Our Furniture & Home Furnishing Range</span>
      </div>
      <img src={b1} alt="books" />
    </div>

  
    <div className="offer-card card3">
      <div className="offer-text">
        <p>Save</p>
        <h1>$67</h1>
        <span>Explore Our Furniture & Home Furnishing Range</span>
      </div>
      <img src={shirt} alt="clothes" />
    </div>

    
    <div className="offer-card card4">
      <div className="offer-text">
        <p>Save</p>
        <h1>$59</h1>
        <span>Explore Our Furniture & Home Furnishing Range</span>
      </div>
      <img src={scb} alt="bag" />
    </div>

  </div>

</section>
     <section className="mid-img">
      <img src={m} alt="shopping" className="hero-bg" />
    

      <div className="hero-card">

        <h1>
          Get 5% Cash <br />
          Back On $200
        </h1>

        <p>
          Shopping is a bit of a relaxing hobby for me,
          which is sometimes troubling for the bank balance.
        </p>

        <button className="hero-btn">
          Learn More
        </button>

      </div>
    </section>
   
      <section className="deals">

        <h2 className="deals-title">Todays Best Deals For You!</h2>

        
        <div className="categories">
          <button>Gadgets</button>
          <button>Fashion</button>
          <button>Toys</button>
          <button>Education</button>
          <button>Beauty</button>
          <button>Fitness</button>
          <button>Furniture</button>
          <button className="active">Sneakers</button>
        </div>


        
        <div className="product-grid">

          <div className="card">
              <div className="wishlist-icon">
  <FaRegHeart />
</div>
            <div className="img-box">
             <img src={lsl} alt="logo"   />
             </div>
            <h3>Laptop sleeve MacBook</h3>
            <p className="price">$59.00</p>
            <p className="desc">Organic Cotton, fairtrade certified</p>
            <p className="rating">
  ★★★★★ <span>(121)</span>
</p>
            <button>Add to Cart</button>
          </div>

          <div className="card">
             <div className="wishlist-icon">
  <FaRegHeart />
</div>
            <div className="img-box">
             <img src={air} alt="logo"   /></div>
            <h3>AirPods Max</h3>
            <p className="price">$559.00</p>
            <p className="desc">Perfect balance of high fidelity audio</p>
            <p className="rating">
  ★★★★★ <span>(121)</span>
</p>
            <button>Add to Cart</button>
          </div>

          <div className="card">
              <div className="wishlist-icon">
  <FaRegHeart />
</div>
            <div className="img-box">
            <img src={fl} alt="logo"   /></div>
            <h3>Flower Laptop Sleeve</h3>
            <p className="price">$39.00</p>
            <p className="desc">15 in. x 10 in. flap top closure</p>
            <p className="rating">
  ★★★★★ <span>(121)</span>
</p>
            <button>Add to Cart</button>
          </div>

          <div className="card">
             <div className="wishlist-icon">
  <FaRegHeart />
</div>
            <div className="img-box">
            <img src={swb} alt="logo"   /></div>
            <h3>Supreme Water Bottle</h3>
            <p className="price">$19.00</p>
            <p className="desc">Table with air purifier, stained veneer/black</p>
            <p className="rating">
  ★★★★★ <span>(121)</span>
</p>
            <button>Add to Cart</button>
          </div>

          <div className="card">
            <div className="wishlist-icon">
  <FaRegHeart />
</div>
            <div className="img-box">
            <img src={lsm} alt="logo"   /></div>
            <h3>Laptop sleeve MacBook</h3>
            <p className="price">$59.00</p>
            <p className="desc">Organic Cotton, fairtrade certified</p>
           <p className="rating">
  ★★★★★ <span>(121)</span>
</p>
            <button>Add to Cart</button>
          </div>

          <div className="card">
              <div className="wishlist-icon">
  <FaRegHeart />
</div>
            <div className="img-box">
            <img src={mac} alt="logo"   /></div>
            <h3>Macbook Pro 13"</h3>
            <p className="price">$1099.00</p>
            <p className="desc">256GB, 8 Core GPU</p>
            <p className="rating">
  ★★★★★ <span>(121)</span>
</p>
            <button>Add to Cart</button>
          </div>

          <div className="card">
               <div className="wishlist-icon">
  <FaRegHeart />
</div>
            <div className="img-box">
            <img src={home} alt="logo"  /></div>
            <h3>HomePod Mini</h3>
            <p className="price">$59.00</p>
            <p className="desc">5 Colors Available</p>
           <p className="rating">
  ★★★★★ <span>(121)</span>
</p>
            <button>Add to Cart</button>
          </div>

          <div className="card">
              <div className="wishlist-icon">
  <FaRegHeart />
</div>
             <div className="img-box"> 
           <img src={ipad} alt="logo" /></div>
            <h3>Ipad Mini</h3>
            <p className="price">$539.00</p>
            <p className="desc">Table with air purifier, stained veneer/black</p>
           <p className="rating">
  ★★★★★ <span>(121)</span>
</p>
            <button>Add to Cart</button>
          </div>

        </div>

      </section>
      

<footer className="footer">

  <div className="footer-container">

   
    <div className="footer-left">

      <div className="footer-logo">
        <img src={logo} alt="logo"/>
        <h2>Shopcart</h2>
      </div>

      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua
        dolor do amet sint. Velit officia consequat duis enim
        velit mollit.
      </p>

      <h3>Accepted Payments</h3>

      <div className="payments">

        <img src={s} alt="stripe"/>
        <img src={v} alt="visa"/>
        <img src={ma} alt="master"/>
        <img src={a} alt="amazon"/>

        <img src={k} alt="klarna"/>
        <img src={p} alt="paypal"/>
        <img src={ap} alt="applepay"/>
        <img src={g} alt="gpay"/>

      </div>

    </div>


   

    <div className="footer-column">
      <h3>Department</h3>
      <ul>
        <li>Fashion</li>
        <li>Education Product</li>
        <li>Frozen Food</li>
        <li>Beverages</li>
        <li>Organic Grocery</li>
        <li>Office Supplies</li>
        <li>Beauty Products</li>
        <li>Books</li>
        <li>Electronics & Gadget</li>
        <li>Travel Accessories</li>
        <li>Fitness</li>
        <li>Sneakers</li>
        <li>Toys</li>
        <li>Furniture</li>
      </ul>
    </div>


   

    <div className="footer-column">
      <h3>About Us</h3>
      <ul>
        <li>About Shopcart</li>
        <li>Careers</li>
        <li>News & Blog</li>
        <li>Help</li>
        <li>Press Center</li>
        <li>Shop By Location</li>
        <li>Shopcart Brands</li>
        <li>Affiliate & Partners</li>
        <li>Ideas & Guides</li>
      </ul>
    </div>



    <div className="footer-column">
      <h3>Services</h3>
      <ul>
        <li>Gift Card</li>
        <li>Mobile App</li>
        <li>Shipping & Delivery</li>
        <li>Order Pickup</li>
        <li>Account Signup</li>
      </ul>
    </div>


    

    <div className="footer-column">
      <h3>Help</h3>
      <ul>
        <li>Shopcart Help</li>
        <li>Returns</li>
        <li>Track Orders</li>
        <li>Contact Us</li>
        <li>Feedback</li>
        <li>Security & Fraud</li>
      </ul>
    </div>

  </div>

</footer>


<div className="footer-bottom">

  <div className="footer-bottom-left">

    <span className="footer-item">
      <img src={sellerIcon} alt="seller" />
      Become Seller
    </span>

    <span className="footer-item">
      <img src={giftIcon} alt="gift" />
      Gift Cards
    </span>

    <span className="footer-item">
      <img src={helpIcon} alt="help" />
      Help Center
    </span>

  </div>

  <div className="footer-bottom-center">
    <span>Terms of Service</span>
    <span>Privacy & Policy</span>
  </div>

  <div className="footer-bottom-right">
    All Right reserved by Musemind <u>ui/ux design</u> agency | 2022
  </div>

</div>

    </>
  );
};

export default Navbar;