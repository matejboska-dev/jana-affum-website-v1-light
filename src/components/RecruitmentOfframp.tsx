import React from 'react';

export default function RecruitmentOfframp() {
  return (
    <div id="recruitment" className="section" style={{ padding: '90px 0' }}>
      <div className="base-container w-container">
        <div className="recruitment-offramp-card">
          <div className="recruitment-offramp-content">
            <div
              className="case-study-badge"
              style={{ color: 'var(--primary)', marginBottom: '12px' }}
            >
              Executive IT Recruitment
            </div>
            <h2 className="recruitment-offramp-title">
              Hiring specialized IT talent?{' '}
              <span className="h2-span" style={{ color: 'var(--primary)', fontStyle: 'italic' }}>
                Direct executive search
              </span>
            </h2>
            <p className="recruitment-offramp-desc">
              Alongside 1-on-1 career coaching, Jana leads a boutique international executive
              recruitment practice. With 10+ years placing engineering, cloud architecture, and
              tech leadership across Switzerland and Europe, we connect forward-thinking
              employers with vetted, high-impact talent.
            </p>
            <div className="link-wrap">
              <a
                href="mailto:jana@janaaffum.com?subject=IT%20Recruitment%20Inquiry"
                className="underline-link-container w-inline-block"
              >
                <div style={{ fontWeight: 700, color: 'var(--primary)' }}>
                  Inquire about a recruitment mandate
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
          <div className="recruitment-offramp-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/jana-recruitment-search.jpg"
              alt="Jana Affum - Executive IT Recruitment"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
