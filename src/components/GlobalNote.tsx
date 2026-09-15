import React from 'react';

export default function GlobalNote() {
  return (
    <div
      id="global"
      className="section"
      style={{ padding: '60px 0', borderTop: '1px solid rgba(211,175,101,0.15)' }}
    >
      <div className="base-container w-container">
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <div
            style={{
              fontSize: 'var(--t-label)',
              fontWeight: 700,
              color: 'var(--gold-deep)',
              textTransform: 'uppercase',
              letterSpacing: 'var(--ls-label)',
              marginBottom: '16px',
              textAlign: 'center',
            }}
          >
            Global Reach &amp; Social Impact
          </div>
          <p
            style={{
              fontSize: 'var(--t-body)',
              lineHeight: 'var(--lh-body)',
              color: 'var(--par-color)',
              textAlign: 'center',
              marginBottom: '16px',
            }}
          >
            Beyond recruitment and coaching, Jana is open to selected international
            partnerships where people, education, opportunity, and cross-cultural
            collaboration meet. This includes long-term support for children&apos;s
            welfare and education projects in Ghana, a school-building initiative in Peru,
            and work at the intersection of diplomacy and international development.
          </p>
          <p
            style={{
              fontSize: 'var(--t-body)',
              lineHeight: 'var(--lh-body)',
              color: 'var(--par-color)',
              textAlign: 'center',
              margin: 0,
            }}
          >
            All proceeds from the print edition of her book, <em>AI Meets Recruitment</em>,
            directly support the education and welfare of a child in Ghana.
          </p>
        </div>
      </div>
    </div>
  );
}
