"use client";

import CampaignList from '@/components/campaignList';
import HomeBanner from '@/components/homeBanner';

export default function HomePage() {
  return (
    <div>
      <HomeBanner />
      <CampaignList />
    </div>
  );
}
