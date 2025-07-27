"use client";

import CampaignList from '@/components/campaignList';
import HomeBanner from '@/components/homeBanner';
import StepsToCreate from '@/components/stepsToCreate';
import WhyPamoja from '@/components/whyPamoja';
import FooterBanner from '@/components/footerBanner';

export default function HomePage() {
  return (
    <div>
      <HomeBanner />
      <CampaignList />
      <StepsToCreate />
      <WhyPamoja />
      <FooterBanner />
    </div>
  );
}
