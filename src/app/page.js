'use client'

import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ProjectsGrid from './components/ProjectsGrid';
import Testimonials from './components/Testimonials';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

export default function SaasProduct() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProjectsGrid />
        <Testimonials />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}