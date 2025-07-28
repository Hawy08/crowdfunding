"use client";
// pages/create-campaign.tsx
import { useState } from "react";
import { useContract, useContractWrite, useAddress } from "@thirdweb-dev/react";
import { ethers } from "ethers";

export default function CreateCampaign() {
  const contractAddress = "0x414Be101d6eb888C1bE13fFc0Ec7D8025735ad10";
  const { contract } = useContract(contractAddress);
  const address = useAddress();

  const { mutateAsync: createCampaign, status } = useContractWrite(
    contract,
    "createCampaign"
  );

  const contractLoading = !contract;
  const mutationLoading = status === "loading";
  const isLoading = contractLoading || mutationLoading;

  const [form, setForm] = useState({
    id: "",
    title: "",
    description: "",
    image: "",
    target: "",
    deadline: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!contract) {
      alert("Contract not loaded yet. Please try again in a moment.");
      return;
    }
    try {
      const deadlineTimestamp = new Date(form.deadline).getTime();

      const data = await createCampaign({
        args: [
          Number(form.id),           
          form.title,                
          form.description,          
          ethers.utils.parseEther(form.target), 
          deadlineTimestamp,        
          form.image,               
        ],
      });

      console.log("Success:", data);
      alert("Campaign created successfully!");
      setForm({
        id: "",
        title: "",
        description: "",
        image: "",
        target: "",
        deadline: "",
      });
    } catch (err) {
      console.error("Error:", err);
      const errorMessage =
        err && typeof err === "object" && "message" in err
          ? (err as { message: string }).message
          : String(err);
      alert("Error creating campaign: " + errorMessage);
    }
  };

  console.log("contract:", contract);
  console.log("status:", status);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-8">
      <div className="max-w-2xl w-full mx-auto px-6">
        <div className="bg-white rounded-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-green-600 mb-4">Pamoja</h1>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Campaign</h2>
            <p className="text-gray-600">Fill in the details to start your fundraising campaign</p>
          </div>

          <form className="space-y-3">
            <div className="flex items-center space-x-2 p-1 border border-black">
              <label className="block text-sm font-bold text-gray-700 w-1/3">Campaign ID</label>
              <input
                type="number"
                name="id"
                placeholder="Enter campaign ID"
                value={form.id}
                onChange={handleChange}
                className="flex-1 px-2 py-1 focus:outline-none focus:ring-0"
              />
            </div>

            <div className="flex items-center space-x-2 p-1 border border-black">
              <label className="block text-sm font-bold text-gray-700 w-1/3">Campaign Title</label>
              <input
                type="text"
                name="title"
                placeholder="Enter campaign title"
                value={form.title}
                onChange={handleChange}
                className="flex-1 px-2 py-1 focus:outline-none focus:ring-0"
              />
            </div>

            <div className="flex items-start space-x-2 p-1 border border-black">
              <label className="block text-sm font-bold text-gray-700 w-1/3 pt-1">Description</label>
              <textarea
                name="description"
                placeholder="Describe your campaign"
                value={form.description}
                onChange={handleChange}
                rows={3}
                className="flex-1 px-2 py-1 focus:outline-none focus:ring-0 resize-none"
              />
            </div>

            <div className="flex items-center space-x-2 p-1 border border-black">
              <label className="block text-sm font-bold text-gray-700 w-1/3">Image URL</label>
              <input
                type="text"
                name="image"
                placeholder="Enter image URL"
                value={form.image}
                onChange={handleChange}
                className="flex-1 px-2 py-1 focus:outline-none focus:ring-0"
              />
            </div>

            <div className="flex items-center space-x-2 p-1 border border-black">
              <label className="block text-sm font-bold text-gray-700 w-1/3">Target Amount (ETH)</label>
              <input
                type="number"
                name="target"
                placeholder="Enter target amount"
                value={form.target}
                onChange={handleChange}
                className="flex-1 px-2 py-1 focus:outline-none focus:ring-0"
              />
            </div>

            <div className="flex items-center space-x-2 p-1 border border-black">
              <label className="block text-sm font-bold text-gray-700 w-1/3">Deadline</label>
              <input
                type="date"
                name="deadline"
                value={form.deadline}
                onChange={handleChange}
                className="flex-1 px-2 py-1 focus:outline-none focus:ring-0"
              />
            </div>

            <button 
              onClick={handleSubmit} 
              disabled={isLoading}
              className="w-full bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {contractLoading
                ? "Loading contract..."
                : mutationLoading
                ? "Creating..."
                : "Create Campaign"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
