const { ethers } = require("hardhat");

async function main() {
    // Deploy BatchFactory
    const BatchFactory = await ethers.getContractFactory("BatchFactory");
    const batchFactory = await BatchFactory.deploy();
    await batchFactory.waitForDeployment(); // <- Use `deployed()` instead of `waitForDeployment()`

    console.log("BatchFactory deployed to:", await batchFactory.getAddress());

    // test batch, creates first batch in the factory
    const validAddress = "0x0000000000000000000000000000000000000001";

    const batchDetails = [
        "123",
        "2025-03-13",
        "Brazil",
        "Arabica",
        "Light",
        "Wet"
    ];

    const participants = [
        validAddress, validAddress, validAddress, validAddress,
        validAddress, validAddress, validAddress, validAddress,
        validAddress
    ];

    const initialUpdate = [
        1000,
        "Brazil Farm",
        "Farmer",
        "Cultivation",
        "Harvesting",
        "In Progress",
        "Batch created",
        "Initial batch creation",
        Math.floor(Date.now() / 1000)
    ];

    const Batch = await ethers.getContractFactory("Batch");
    const batch = await Batch.deploy(batchDetails, participants, initialUpdate);
    await batch.waitForDeployment();

    console.log("Sample Batch deployed to:", await batch.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});