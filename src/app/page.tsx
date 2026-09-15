import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Recognition from '@/components/Recognition';
import Signposts from '@/components/Signposts';
import Proof from '@/components/Proof';
import WhyJana from '@/components/WhyJana';
import GlobalNote from '@/components/GlobalNote';
import Faq from '@/components/Faq';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Recognition />
      <Signposts />
      <Proof />
      <WhyJana />
      <GlobalNote />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
