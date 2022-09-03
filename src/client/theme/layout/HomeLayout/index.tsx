import React from 'react';
import { HomeHero } from '../../components/HomeHero/index';
import { HomeFeature } from '../../components/HomeFeatures/index';
import { Footer } from '../../components/Footer/index';

export function HomeLayout() {
  return (
    <div>
      <HomeHero />
      <HomeFeature features={[]} />
      <Footer />
    </div>
  );
}
