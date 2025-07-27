import React from "react";

const steps = [
  {
    title: "Connect your wallet",
    description: "Connect your Web3 wallet to get started with blockchain-powered fundraising.",
  },
  {
    title: "Create your fundraiser",
    description: "It'll take only 2 minutes. Just fill out our registration form.",
  },
  {
    title: "Share your fundraiser with your supporters",
    description: "Share your fundraiser with your friends, family and online community through Whatsapp, FB or SMS",
  },
  {
    title: "Manage your fundraiser",
    description: "View your progress, add treasurers, accept mobile money and card donations and more.",
  },
];

export default function StepsToCreate() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">4 Easy Steps To Fundraise</h2>
        
        <div className="flex flex-col space-y-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-start">
              {/* Step number and connector */}
              <div className="flex flex-col items-center mr-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-600 text-white text-xl font-bold">
                  {idx + 1}
                </div>
                {idx < steps.length - 1 && (
                  <div className="w-0.5 h-16 bg-green-600 mt-2"></div>
                )}
              </div>
              
              {/* Step content */}
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-semibold mb-2 text-gray-700">{step.title}</h3>
                <p className="text-gray-500 text-base">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <button className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300">
            Start a Fundraiser
          </button>
          <button className="px-8 py-4 border border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-all duration-300">
            Watch Video
          </button>
        </div>
      </div>
    </section>
  );
} 