import React from 'react';

export default function Recognition() {
  return (
    <div id="the-difference" className="section radius-bottom" style={{ padding: '90px 0' }}>
      <div className="base-container w-container">
        <div className="section-title-wrap">
          <h2 id="you-need-greater-certainty">
            <span className="h2-span">You do not need more CVs.</span> You need greater certainty.
          </h2>
          <p className="item-description-gray" style={{ margin: '14px auto 0 auto', maxWidth: '720px' }}>
            The real cost of a wrong hire at senior level is not the recruitment fee. It is three
            months of salary, management time, lost momentum, and starting over.
          </p>
        </div>

        {/* Frustration Cards / Comparison Layout */}
        <div className="home-1-services">
          <div
            className="home-1-service-img"
            style={{ backgroundImage: "url('/images/jana-about.png')" }}
          ></div>

          <div className="home-1-services-text">
            {/* Card 1 */}
            <div className="item-wrapper-home-1">
              <div className="home-1-service-title">
                <div className="check-icon">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="h3-green-text">Flooded with irrelevant CVs</h3>
              </div>
              <p className="dark-text">
                Inbound applications and agency shortlists full of candidates who look right on
                paper but lack the depth, motivation, or cultural fit your team needs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="item-wrapper-home-1">
              <div className="home-1-service-title">
                <div className="check-icon">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="h3-green-text">Hidden candidate motivations</h3>
              </div>
              <p className="dark-text">
                The best people are not actively looking. When they do engage, surface-level
                interviews miss whether they are truly ready to move or just testing the market.
              </p>
            </div>

            {/* Card 3 */}
            <div className="item-wrapper-home-1">
              <div className="home-1-service-title">
                <div className="check-icon">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="h3-green-text">Slow decisions, lost candidates</h3>
              </div>
              <p className="dark-text">
                By the time your process reaches a decision, the candidate you wanted has accepted
                somewhere else. Speed and certainty win talent.
              </p>
            </div>
          </div>
        </div>

        {/* Cost Callout Box */}
        <div className="anti-pitch-box" style={{ marginTop: '48px' }}>
          <div className="anti-pitch-icon" aria-hidden="true">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div className="anti-pitch-text">
            <p style={{ margin: 0 }}>
              A bad senior hire at €120,000 per year costs at least €30,000 in direct losses —
              before you count recruitment fees, onboarding, and management time.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div
          style={{
            textAlign: 'center',
            marginTop: '44px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div className="link-wrap">
            <a href="#booking" className="underline-link-container w-inline-block">
              <div style={{ fontWeight: 700 }}>
                Let&apos;s discuss what is slowing your hiring down
              </div>
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
  );
}
