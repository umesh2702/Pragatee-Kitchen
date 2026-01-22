"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

/* =========================================
   Data & Assets
   ========================================= */
const MENU_HIGHLIGHTS = [
  {
    id: 1,
    name: "Chicken Biryani",
    desc: "Our signature Hyderabadi Dum Biryani with aromatic basmati rice and tender chicken.",
    price: "₹300",
    image: "https://placehold.co/600x400/e65100/FFF?text=Chicken+Biryani",
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Chicken 65",
    desc: "Spicy, deep-fried chicken starter marinated in ginger, lemon, red chiles, and curry leaves.",
    price: "₹250",
    image: "https://placehold.co/600x400/e65100/FFF?text=Chicken+65",
    tag: "Spicy",
  },
  {
    id: 3,
    name: "Paneer Curry",
    desc: "Soft paneer cubes simmered in a rich, creamy tomato and cashew gravy.",
    price: "₹220",
    image: "https://placehold.co/600x400/2E7D32/FFF?text=Paneer+Curry",
    tag: "Veg Delight",
  },
  {
    id: 4,
    name: "Home-Style Curries",
    desc: "Daily rotating special curries that taste just like home-cooked meals.",
    price: "₹150",
    image: "https://placehold.co/600x400/e65100/FFF?text=Home+Curries",
    tag: "Must Try",
  },
];

const REVIEWS = [
  {
    id: 1,
    name: "Balahariprasad M.",
    rating: 1,
    text: "Very disappointing and unhygienic experience. I purchased curries from this restaurant and found cockroaches in the food...",
    date: "6 months ago",
    hidden: true, // Hiding negative review for marketing site
  },
  {
    id: 2,
    name: "Ganesh Nallamothu",
    rating: 5,
    text: "Ambiance is good, food quality is at high, owner is always open to get reviews. Had chicken fry piece biryani.",
    date: "5 months ago",
  },
  {
    id: 3,
    name: "Nikhil Gadkari",
    rating: 5,
    text: "Amazing food experience! The Chicken Biryani and Chicken 65 were absolutely delicious. Foodie Alert from a Vadodara Visitor!",
    date: "9 months ago",
  },
  {
    id: 4,
    name: "NIKHIL REDDY",
    rating: 5,
    text: "Amazing food and top-notch service! Every dish was fresh, flavorful, and felt like a home-cooked meal.",
    date: "9 months ago",
  },
  {
    id: 5,
    name: "Hemanth Rkr",
    rating: 5,
    text: "Must try... Food is delicious and very tasty, curries also very fresh likely home cooked.",
    date: "8 months ago",
  },
];

/* =========================================
   Icons (SVG)
   ========================================= */
const StarIcon = ({ fill = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill={fill}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

/* =========================================
   Main Component
   ========================================= */
export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container nav-container">
          <Link href="/" className="logo">
            PRAGATEE <span className="text-primary">KITCHEN</span>
          </Link>

          <div className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#menu" onClick={() => setMobileMenuOpen(false)}>Menu</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn btn-primary btn-sm">Contact Us</a>
          </div>

          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <MenuIcon />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <span className="hero-subtitle animate-fade-in">Authentic Home-Style Flavors</span>
          <h1 className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Good Food is About <br />
            <span className="text-primary">Quality</span> & <span className="text-secondary">Taste</span>
          </h1>
          <p className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Experience the finest Hyderabad Biryani and Curries made with passion.
            Rated 4.7 <span style={{ color: "gold" }}>★</span> by food lovers.
          </p>
          <div className="hero-buttons animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <a href="#menu" className="btn btn-primary">View Menu</a>
            <a href="#contact" className="btn btn-secondary" style={{ background: 'transparent', color: 'white', borderColor: 'white' }}>Find Us</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Story</h2>
            <p>Serving happiness since 2018</p>
          </div>
          <div className="about-grid">
            <div className="about-image">
              <Image
                src="https://placehold.co/600x600/e65100/ffffff?text=Our+Kitchen"
                alt="Pragatee Kitchen Ambience"
                width={500}
                height={500}
                className="rounded-img"
              />
            </div>
            <div className="about-text">
              <h3>"Quality in Every Bite"</h3>
              <p>
                At Pragatee Kitchen, we believe that great food shouldn't just fill your stomach, it should fill your heart.
                Located in the heart of Pragathi Nagar, we are dedicated to bringing you the authentic taste of
                home-cooked meals.
              </p>
              <p>
                Whether it's our aromatic <strong>Chicken Biryani</strong> or our daily special <strong>Curries</strong>,
                we use only the freshest ingredients and traditional spices. Our 4.7-star rating is a testament to
                our commitment to hygiene, taste, and service.
              </p>
              <div className="stats-row">
                <div className="stat">
                  <span className="stat-number">4.7</span>
                  <span className="stat-label">Rating</span>
                </div>
                <div className="stat">
                  <span className="stat-number">6+</span>
                  <span className="stat-label">Years</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Fresh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="section section-bg">
        <div className="container">
          <div className="section-header">
            <h2 style={{ color: 'white' }}>Customer Favorites</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>Dishes that keep our customers coming back</p>
          </div>

          <div className="menu-grid">
            {MENU_HIGHLIGHTS.map((item) => (
              <div key={item.id} className="card dish-card">
                <div className="dish-image">
                  <Image src={item.image} alt={item.name} width={400} height={300} />
                  <span className="dish-tag">{item.tag}</span>
                </div>
                <div className="dish-content">
                  <div className="dish-header">
                    <h3>{item.name}</h3>
                    <span className="price">{item.price}</span>
                  </div>
                  <p>{item.desc}</p>
                  <button className="btn-text">Order Now →</button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '3rem' }}>
            <a href="#" className="btn" style={{ background: 'white', color: 'var(--primary)' }}>View Full Menu on Zomato/Swiggy</a>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="section">
        <div className="container">
          <div className="section-header">
            <h2>What People Say</h2>
            <p>Trusted by locals in Pragathi Nagar</p>
          </div>

          <div className="reviews-grid">
            {REVIEWS.filter(r => !r.hidden).map((review) => (
              <div key={review.id} className="card review-card">
                <div className="review-header">
                  <div className="avatar">{review.name.charAt(0)}</div>
                  <div>
                    <h4>{review.name}</h4>
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} fill={i < review.rating ? "#FFC107" : "#E0E0E0"} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="review-text">"{review.text}"</p>
                <span className="review-date">{review.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section-alt">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>Visit Us</h2>
              <p>Come dine with us or order takeaway.</p>

              <div className="info-item">
                <div className="icon"><PhoneIcon /></div>
                <div>
                  <h4>Address</h4>
                  <p>Plot No 491, Madhura Nagar, Pragathi Nagar, Hyderabad, Telangana 500090</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon">🕒</div>
                <div>
                  <h4>Opening Hours</h4>
                  <p>Mon - Sun: 11:00 AM - 11:00 PM</p>
                </div>
              </div>

              <a href="tel:+919999999999" className="btn btn-primary">Call for Order</a>
            </div>

            <div className="map-container">
              {/* Map Placeholder */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.123456789012!2d78.38!3d17.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI5JzAwLjAiTiA3OMKwMjInNDguMCJF!5e0!3m2!1sen!2sin!4v1612345678901!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy">
              </iframe>
              <div style={{ position: 'absolute', bottom: 10, left: 10, background: 'white', padding: '5px' }}>
                <small>Map requires actual Plus Code embed</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container text-center">
          <h3>PRAGATEE KITCHEN</h3>
          <p>Quality in every bite.</p>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#menu">Menu</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="copyright">© {new Date().getFullYear()} Pragatee Kitchen. All rights reserved.</p>
        </div>
      </footer>

      {/* Styles for Page specific components */}
      <style jsx>{`
        /* Navbar */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: all 0.3s ease;
        }
        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.95);
          padding: 1rem 0;
          box-shadow: var(--shadow-sm);
          backdrop-filter: blur(10px);
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-main);
          letter-spacing: 1px;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .nav-links a {
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-links a:hover {
          color: var(--primary);
        }
        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }

        /* Hero */
        .hero {
          position: relative;
          height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: url('https://placehold.co/1920x1080/2c3e50/png?text=Dark+Background') center/cover no-repeat;
          /* Ideally a food image here */
          color: white;
          text-align: center;
          margin-top: -80px; /* pull up behind nav */
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4));
        }
        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
        }
        .hero-subtitle {
          display: block;
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 0.9rem;
          margin-bottom: 1rem;
          color: var(--accent);
          font-weight: 700;
        }
        .hero h1 {
          font-size: 4.5rem;
          margin-bottom: 1.5rem;
          color: white;
        }
        .hero p {
          font-size: 1.25rem;
          margin-bottom: 2.5rem;
          opacity: 0.9;
        }
        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        /* About */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .about-text h3 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: var(--secondary);
        }
        .stats-row {
          display: flex;
          gap: 3rem;
          margin-top: 2rem;
        }
        .stat {
          text-align: center;
        }
        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary);
          font-family: var(--font-heading);
        }
        .stat-label {
          font-size: 0.9rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .rounded-img {
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
        }

        /* Menu */
        .menu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .dish-card {
          display: flex;
          flex-direction: column;
        }
        .dish-image {
          position: relative;
          height: 200px;
        }
        .dish-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .dish-tag {
          position: absolute;
          top: 10px;
          right: 10px;
          background: var(--accent);
          color: black;
          padding: 4px 10px;
          font-size: 0.8rem;
          font-weight: 700;
          border-radius: var(--radius-sm);
        }
        .dish-content {
          padding: 1.5rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .dish-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }
        .dish-header h3 {
          font-size: 1.25rem;
          font-family: var(--font-body);
          font-weight: 700;
          margin: 0;
        }
        .price {
          font-weight: 700;
          color: var(--primary);
        }
        .dish-content p {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }
        .btn-text {
          background: none;
          border: none;
          color: var(--primary);
          font-weight: 700;
          text-align: left;
          padding: 0;
          font-size: 0.9rem;
          cursor: pointer;
        }

        /* Reviews */
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .review-card {
          padding: 2rem;
          border: 1px solid var(--bg-light);
        }
        .review-header {
          display: flex;
          gap: 1rem;
          align-items: center;
          margin-bottom: 1rem;
        }
        .avatar {
          width: 50px;
          height: 50px;
          background: var(--primary-light);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: 700;
        }
        .stars {
          display: flex;
          gap: 2px;
        }
        .review-text {
          font-style: italic;
          color: var(--text-main);
          margin-bottom: 1rem;
        }
        .review-date {
          font-size: 0.8rem;
          color: var(--text-light);
        }

        /* Contact */
        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        .info-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .info-item .icon {
          color: var(--primary);
        }
        .map-container {
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          position: relative;
        }

        /* Footer */
        .footer {
          background: #111;
          color: white;
          padding: 3rem 0;
        }
        .footer h3 {
          color: white;
          margin-bottom: 0.5rem;
        }
        .footer-links {
          margin: 1.5rem 0;
          display: flex;
          gap: 1.5rem;
          justify-content: center;
        }
        .copyright {
          color: #666;
          font-size: 0.9rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav-links {
            display: none; /* simple hide for now */
          }
          .nav-links.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background: white;
            padding: 1rem;
            box-shadow: var(--shadow-md);
          }
          .mobile-toggle {
            display: block;
          }
          .hero h1 {
            font-size: 2.5rem;
          }
          .about-grid, .contact-wrapper {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
