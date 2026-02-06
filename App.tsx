import React from 'react';
import { Layout } from './components/Layout';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FounderLetter } from './components/FounderLetter';
import { ResultsDashboard } from './components/ResultsDashboard';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Creatives } from './components/Creatives';
import { CaseStudies } from './components/CaseStudies';
import { WhyChoose } from './components/WhyChoose';
import { Carousel } from './components/Carousel';
import { Testimonials } from './components/Testimonials';
import { LeadMagnet } from './components/LeadMagnet';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

// Divider Component for consistent spacing/styling
const Divider = () => (
  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#D1FE17]/20 to-transparent" />
);

function App() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Divider />
      
      <ResultsDashboard />
      <Divider />

      <CaseStudies />
      <Divider />

      <FounderLetter />
      <Divider />
      
      <WhyChoose />
      <Divider />
      
      <Services />
      <Divider />
      
      <Process />
      <Divider />

      <Creatives />
      <Divider />
      
      <Carousel />
      <Divider />
      
      <Testimonials />
      <Divider />
      
      <LeadMagnet />
      <Divider />
      
      <FAQ />
      <Footer />
    </Layout>
  );
}

export default App;