'use client'

import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PainPointsSolvedSection from './components/PainPointsSolvedSection';
import FeaturesSection from './components/FeaturesSection';
import ProjectsGrid from './components/ProjectsGrid';
import Testimonials from './components/Testimonials';
import BriefSection from './components/BriefSection';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';

export default function SaasProduct() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
         <SkillsSection />
        <PainPointsSolvedSection />
        <FeaturesSection />
        <ProjectsGrid />
        <Testimonials />
        <BriefSection />
      </main>
      <Footer />
    </>
  );
}