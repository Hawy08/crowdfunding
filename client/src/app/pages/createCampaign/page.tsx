"use client";
// pages/create-campaign.tsx
import { useState } from "react";
import { useContract, useContractWrite, ConnectWallet, useAddress } from "@thirdweb-dev/react";
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
    <div style={{ padding: "2rem" }}>
      <ConnectWallet />
      <h1>Create Campaign</h1>

      <input
        type="number"
        name="id"
        placeholder="Campaign ID"
        value={form.id}
        onChange={handleChange}
        style={{ display: "block", margin: "1rem 0", padding: "0.5rem" }}
      />
      <input
        type="text"
        name="title"
        placeholder="Campaign Title"
        value={form.title}
        onChange={handleChange}
        style={{ display: "block", margin: "1rem 0", padding: "0.5rem" }}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        style={{
          display: "block",
          margin: "1rem 0",
          padding: "0.5rem",
          height: "100px",
        }}
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={form.image}
        onChange={handleChange}
        style={{ display: "block", margin: "1rem 0", padding: "0.5rem" }}
      />
      <input
        type="number"
        name="target"
        placeholder="Target Amount (ETH)"
        value={form.target}
        onChange={handleChange}
        style={{ display: "block", margin: "1rem 0", padding: "0.5rem" }}
      />
      <input
        type="date"
        name="deadline"
        value={form.deadline}
        onChange={handleChange}
        style={{ display: "block", margin: "1rem 0", padding: "0.5rem" }}
      />

      <button onClick={handleSubmit} disabled={isLoading}>
        {contractLoading
          ? "Loading contract..."
          : mutationLoading
          ? "Creating..."
          : "Create Campaign"}
      </button>
    </div>
  );
}
