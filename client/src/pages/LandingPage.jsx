import React, { useState } from 'react';
import '../styles/landingpage.css';

import socialeXLogo from '../images/SocialeX.png';
import About1 from '../images/about-1.png';
import About2 from '../images/about-2.png';

import Login from '../components/Login';
import Register from '../components/Register';

const LandingPage = () => {
  const [isLoginBox, setIsLoginBox] = useState(true);

  return (
    <div className="landingPage">
      {/* ========== HEADER ========== */}
      <header className="landing-header glassmorph">
        <span className="landing-header-logo">
          <img src={socialeXLogo} alt="Sociopedia Logo" />
        </span>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#home" className="cta-button">Join Now</a></li>
          </ul>
        </nav>
      </header>

      {/* ========== MAIN ========== */}
      <main className="landing-body">

        {/* Hero Section */}
        <section className="landing-hero" id="home">
          <div className="landing-hero-content">
            <h1>Welcome to Sociopedia</h1>
            <p>Step into Sociopedia, the playground for the wildly imaginative, where vibrant communities thrive and eccentricities are celebrated.</p>

            <div className="authentication-form glassmorph">
              {isLoginBox
                ? <Login setIsLoginBox={setIsLoginBox} />
                : <Register setIsLoginBox={setIsLoginBox} />}
            </div>
          </div>

          <div className="landing-hero-image">
            <div id="landing-image-sidebar-left"></div>
            <div className="back"></div>
            <div id="landing-image-sidebar-right"></div>
          </div>
        </section>

        {/* About Section */}
        <section className="landing-about" id="about">
          <div className="about-1 glassmorph">
            <img src={About1} alt="Stay Connected" />
            <div className="about-1-content">
              <h3>Stay Connected</h3>
              <p>Keep up with your friends no matter where they are. Share memories, follow updates, and connect like never before.</p>
              <a href="#home" className="cta-button">Join Now</a>
            </div>
          </div>

          <div className="about-2 glassmorph">
            <div className="about-2-content">
              <h3>Amplify Your Voice</h3>
              <p>Whether you're a creator or a dreamer, Sociopedia provides the stage to showcase your passion to the world.</p>
              <a href="#home" className="cta-button">Join Now</a>
            </div>
            <img src={About2} alt="Amplify Voice" />
          </div>
        </section>

        {/* Features Section */}
        <section className="landing-features glassmorph">
          <h2>Why Choose Sociopedia?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <i className="fas fa-users" aria-hidden="true"></i>
              <h4>Community</h4>
              <p>Connect with like-minded people and explore vibrant communities.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-bolt" aria-hidden="true"></i>
              <h4>Fast & Secure</h4>
              <p>Powered by MERN stack to ensure smooth and secure experience.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-palette" aria-hidden="true"></i>
              <h4>Customizable</h4>
              <p>Personalize your profile and feed to match your vibe.</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="landing-testimonials glassmorph">
          <h2>What Our Users Say</h2>
          <div className="testimonial">
            <p>"Sociopedia is a game changer. I can share, connect and grow!"</p>
            <span>- Ansh Jindal</span>
          </div>
          <div className="testimonial">
            <p>"Simple, sleek, and fun. Love how it looks and works."</p>
            <span>- Dev User</span>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>© Sociopedia.com — All rights reserved</p>
        </footer>

        {/* Scroll to Top */}
        <button
          className="scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </button>

      </main>
    </div>
  );
};

export default LandingPage;
