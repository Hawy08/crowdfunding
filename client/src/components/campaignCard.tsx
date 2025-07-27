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
  const raised = 800;
  const target = 10000;
  const percent = Math.round((raised / target) * 100);
  const initiator = campaign.creator
    ? campaign.creator.slice(0, 6) + '...' + campaign.creator.slice(-4)
    : '';

  console.log("raised:", raised, typeof raised, "target:", target, typeof target);

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
      <div className="absolute inset-0 bg-white bg-opacity-5" />
      {/* Card content */}
      <div className="relative z-20 flex flex-col h-full">
        {/* Title and initiator */}
        <div className="p-6 pb-2">
          <div className=" bg-opacity-60 rounded-lg px-4 py-2 inline-block">
            <h2 className="text-2xl font-bold mb-1">{campaign.title}</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-gray-200">Initiated By:</span>
              <input
                type="text"
                value={campaign.creator ? `${campaign.creator.slice(0, 6)}...${campaign.creator.slice(-4)}` : ''}
                readOnly
                className="bg-transparent text-xs text-gray-200 border-none p-0 m-0 focus:outline-none w-[120px] cursor-pointer select-all"
                onFocus={e => e.target.select()}
              />
              <button
                className="text-green-600 hover:text-green-800 text-xs px-1 py-0.5 border border-green-600 rounded transition flex items-center"
                onClick={() => navigator.clipboard.writeText(campaign.creator)}
                title="Copy address"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="inline-block align-middle">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <rect x="3" y="3" width="13" height="13" rx="2" ry="2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Main content */}
        <div className="flex-1 flex flex-col justify-end">
          <div className="bg-white bg-opacity-90 rounded-xl p-3 m-10 mt-40 mb-4">
            <div className="flex justify-between items-end mb-2">
              <div>
                <div className="text-lg font-semibold text-green-600">
                  ${raised.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </div>
                <div className="text-xs text-gray-500">Raised so far</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold text-green-600">
                  ${target.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </div>
                <div className="text-xs text-gray-500">Target</div>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${percent}%` }}></div>
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