"use client";
// pages/create-campaign.tsx
import { useState } from "react";
import { useContract, useContractWrite, ConnectWallet } from "@thirdweb-dev/react";

export default function CreateCampaign() {
  const contractAddress = "0x7104Ffa2e8547C37336AE3a089169B9efb5F7f08"; // Your contract address
  const { contract } = useContract(contractAddress);

  const { mutateAsync: createCampaign, status } = useContractWrite(
    contract,
    "createCampaign" // Replace with your actual contract method
  );
  const isLoading = status === "loading";

  const [form, setForm] = useState({
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
    try {
      const deadlineTimestamp = new Date(form.deadline).getTime();

      const data = await createCampaign({
        args: [
          // Replace with wallet address dynamically if needed
          "0xYourWalletAddress", // 👈 ideally use connected wallet address
          form.title,
          form.description,
          form.image,
          Number(form.target),
          deadlineTimestamp,
        ],
      });

      console.log("Success:", data);
      alert("Campaign created successfully!");
    } catch (err) {
      console.error("Error:", err);
      alert("Error creating campaign");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <ConnectWallet />
      <h1>Create Campaign</h1>

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
        {isLoading ? "Creating..." : "Create Campaign"}
      </button>
    </div>
  );
}
