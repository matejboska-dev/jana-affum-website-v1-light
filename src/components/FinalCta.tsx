'use client';

import React, { useState } from 'react';

export default function FinalCta() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
    language: 'English',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // For now, mailto fallback — will be replaced by /api/contact endpoint
    const subject = encodeURIComponent(
      `Website inquiry: ${formData.topic || 'General'}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.topic}\nPreferred language: ${formData.language}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:janaaffum@gmail.com?subject=${subject}&body=${body}`;

    setSending(false);
    setSubmitted(true);
  };

  return (
    <div id="booking" className="section-final-cta">
      <div className="base-container w-container">
        <div className="final-cta-card" style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div
            className="case-study-badge"
            style={{ color: 'var(--primary)', marginBottom: '12px' }}
          >
            Start a private conversation
          </div>
          <h2 className="final-cta-title">
            Let&apos;s find out if we&apos;re{' '}
            <span className="h2-span" style={{ color: 'var(--primary)', fontStyle: 'italic' }}>
              a natural fit.
            </span>
          </h2>
          <p className="final-cta-sub" style={{ maxWidth: '580px', margin: '0 auto 40px auto' }}>
            Twenty minutes, no cost, no pitch. Whether you are hiring or navigating a
            personal crossroads, the first step is a straightforward conversation.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="final-cta-form"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
                maxWidth: '640px',
                margin: '0 auto',
              }}
            >
              <div style={{ gridColumn: '1 / 2' }}>
                <label
                  htmlFor="fc-name"
                  style={{
                    display: 'block',
                    fontSize: 'var(--t-meta)',
                    fontWeight: 600,
                    color: 'var(--par-color)',
                    marginBottom: '6px',
                  }}
                >
                  Name
                </label>
                <input
                  id="fc-name"
                  name="name"
                  type="text"
                  required
                  className="form-input w-input"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '8px',
                    border: '1px solid rgba(36,30,20,0.18)',
                    fontSize: 'var(--t-body)',
                    background: '#fff',
                  }}
                />
              </div>

              <div style={{ gridColumn: '2 / 3' }}>
                <label
                  htmlFor="fc-email"
                  style={{
                    display: 'block',
                    fontSize: 'var(--t-meta)',
                    fontWeight: 600,
                    color: 'var(--par-color)',
                    marginBottom: '6px',
                  }}
                >
                  E-mail
                </label>
                <input
                  id="fc-email"
                  name="email"
                  type="email"
                  required
                  className="form-input w-input"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '8px',
                    border: '1px solid rgba(36,30,20,0.18)',
                    fontSize: 'var(--t-body)',
                    background: '#fff',
                  }}
                />
              </div>

              <div style={{ gridColumn: '1 / 2' }}>
                <label
                  htmlFor="fc-topic"
                  style={{
                    display: 'block',
                    fontSize: 'var(--t-meta)',
                    fontWeight: 600,
                    color: 'var(--par-color)',
                    marginBottom: '6px',
                  }}
                >
                  I would like to discuss
                </label>
                <select
                  id="fc-topic"
                  name="topic"
                  required
                  className="form-input w-input"
                  value={formData.topic}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '8px',
                    border: '1px solid rgba(36,30,20,0.18)',
                    fontSize: 'var(--t-body)',
                    background: '#fff',
                    appearance: 'auto',
                  }}
                >
                  <option value="" disabled>
                    Select a topic…
                  </option>
                  <option value="Hiring">Hiring</option>
                  <option value="Private Coaching">Private Coaching</option>
                  <option value="Partnership">Partnership</option>
                </select>
              </div>

              <div style={{ gridColumn: '2 / 3' }}>
                <label
                  htmlFor="fc-language"
                  style={{
                    display: 'block',
                    fontSize: 'var(--t-meta)',
                    fontWeight: 600,
                    color: 'var(--par-color)',
                    marginBottom: '6px',
                  }}
                >
                  Preferred language
                </label>
                <select
                  id="fc-language"
                  name="language"
                  className="form-input w-input"
                  value={formData.language}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '8px',
                    border: '1px solid rgba(36,30,20,0.18)',
                    fontSize: 'var(--t-body)',
                    background: '#fff',
                    appearance: 'auto',
                  }}
                >
                  <option value="English">English</option>
                  <option value="Czech">Czech</option>
                </select>
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <label
                  htmlFor="fc-message"
                  style={{
                    display: 'block',
                    fontSize: 'var(--t-meta)',
                    fontWeight: 600,
                    color: 'var(--par-color)',
                    marginBottom: '6px',
                  }}
                >
                  What would make this conversation valuable for you?
                </label>
                <textarea
                  id="fc-message"
                  name="message"
                  className="form-input w-input"
                  rows={3}
                  placeholder="A sentence or two is enough…"
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '8px',
                    border: '1px solid rgba(36,30,20,0.18)',
                    fontSize: 'var(--t-body)',
                    background: '#fff',
                    resize: 'vertical',
                  }}
                />
              </div>

              <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginTop: '8px' }}>
                <button
                  type="submit"
                  className="primary-button w-button"
                  disabled={sending}
                  style={{ fontSize: '17px', padding: '16px 40px' }}
                >
                  {sending ? 'Sending…' : 'Send & book a 20-minute conversation'}
                </button>
              </div>
            </form>
          ) : (
            <div
              style={{
                textAlign: 'center',
                padding: '32px',
                background: 'rgba(34,139,34,0.08)',
                borderRadius: '12px',
                maxWidth: '540px',
                margin: '0 auto',
              }}
            >
              <p
                style={{
                  fontSize: 'var(--t-body)',
                  fontWeight: 600,
                  color: '#2e7d32',
                  marginBottom: '8px',
                }}
              >
                ✓ Thank you! Your message is on its way.
              </p>
              <p style={{ fontSize: 'var(--t-meta)', color: 'var(--par-color)' }}>
                Jana will respond within one working day.
              </p>
            </div>
          )}
          <div
            style={{
              marginTop: '32px',
              borderTop: '1px solid rgba(36,30,20,0.1)',
              paddingTop: '24px',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontSize: 'var(--t-meta)',
                color: 'var(--par-color)',
                marginBottom: '12px',
                fontWeight: 500,
              }}
            >
              Prefer to choose a time directly?
            </p>
            <a
              href="https://calendly.com/janaaffum"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-link-container w-inline-block"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--gold-deep)',
                fontWeight: 700,
                fontSize: 'var(--t-ui)',
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>Schedule directly via Calendly (20 min free)</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <p className="final-cta-guarantee" style={{ marginTop: '24px' }}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <span>20 minutes &bull; Zero sales pressure &bull; Confidential &amp; direct</span>
          </p>
        </div>
      </div>
    </div>
  );
}
