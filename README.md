
# 🪙 Crowdfunding DApp

This is a full-stack decentralized crowdfunding application. It includes:

- A **Vite-powered frontend** in React
- A **Hardhat-based Ethereum smart contract** backend
- All services are containerized using **Docker** for easy development

---

## 🚀 Quick Start

### 🧰 Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Git](https://git-scm.com/)

---

## 🐳 Running the Project (Dev Environment)

Clone the project:

```bash
git clone https://github.com/Hawy08/crowdfunding.git
cd crowdfunding
```
## Build and start the containers:

```bash
docker compose up --build
```
Then open your browser and visit:

Frontend (React + Vite): http://localhost:5173

Hardhat Local Node (RPC): http://localhost:8545

## 🧪 Inside the Containers
### Access the frontend container:
```bash
docker exec -it crowdfunding-client-1 bash
```
### Access the smart contract container:
```bash
docker exec -it crowdfunding-web3-1 bash
```

### 🧱 Folder Structure
```bash
crowdfunding/
├── client/         # Frontend React App (Vite)
├── crowdweb3/      # Hardhat Smart Contracts
├── docker/         # Optional shared docker setup (e.g., certs)
├── docker-compose.yml
└── README.md
```
