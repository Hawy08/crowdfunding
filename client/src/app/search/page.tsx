"use client";

import { useSearchParams } from 'next/navigation';
import { useCampaigns } from '@/hooks/useCampaigns';
import CampaignCard from '@/components/campaignCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useState, useEffect } from 'react';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const { data: campaigns, isLoading, error } = useCampaigns();
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);

  useEffect(() => {
    if (campaigns && query) {
      const filtered = campaigns.filter((campaign) => {
        const searchTerm = query.toLowerCase();
        return (
          campaign.title?.toLowerCase().includes(searchTerm) ||
          campaign.description?.toLowerCase().includes(searchTerm) ||
          campaign.category?.toLowerCase().includes(searchTerm) ||
          campaign.owner?.toLowerCase().includes(searchTerm)
        );
      });
      setFilteredCampaigns(filtered);
    } else if (campaigns) {
      setFilteredCampaigns(campaigns);
    }
  }, [campaigns, query]);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Error loading campaigns: {error instanceof Error ? error.message : String(error)}</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Search Results
          </h1>
          {query && (
            <p className="text-gray-600">
              Showing results for: <span className="font-semibold">"{query}"</span>
            </p>
          )}
          <p className="text-gray-600 mt-2">
            Found {filteredCampaigns.length} campaign{filteredCampaigns.length !== 1 ? 's' : ''}
          </p>
        </div>

        {filteredCampaigns.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCampaigns.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-4">
              {query ? `No campaigns found for "${query}"` : 'No campaigns available'}
            </div>
            <p className="text-gray-400">
              Try adjusting your search terms or browse all campaigns
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 