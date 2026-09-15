import React from 'react';
import Link from 'next/link';

export default function Signposts() {
  return (
    <div id="services" className="section" style={{ padding: '96px 0' }}>
      <div className="base-container w-container">
        <div className="section-title-wrap">
          <h2 className="flex-title" style={{ justifyContent: 'center' }}>
            <span className="h2-span">Two paths,</span> one trusted partner
          </h2>
          <p
            className="item-description-gray"
            style={{ margin: '12px auto 0 auto', textAlign: 'center' }}
          >
            Whether you are building a team or rethinking your own direction, the work begins with one honest conversation.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '32px',
            flexWrap: 'wrap',
          }}
        >
          {/* Card 1: For Companies */}
          <div
            style={{
              backgroundColor: '#FAF7F0',
              border: '1px solid rgba(211,175,101,0.25)',
              borderRadius: '20px',
              padding: '48px 40px',
              flex: '1 1 420px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              className="case-study-badge"
              style={{ alignSelf: 'flex-start', marginBottom: '16px' }}
            >
              International Recruitment & Executive Search
            </div>
            <h3
              style={{
                fontSize: 'var(--t-subhead)',
                lineHeight: 'var(--lh-head)',
                color: 'var(--text-dark)',
                marginTop: 0,
                marginBottom: '16px',
              }}
            >
              Find and assess hard-to-reach talent with greater depth
            </h3>
            <p
              style={{
                fontSize: 'var(--t-body)',
                lineHeight: 'var(--lh-body)',
                color: 'var(--par-color)',
                marginBottom: '32px',
              }}
            >
              A boutique, coaching-informed recruitment practice for companies hiring pivotal technology and leadership roles across Europe and beyond. Fewer candidates, deeper insight, better decisions.
            </p>
            <div className="link-wrap" style={{ marginTop: 'auto' }}>
              <Link
                href="/recruitment"
                className="underline-link-container w-inline-block"
              >
                <div style={{ fontWeight: 700, color: 'var(--span-text)' }}>
                  Explore recruitment
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
              </Link>
            </div>
          </div>

          {/* Card 2: For Individuals */}
          <div
            style={{
              backgroundColor: 'var(--text-dark)',
              border: '1px solid rgba(211,175,101,0.25)',
              borderRadius: '20px',
              padding: '48px 40px',
              flex: '1 1 420px',
              color: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              className="case-study-badge"
              style={{
                color: 'var(--primary)',
                alignSelf: 'flex-start',
                marginBottom: '16px',
              }}
            >
              Private Coaching & Thinking Partnership
            </div>
            <h3
              style={{
                fontSize: 'var(--t-subhead)',
                lineHeight: 'var(--lh-head)',
                color: '#FFFFFF',
                marginTop: 0,
                marginBottom: '16px',
              }}
            >
              Gain a discreet thinking partner for a pivotal decision
            </h3>
            <p
              style={{
                fontSize: 'var(--t-body)',
                lineHeight: 'var(--lh-body)',
                color: 'rgba(255, 255, 255, 0.8)',
                marginBottom: '32px',
              }}
            >
              For leaders and professionals navigating career transitions, cross-cultural moves, or moments where the familiar path no longer fits. A confidential space to think out loud with someone who knows how the market works.
            </p>
            <div className="link-wrap" style={{ marginTop: 'auto' }}>
              <Link
                href="/coaching"
                className="underline-link-container w-inline-block"
              >
                <div style={{ fontWeight: 700, color: 'var(--primary)' }}>
                  Explore coaching
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
