import { useState } from 'react';
import './App.css';

function App() {
  const [selectedColor, setSelectedColor] = useState('black');

  return (
    <div className="app-container">
      <header>
        <div className="logo">@INKPACTAESTHETICS</div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1>HE'S <span>BACK</span></h1>
          <h2>TAHAAD PETTIFORD</h2>
          <p>Celebrate the return of Auburn's star with our bestselling shirt</p>
          <a href="#shop" className="cta-button">SHOP NOW</a>
        </div>
      </section>

      <section className="announcement">
        <div className="announcement-content">
          <h2>JUST ANNOUNCED</h2>
          <p>Tahaad Pettiford has withdrawn from the NBA draft and will return to Auburn for his sophomore season!</p>
        </div>
      </section>

      <section className="product-showcase" id="shop">
        <h2>TAHAAD PETTIFORD SHIRT</h2>
        <p>Available in three colors</p>
        
        <div className="color-selector">
          <button 
            className={`color-option black ${selectedColor === 'black' ? 'selected' : ''}`}
            onClick={() => setSelectedColor('black')}
          >
            Black
          </button>
          <button 
            className={`color-option white ${selectedColor === 'white' ? 'selected' : ''}`}
            onClick={() => setSelectedColor('white')}
          >
            White
          </button>
          <button 
            className={`color-option grey ${selectedColor === 'grey' ? 'selected' : ''}`}
            onClick={() => setSelectedColor('grey')}
          >
            Grey
          </button>
        </div>
        
        <div className="product-display">
          <img 
            src={`/${selectedColor}_shirt.jpeg`} 
            alt={`Tahaad Pettiford shirt in ${selectedColor}`} 
            className="product-image"
          />
          <div className="product-info">
            <h3>Tahaad Pettiford Vintage Basketball Graphic T-shirt</h3>
            <p className="product-description">
              Unisex sports tee featuring Tahaad Pettiford in action. Perfect for Auburn fans and sports lovers.
            </p>
            <p className="price">$29.99</p>
            <div className="size-selector">
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
              <button>XXL</button>
            </div>
            <button className="add-to-cart">ADD TO CART</button>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <div className="feature-icon">🏀</div>
          <h3>PREMIUM QUALITY</h3>
          <p>Soft, durable fabric that lasts</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🚚</div>
          <h3>FAST SHIPPING</h3>
          <p>Get your gear in time for the season</p>
        </div>
        <div className="feature">
          <div className="feature-icon">💯</div>
          <h3>AUTHENTIC DESIGN</h3>
          <p>Show your Auburn pride in style</p>
        </div>
      </section>

      <section className="cta">
        <h2>GET YOURS BEFORE THEY'RE GONE</h2>
        <p>Limited stock available - these shirts are selling fast!</p>
        <a href="#shop" className="cta-button">SHOP NOW</a>
      </section>

      <footer id="contact">
        <div className="footer-content">
          <div className="footer-section">
            <h3>@INKPACTAESTHETICS</h3>
            <p>Auburn fan gear and apparel</p>
            <p>Follow us on Instagram for updates</p>
          </div>
          <div className="footer-section">
            <h3>CONTACT</h3>
            <p>Email: info@inkpactaesthetics.com</p>
            <p>Instagram: @inkpactaesthetics</p>
          </div>
          <div className="footer-section">
            <h3>LINKS</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#shop">Shop</a></li>
              <li><a href="https://inkpactaesthetics.etsy.com" target="_blank" rel="noopener noreferrer">Etsy Store</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          © 2025 InkPact Aesthetics. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
