import React from 'react';

const testimonials = [
  {
    name: 'George Bakkeren',
    role: 'Founder & Owner, Deliver-IT Switzerland',
    image: '/images/testimonials/george-bakkeren.jpg',
    quote:
      'Jana combines professionalism with genuine care for both clients and candidates. She is highly proactive, communicates clearly, and always follows through. I highly recommend her services.',
  },
  {
    name: 'Zoltan Erdely',
    role: 'Senior NetDevOps Engineer',
    image: '/images/testimonials/zoltan-erdely.png',
    quote:
      'Jana was instrumental in helping me secure my new role. She acted as a true career partner and followed up after every interview stage. I cannot recommend Jana highly enough.',
  },
  {
    name: 'Danica Miller',
    role: 'Global Sr. Manager TA, STADA',
    image: '/images/testimonials/danica-miller.png',
    quote:
      'You are one of our LinkedIn Superusers! Active for 158 days, viewed 1,394 profiles, sent 1,113 InMails. These numbers illustrate your dedication to finding the right talent.',
  },
  {
    name: 'Obinna Stanley Okpara',
    role: 'Candidate & IT Professional',
    image: '/images/testimonials/obinna-okpara.png',
    quote:
      'It is a blessing to work with recruiters that understand that updates are always helpful. Negative or positive. Thanks again, Jana.',
  },
  {
    name: 'Brian S. Piper',
    role: 'Executive Client',
    image: '/images/testimonials/brian-piper.jpg',
    quote:
      'Jana rocks! She is both intellectually sound and passionate about her work. Also she is humble and respectful of others, a person I highly respect and recommend.',
  },
];

export default function Proof() {
  return (
    <section id="proof" className="section-reviews">
      <div className="base-container w-container">
        <div className="section-title-wrap large">
          <h2 id="client-stories" className="h2-hero-title-white">
            <span className="h2-span light">Real partnerships:</span> What clients and
            candidates say
          </h2>
          <p className="item-description-white">
            Authentic references from founders, senior engineers, and talent leaders across
            Europe and Switzerland.
          </p>
        </div>

        {/* Case Study: Senior Infrastructure Candidate */}
        <div
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(211,175,101,0.2)',
            borderRadius: '16px',
            padding: '40px 36px',
            maxWidth: '720px',
            margin: '0 auto 48px auto',
          }}
        >
          <div
            className="case-study-badge"
            style={{ color: 'var(--primary)', marginBottom: '14px' }}
          >
            Case Study
          </div>
          <h3
            style={{
              fontSize: 'var(--t-subhead)',
              lineHeight: 'var(--lh-head)',
              color: '#fff',
              marginBottom: '14px',
            }}
          >
            Senior infrastructure candidate in a multi-stage international process
          </h3>
          <p
            style={{
              fontSize: 'var(--t-body)',
              lineHeight: 'var(--lh-body)',
              color: 'rgba(255,255,255,0.8)',
              maxWidth: 'var(--measure-wide)',
            }}
          >
            A senior infrastructure specialist entered a multi-round international selection
            process. Through consistent feedback and structured preparation at every stage,
            Jana prevented the uncertainty that typically causes strong candidates to
            disengage. The result: a confident candidate, a decisive hiring committee, and a
            placement that held.
          </p>
        </div>
      </div>

      {/* Row: Testimonials infinite marquee */}
      <div className="reviews-loop-container" style={{ opacity: 1 }}>
        <div className="loop-review-wrap">
          <div className="loop-wrap">
            {testimonials.map((item, idx) => (
              <div className="loop-review-item" key={idx}>
                <div className="w-layout-grid grid-blog">
                  <div className="border-wrapper">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      loading="lazy"
                      alt={item.name}
                      className="image-avatar"
                    />
                  </div>
                  <div className="block-flex">
                    <h4 className="name-avatar">{item.name}</h4>
                    <p className="profession-avatar">{item.role}</p>
                  </div>
                </div>
                <p className="review-white">&ldquo;{item.quote}&rdquo;</p>
              </div>
            ))}
          </div>

          {/* Duplicate for seamless infinite loop */}
          <div className="loop-wrap" aria-hidden="true">
            {testimonials.map((item, idx) => (
              <div className="loop-review-item" key={`dup-${idx}`}>
                <div className="w-layout-grid grid-blog">
                  <div className="border-wrapper">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      loading="lazy"
                      alt={item.name}
                      className="image-avatar"
                    />
                  </div>
                  <div className="block-flex">
                    <h4 className="name-avatar">{item.name}</h4>
                    <p className="profession-avatar">{item.role}</p>
                  </div>
                </div>
                <p className="review-white">&ldquo;{item.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Post-Proof CTA Band */}
      <div className="proof-cta-band" style={{ padding: '60px 0 0 0' }}>
        <div className="base-container w-container">
          <div className="proof-cta">
            <p className="proof-cta-text">
              Ready to start a conversation? Twenty minutes, no cost, no obligation.
            </p>
            <a href="#booking" className="primary-button w-button">
              Book a 20-minute conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
