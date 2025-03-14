import { ethers } from "ethers";
// Replace with your deployed contract addresses
const factoryContractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
const batchContractABI = require("../abi/Batch.json"); // ABI of Batch contract
const factoryABI = require("../abi/BatchFactory.json"); // ABI of BatchFactory

// Initialize BrowserProvider and get the signer
const provider = new ethers.BrowserProvider(window.ethereum);
const signer = await provider.getSigner();  // Make sure to await this

// Connect to the factory contract
const factoryContract = new ethers.Contract(factoryContractAddress, factoryABI, signer);

export async function getBatchContracts() {
    try {
        const batchAddresses = await factoryContract.getTotalBatches();
        console.log("Batch Contracts:", batchAddresses);
        return batchAddresses;
    } catch (error) {
        console.error("Error getting batch contracts:", error);
    }
}

export async function getBatchUpdates(batchAddress) {
    try {
        const batchContract = new ethers.Contract(batchAddress, batchContractABI, provider); // Use provider here for read-only functions
        const updates = await batchContract.getAllUpdates();
        console.log("Batch Updates:", updates);
        return updates;
    } catch (error) {
        console.error("Error getting batch updates:", error);
    }
}