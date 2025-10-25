import React, { lazy, Suspense } from 'react';
import IntroSection from '../components/sections/IntroSection';
import FeatureSection from '../components/sections/FeatureSection';
import GallerySection from '../components/sections/GallerySection';
import FAQSection from '../components/sections/FAQSection';

const Navbar = lazy(() => import('../components/layout/Navbar'));
const HeroSection = lazy(() => import('../components/sections/HeroSection'));

function MainPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen bg-black text-white text-xl font-semibold animate-pulse">
          Loading...
        </div>
      }
    >
     

      <Navbar />
      <HeroSection />
      <IntroSection/>
      <FeatureSection/>
      <GallerySection/>
      <FAQSection/>
    </Suspense>
  );
}

export default MainPage;
