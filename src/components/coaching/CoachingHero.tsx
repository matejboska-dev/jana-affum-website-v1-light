import React from 'react';

export default function CoachingHero() {
  return (
    <div id="coaching-hero" className="banner-1" style={{ minHeight: 'auto', paddingBottom: '40px' }}>
      <div className="top-banner-cover">
        <div className="base-container">
          <div className="flex-content">
            <div className="left-content">
              <div
                className="case-study-badge"
                style={{
                  alignSelf: 'flex-start',
                  marginBottom: '16px',
                  background: 'rgba(211,175,101,0.15)',
                  color: 'var(--gold-deep)',
                  border: '1px solid rgba(211,175,101,0.3)',
                }}
              >
                Private Coaching &bull; Thinking Partnership
              </div>
              <h1 className="banner-1-title" style={{ fontSize: 'clamp(34px, 4.5vw, 56px)' }}>
                For leaders and professionals navigating{' '}
                <span className="h1-span">pivotal change.</span>
              </h1>
              <div className="banner-par-wrap">
                <p className="new-banner-text">
                  A discreet, high-touch thinking partnership for senior professionals at a career
                  crossroads, expat executives, and founders. Coaching grounded in ten years of
                  deciding who gets hired and how the market actually values talent.
                </p>
                <p
                  style={{
                    fontSize: 'var(--t-meta)',
                    lineHeight: 'var(--lh-meta)',
                    color: 'var(--par-color)',
                    marginTop: '14px',
                    marginBottom: 0,
                    fontWeight: 400,
                    maxWidth: 'var(--measure)',
                  }}
                >
                  Certified Business &amp; Life Coach &bull; NLP Practitioner &bull; 10+ Years International Executive Search
                </p>
              </div>
              <div className="button-con" style={{ marginTop: '28px' }}>
                <div className="no-srink-btn">
                  <a href="#coaching-inquiry" className="primary-button w-button">
                    Book a complimentary 20-minute conversation
                  </a>
                </div>
                <div className="link-wrap">
                  <a
                    href="#what-brings-you-here"
                    className="underline-link-container w-inline-block"
                  >
                    <div>What might bring you here</div>
                    <div className="hover-line">
                      <div className="hover-fill-line"></div>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/6564e2f94f64a387443d7e9f_Vector%206.webp"
                      loading="lazy"
                      alt="Arrow"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-portrait-wrap">
          <div className="right-circle"></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="right-img"
            src="/images/jana-fit.png"
            alt="Jana Affum - Private Coach & Thinking Partner"
            loading="eager"
            style={{ objectFit: 'contain', objectPosition: 'center bottom' }}
          />
        </div>
      </div>

      {/* Trust pill strip */}
      <div className="base-container w-container" style={{ marginTop: '36px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            background: '#FAF7F0',
            border: '1px solid rgba(211,175,101,0.25)',
            borderRadius: '16px',
            padding: '24px 28px',
          }}
        >
          <div>
            <span
              style={{
                fontSize: 'var(--t-label)',
                fontWeight: 700,
                color: 'var(--gold-deep)',
                textTransform: 'uppercase',
                letterSpacing: 'var(--ls-label)',
                display: 'block',
                marginBottom: '6px',
              }}
            >
              Selective Practice
            </span>
            <p style={{ margin: 0, fontSize: 'var(--t-meta)', color: 'var(--text-dark)', fontWeight: 600 }}>
              Limited concurrent clients &bull; High-touch bespoke advisory
            </p>
          </div>
          <div>
            <span
              style={{
                fontSize: 'var(--t-label)',
                fontWeight: 700,
                color: 'var(--gold-deep)',
                textTransform: 'uppercase',
                letterSpacing: 'var(--ls-label)',
                display: 'block',
                marginBottom: '6px',
              }}
            >
              The Recruiter Advantage
            </span>
            <p style={{ margin: 0, fontSize: 'var(--t-meta)', color: 'var(--text-dark)', fontWeight: 600 }}>
              Real hiring market intelligence &bull; Not textbook theory
            </p>
          </div>
          <div>
            <span
              style={{
                fontSize: 'var(--t-label)',
                fontWeight: 700,
                color: 'var(--gold-deep)',
                textTransform: 'uppercase',
                letterSpacing: 'var(--ls-label)',
                display: 'block',
                marginBottom: '6px',
              }}
            >
              Language &amp; Format
            </span>
            <p style={{ margin: 0, fontSize: 'var(--t-meta)', color: 'var(--text-dark)', fontWeight: 600 }}>
              English &amp; Czech &bull; Prague in-person or global video
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
