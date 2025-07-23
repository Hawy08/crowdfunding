import DonateButton from './donateButton';

type Campaign = {
  id: number;
  title: string;
  description: string;
  image: string;
  target: string;
  deadline: string;
  creator: string;
};

export default function CampaignCard({ campaign }: { campaign: Campaign }) {
  // Hardcoded for now
  const raised = 8000;
  const target = 10000;
  const percent = Math.round((raised / target) * 100);
  const initiator = campaign.creator
    ? campaign.creator.slice(0, 6) + '...' + campaign.creator.slice(-4)
    : '';

  return (
    <div className="relative rounded-xl shadow-lg overflow-hidden max-w-sm w-full mx-auto my-4">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${campaign.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white bg-opacity-5 z-10" />
      {/* Card content */}
      <div className="relative z-20 flex flex-col h-full">
        {/* Title and initiator */}
        <div className="p-6 pb-2">
          <div className="bg-black bg-opacity-60 rounded-lg px-4 py-2 inline-block">
            <h2 className="text-2xl font-bold text-white mb-1">{campaign.title}</h2>
            <p className="text-sm text-gray-200">Initiated By: {initiator}</p>
          </div>
        </div>
        {/* Main content */}
        <div className="flex-1 flex flex-col justify-end">
          <div className="bg-white bg-opacity-90 rounded-t-xl p-4">
            <div className="flex justify-between items-end mb-2">
              <div>
                <div className="text-lg font-semibold">${raised.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
                <div className="text-xs text-gray-500">Raised so far</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold">${target.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
                <div className="text-xs text-gray-500">Target</div>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div className="bg-red-400 h-2.5 rounded-full" style={{ width: `${percent}%` }}></div>
            </div>
            <div className="mb-4 text-gray-700 text-sm">
              {campaign.description || "No description provided."}
            </div>
            <div className="flex justify-center mt-4">
              <DonateButton onClick={() => alert('Donate!')} label="Send Donation" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
