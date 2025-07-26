import { useCampaigns } from '@/hooks/useCampaigns';
import CampaignCard from './campaignCard';
import LoadingSpinner from './LoadingSpinner';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CampaignList() {
  const { data: campaigns, isLoading, error } = useCampaigns();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Error loading campaigns: {error instanceof Error ? error.message : String(error)}</div>;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="w-full px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Trending <span className="underline">Pamoja</span> fundraisers
      </h2>
      
      <div className="max-w-6xl mx-auto">
        {campaigns && campaigns.length > 0 ? (
          <Slider {...settings}>
            {campaigns.map((campaign) => (
              <div key={campaign.id} className="px-2">
                <CampaignCard campaign={campaign} />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="text-center text-gray-500">No campaigns found.</div>
        )}
      </div>
    </div>
  );
}
