const { ethers } = require("hardhat");

async function main() {
    // Deploy BatchFactory
    const BatchFactory = await ethers.getContractFactory("BatchFactory");
    const batchFactory = await BatchFactory.deploy();
    await batchFactory.waitForDeployment(); // <- Use `deployed()` instead of `waitForDeployment()`

    console.log("BatchFactory deployed to:", await batchFactory.getAddress());

    // each address is on the hardhat node
    const participants = [
        "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", "0x70997970C51812dc3A010C7d01b50e0d17dc79C8", "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC", "0x90F79bf6EB2c4f870365E785982E1f101E93b906",
        "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65", "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc", "0x976EA74026E726554dB657fA54763abd0C3a0aa9", "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955",
        "0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f"
    ];

    // batch 1 details
    const batch_1_Details = [
        "SC-001-25",
        Math.floor(Date.now() / 1000),
        "Brazil",
        "Arabica",
        "Light",
        "Wet"
    ];

    const batch_1_initial_update = [
        756,
        "Brazil Farm",
        "Farmer",
        "N/A",
        "Cultivation",
        "Batch Created",
        "Initial batch creation",
        Math.floor(Date.now() / 1000)
    ];

    const Batch_1 = await ethers.getContractFactory("Batch");
    const batch_1 = await Batch_1.deploy(batch_1_Details, participants, batch_1_initial_update);
    await batch_1.waitForDeployment();

    console.log("Sample Batch deployed to:", await batch_1.getAddress());

    const batch_1_update_2 = await batch_1.updateBatch(
        752,
        "Brazil Farm",
        "Farmer",
        "N/A",
        "Harvesting",
        "All crops planted",
        "All went to plan",
    )

    const batch_1_update_3 = await batch_1.updateBatch(
        752,
        "Brazil Farm",
        "Harvestor",
        "Cultivation",
        "Processing",
        "Coffee beans collected",
        "All coffee beans collected and ready for the next stage",
    )

    const batch_1_update_4 = await batch_1.updateBatch(
        752,
        "Brazil Farm",
        "Processor",
        "Harvesting",
        "Drying",
        "Beans processed",
        "Dry/natural method used for enhanced flavour profile",
    )

    const batch_1_update_5 = await batch_1.updateBatch(
        752,
        "Brazil Farm",
        "Drying Specialist",
        "Processing",
        "Exporting",
        "Beans sun dried",
        "Beans reached the ideal moisture level for storage",
    )

    const batch_1_update_6 = await batch_1.updateBatch(
        752,
        "Brazil Farm",
        "Exporter",
        "Drying",
        "Roasting",
        "In transit",
        "Shipment has been dispatched and is en route to its destination",
    )

    const batch_1_update_7 = await batch_1.updateBatch(
        752,
        "London, UK",
        "Roaster",
        "Exporting",
        "Packaging",
        "Roasting complete",
        "Beans roasted to a light profile, preserving acidity and complexity",
    )

    const batch_1_update_8 = await batch_1.updateBatch(
        752,
        "London, UK",
        "Packaging Specialist",
        "Roasting",
        "Distribution",
        "Packaged and sealed",
        "Nitrogen-flushed packaging used to maintain freshness",
    )

    const batch_1_update_9 = await batch_1.updateBatch(
        752,
        "London, UK",
        "Distributor",
        "Packaging",
        "Consumer",
        "Deliverd to retailor",
        "Product is now available for purchase and consumption",
    )

    console.log("Second update transaction sent:", batch_1_update_2.hash);
    console.log("Second update transaction sent:", batch_1_update_3.hash);
    console.log("Second update transaction sent:", batch_1_update_4.hash);
    console.log("Second update transaction sent:", batch_1_update_5.hash);
    console.log("Second update transaction sent:", batch_1_update_6.hash);
    console.log("Second update transaction sent:", batch_1_update_7.hash);
    console.log("Second update transaction sent:", batch_1_update_8.hash);
    console.log("Second update transaction sent:", batch_1_update_9.hash);


    // batch 1 details
    const batch_2_Details = [
        "SC-001-25",
        Math.floor(Date.now() / 1000),
        "Brazil",
        "Arabica",
        "Light",
        "Honey"
    ];

    const batch_2_initial_update = [
        756,
        "Brazil Farm",
        "Farmer",
        "N/A",
        "Cultivation",
        "Batch Created",
        "Initial batch creation",
        Math.floor(Date.now() / 1000)
    ];

    const Batch_2 = await ethers.getContractFactory("Batch");
    const batch_2 = await Batch_2.deploy(batch_2_Details, participants, batch_2_initial_update);
    await batch_2.waitForDeployment();

    console.log("Sample Batch deployed to:", await batch_2.getAddress());

}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});