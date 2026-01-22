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
    image: "/images/chicken-biryani.png",
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Chicken 65",
    desc: "Spicy, deep-fried chicken starter marinated in ginger, lemon, red chiles, and curry leaves.",
    price: "₹250",
    image: "/images/chicken-65.png",
    tag: "Spicy",
  },
  {
    id: 3,
    name: "Paneer Curry",
    desc: "Soft paneer cubes simmered in a rich, creamy tomato and cashew gravy.",
    price: "₹220",
    image: "/images/paneer-curry.png",
    tag: "Veg Delight",
  },
  {
    id: 4,
    name: "Home-Style Curries",
    desc: "Daily rotating special curries that taste just like home-cooked meals.",
    price: "₹150",
    image: "/images/home-curries.png",
    tag: "Must Try",
  },
];

const GOOGLE_REVIEWS = [
  {
    id: 1,
    name: "Ganesh Nallamothu",
    rating: 5,
    text: "Ambiance is good, food quality is at high, owner is always open to get reviews. Had chicken fry piece biryani.",
    date: "5 months ago",
    avatar: "G",
  },
  {
    id: 2,
    name: "Nikhil Gadkari",
    rating: 5,
    text: "Amazing food experience! The Chicken Biryani and Chicken 65 were absolutely delicious. Foodie Alert from a Vadodara Visitor!",
    date: "9 months ago",
    avatar: "N",
  },
  {
    id: 3,
    name: "NIKHIL REDDY",
    rating: 5,
    text: "Amazing food and top-notch service! Every dish was fresh, flavorful, and felt like a home-cooked meal.",
    date: "9 months ago",
    avatar: "N",
  },
  {
    id: 4,
    name: "Hemanth Rkr",
    rating: 5,
    text: "Must try... Food is delicious and very tasty, curries also very fresh likely home cooked.",
    date: "8 months ago",
    avatar: "H",
  },
  {
    id: 5,
    name: "Vamshi K",
    rating: 5,
    text: "One of the best biryani spots in Pragathi Nagar. The taste is authentic and reminds me of home.",
    date: "6 months ago",
    avatar: "V",
  },
  {
    id: 6,
    name: "Srinivas M",
    rating: 5,
    text: "Excellent quality food at reasonable prices. The chicken curry is a must-try!",
    date: "4 months ago",
    avatar: "S",
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
                src="/images/restaurant-interior.png"
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
            <a href="https://www.swiggy.com/city/hyderabad/pragatee-kitchen-nizampet-and-pragathi-nagar-rest1089125" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'white', color: 'var(--primary)' }}>View Full Menu on Swiggy</a>
          </div>
        </div>
      </section>

      {/* Google Maps Reviews Section */}
      <section id="reviews" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Google Reviews</h2>
            <p>Rated <strong style={{ color: 'var(--accent)' }}>4.7★</strong> on Google Maps</p>
          </div>

          <div className="reviews-slider-container">
            <div className="reviews-slider">
              {[...GOOGLE_REVIEWS, ...GOOGLE_REVIEWS].map((review, index) => (
                <div key={`${review.id}-${index}`} className="review-slide">
                  <div className="google-review-card">
                    <div className="review-header">
                      <div className="google-avatar">{review.avatar}</div>
                      <div>
                        <h4>{review.name}</h4>
                        <div className="stars">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} fill={i < review.rating ? "#FFC107" : "#E0E0E0"} />
                          ))}
                        </div>
                      </div>
                      <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="google-logo" />
                    </div>
                    <p className="review-text">"{review.text}"</p>
                    <span className="review-date">{review.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '2rem' }}>
            <a href="https://maps.app.goo.gl/xpvveD2JCigRMA8QA" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View All Reviews on Google</a>
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1902.3831720096841!2d78.39532402275303!3d17.51866382848576!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f00415eebb7%3A0xe6fca249d0e67790!2sPRAGATEE%20KITCHEN!5e0!3m2!1sen!2sin!4v1769079430297!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
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
          <div className="social-links" style={{ margin: '1.5rem 0', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer" style={{ padding: '0.5rem 1rem', background: '#fc8019', color: 'white', borderRadius: '8px', fontWeight: '700' }}>Order on Swiggy</a>
            <a href="https://www.zomato.com" target="_blank" rel="noopener noreferrer" style={{ padding: '0.5rem 1rem', background: '#e23744', color: 'white', borderRadius: '8px', fontWeight: '700' }}>Order on Zomato</a>
          </div>
          <p className="copyright">© {new Date().getFullYear()} Pragatee Kitchen. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="floating-whatsapp" aria-label="Chat on WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

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
          background: url('/images/hero-bg.png') center/cover no-repeat;
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

        /* Reviews Slider */
        .reviews-slider-container {
          overflow: hidden;
          width: 100%;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .reviews-slider {
          display: flex;
          gap: 1.5rem;
          animation: scroll 30s linear infinite;
          width: max-content;
        }
        .reviews-slider:hover {
          animation-play-state: paused;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .review-slide {
          flex-shrink: 0;
          width: 350px;
        }
        .google-review-card {
          background: white;
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          height: 100%;
          border: 1px solid #e0e0e0;
        }
        .review-header {
          display: flex;
          gap: 1rem;
          align-items: center;
          margin-bottom: 1rem;
        }
        .google-avatar {
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, #4285f4, #34a853);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          font-weight: 700;
        }
        .google-logo {
          width: 50px;
          height: auto;
          margin-left: auto;
          opacity: 0.8;
        }
        .stars {
          display: flex;
          gap: 2px;
        }
        .review-text {
          font-style: italic;
          color: var(--text-main);
          margin-bottom: 1rem;
          font-size: 0.95rem;
          line-height: 1.5;
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
          .hero-content {
            padding-top: 80px;
          }
          .hero-subtitle {
            margin-top: 1rem;
          }
          .about-grid, .contact-wrapper {
            grid-template-columns: 1fr;
          }
        }

        /* Floating WhatsApp Button */
        .floating-whatsapp {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 60px;
          height: 60px;
          background: #25D366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
          z-index: 1000;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          animation: pulse 2s infinite;
        }
        .floating-whatsapp:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
          70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
      `}</style>
    </main>
  );
}
