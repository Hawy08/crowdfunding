import React from 'react';

type DonateButtonProps = {
  onClick: () => void;
  loading?: boolean;
  label?: string;
};

export default function DonateButton({ onClick, loading = false, label = 'Donate' }: DonateButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition disabled:opacity-50"
    >
      {loading ? 'Processing...' : label}
    </button>
  );
}
