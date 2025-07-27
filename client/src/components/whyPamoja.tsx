import React from "react";

const features = [
  {
    title: "Transparency",
    description: "Every transaction is recorded on the blockchain, ensuring complete transparency and trust for all donors and fundraisers.",
    icon: "🔍",
  },
  {
    title: "Security",
    description: "Built on blockchain technology with smart contracts, providing secure and tamper-proof fundraising campaigns.",
    icon: "🔒",
  },
  {
    title: "Community Impact",
    description: "Empowering communities to create real change through decentralized fundraising and collective action.",
    icon: "🤝",
  },
  {
    title: "Low Fees",
    description: "Minimal platform fees ensure more of your donations go directly to the cause, maximizing impact.",
    icon: "💰",
  },
  {
    title: "Global Reach",
    description: "Connect with supporters worldwide through our decentralized platform, breaking geographical barriers.",
    icon: "🌍",
  },
  {
    title: "Instant Verification",
    description: "Smart contracts automatically verify and process donations, reducing delays and increasing efficiency.",
    icon: "⚡",
  },
];

export default function WhyPamoja() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Pamoja?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of fundraising with blockchain-powered transparency, security, and community impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 