"use client";

export default function HomeBanner() {
  return (
    <div className="bg-gradient-to-br from-green-50 to-indigo-100 min-h-[600px] flex items-center justify-center">
      <div className="text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Fundraising
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Simple. Fast. Transparent.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300">
            Start a Fundraiser
          </button>
        </div>
        
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Find a Fundraiser..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
              Search
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">119,476</div>
            <div className="text-gray-600">Fundraising Campaigns Started</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">1,647,353</div>
            <div className="text-gray-600">Donors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">4.25%</div>
            <div className="text-gray-600">Platform Fee</div>
          </div>
        </div>
      </div>
    </div>
  );
} 