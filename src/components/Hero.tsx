import React from 'react';
import Link from 'next/link';
import LogoMarquee from '@/components/LogoMarquee';

export default function Hero() {
  return (
    <div id="hero" className="banner-1">
      <div className="top-banner-cover">
        <div className="base-container">
          <div className="flex-content">
            <div className="left-content">
              <h1 className="banner-1-title">
                Make the people decisions that shape{' '}
                <span className="h1-span">what comes next.</span>
              </h1>
              <div className="banner-par-wrap">
                <p className="new-banner-text">
                  International recruitment for companies hiring pivotal talent. Private
                  coaching for leaders and professionals navigating pivotal change.
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
                  10+ years in international recruitment • Thousands of career
                  conversations • Across borders and cultures
                </p>
              </div>
              <div className="button-con">
                <div className="no-srink-btn">
                  <Link href="/recruitment" className="primary-button w-button">
                    I need to hire
                  </Link>
                </div>
                <div className="link-wrap">
                  <Link
                    href="/coaching"
                    className="underline-link-container w-inline-block"
                  >
                    <div>I am considering change</div>
                    <div className="hover-line">
                      <div className="hover-fill-line"></div>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/6564e2f94f64a387443d7e9f_Vector%206.webp"
                      loading="lazy"
                      alt="Arrow"
                    />
                  </Link>
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
            src="/images/jana-affum-hero.png"
            alt="Jana Affum - International Recruiter & Career Coach"
            loading="eager"
          />
        </div>
      </div>

      {/* Text-only Trust Strip */}
      <div
        className="social-proof-strip"
        style={{
          background: '#FAF7F0',
          border: '1px solid rgba(211,175,101,0.2)',
          borderRadius: '16px',
          padding: '22px 20px',
          marginTop: '24px',
        }}
      >
        <div className="base-container w-container" style={{ textAlign: 'center' }}>
          <div style={{ marginBottom: '14px' }}>
            <span
              style={{
                fontSize: 'var(--t-label)',
                fontWeight: 700,
                color: 'var(--gold-deep)',
                textTransform: 'uppercase',
                letterSpacing: 'var(--ls-label)',
              }}
            >
              EXPERIENCE WITH GLOBAL ENTERPRISES &amp; HIRING PARTNERS
            </span>
          </div>
          <LogoMarquee />
          <p
            style={{
              fontSize: '13px',
              color: 'var(--par-color)',
              margin: '8px auto 0 auto',
              maxWidth: '640px',
              lineHeight: 1.5,
              fontWeight: 400,
            }}
          >
            Direct employment, advisory, and international agency mandates across Europe, North
            America, Australia, and Africa. Conversations in Czech or English.
          </p>
        </div>
      </div>
    </div>
  );
}
