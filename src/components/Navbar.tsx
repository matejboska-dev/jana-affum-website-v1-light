'use client';

import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Esc or window resize
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth > 991) setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="nav-fixed-menu w-nav" role="banner">
      <div className="white-nav-bg"></div>
      <div className="nav-hero-container w-container">
        <div className="menu-item-wrapper">
          <a
            href="/"
            className="brand-logo-2 w-nav-brand"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/jana-logo.jpg"
              alt="Jana Affum logo"
              height={38}
              className="logo-consultant-w"
              style={{
                borderRadius: '4px',
                border: '1px solid rgba(211,175,101,0.3)',
              }}
            />
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: '20px',
                color: 'var(--text-dark)',
                letterSpacing: '0.02em',
              }}
            >
              Jana Affum
            </span>
          </a>

          <nav
            role="navigation"
            className={`nav-menu-2 w-nav-menu ${mobileMenuOpen ? 'w--open' : ''}`}
            style={{
              display: mobileMenuOpen ? 'block' : undefined,
            }}
          >
            <div className="nav-menu-shadow-overlay-4">
              <div className="tablet-menu-4">
                <button
                  type="button"
                  className="close-menu-button-3 w-nav-button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close navigation"
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/63c155ba2b5c7835ff19d720_x_icon.webp"
                    alt="Close navigation"
                    className="nav-close-icon-3"
                  />
                </button>
              </div>
              <div className="dropdown-menu-3">
                <div className="top-tablet-menu-3">
                  <div className="border-wrap-3">
                    <div className="nav-dropdown-item">
                      <a
                        href="/"
                        className="dropdown-header-item w-inline-block"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <p className="nav-intro-item-2">Home</p>
                      </a>
                    </div>
                    <div className="nav-dropdown-item">
                      <a
                        href="/recruitment"
                        className="dropdown-header-item w-inline-block"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <p className="nav-intro-item-2">Recruitment</p>
                      </a>
                    </div>
                    <div className="nav-dropdown-item">
                      <a
                        href="/coaching"
                        className="dropdown-header-item w-inline-block"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <p className="nav-intro-item-2">Coaching</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="login-tablet-wrap">
                  <div className="btn-wrap-tablet">
                    <a
                      href="#booking"
                      className="new-primary-button w-button"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Book a private conversation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <div className="btn-wrap">
            <a href="#booking" className="new-primary-button w-button">
              Book a private conversation
            </a>
          </div>

          <button
            type="button"
            className="menu-button-3 w-nav-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
          >
            <div className="wrapper-item-home-2">
              <div className="nav-line-white-2"></div>
              <div className="line-white-2"></div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
