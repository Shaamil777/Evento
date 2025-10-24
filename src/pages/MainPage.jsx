import React, { lazy, Suspense } from 'react';
import IntroSection from '../components/sections/IntroSection';

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
      
    </Suspense>
  );
}

export default MainPage;
