import { useCampaigns } from '@/hooks/useCampaigns';
import CampaignCard from './campaignCard';
import LoadingSpinner from './LoadingSpinner';

export default function CampaignList() {
  const { data: campaigns, isLoading, error } = useCampaigns();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Error loading campaigns: {error instanceof Error ? error.message : String(error)}</div>;

  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center max-w-6xl w-full">
        {campaigns && campaigns.length > 0 ? (
          campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))
        ) : (
          <div>No campaigns found.</div>
        )}
      </div>
    </div>
  );
}
