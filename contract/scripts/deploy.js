require('hardhat');

async function main() {
    // each address is on the hardhat node
    const participants = [
        "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", "0x70997970C51812dc3A010C7d01b50e0d17dc79C8", "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC", "0x90F79bf6EB2c4f870365E785982E1f101E93b906",
        "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65", "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc", "0x976EA74026E726554dB657fA54763abd0C3a0aa9", "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955",
        "0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f"
    ];

    // batch 1 creation and deployment
    const batch_1_Details = ["SC-001-25", Math.floor(Date.now() / 1000), "Brazil", "Arabica", "Light", "Wet"];
    const batch_1_initial_update = [35, "Brazil Farm", "Manager", "N/A", "Cultivation", "Batch Created", "Initial batch creation", Math.floor(Date.now() / 1000)];
    const Batch_1 = await ethers.getContractFactory("Batch");
    const batch_1 = await Batch_1.deploy(batch_1_Details, participants, batch_1_initial_update);
    await batch_1.waitForDeployment();
    console.log("Batch 1 deployed to:", await batch_1.getAddress());

    // batch 2 creation and deployment
    const batch_2_Details = ["SC-002-25", Math.floor(Date.now() / 1000), "Kenya", "Robusta", "Dark", "Honey"];
    const batch_2_initial_update = [26, "Kenya Farm", "Manager", "N/A", "Cultivation", "Batch Created", "Initial batch creation", Math.floor(Date.now() / 1000)];
    const Batch_2 = await ethers.getContractFactory("Batch");
    const batch_2 = await Batch_2.deploy(batch_2_Details, participants, batch_2_initial_update);
    await batch_2.waitForDeployment();
    console.log("Batch 2 deployed to:", await batch_2.getAddress());

    // function to artificially increase time between updates
    async function increaseTimeAndMine(days, hours = 0, minutes = 0) {
        const timeIncrement = (days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60); // Convert to seconds
        await ethers.provider.send("evm_increaseTime", [timeIncrement]);
        await ethers.provider.send("evm_mine"); // Mine a new block to apply the time change
    }

    // Simulate realistic supply chain timeline
    await increaseTimeAndMine(90, 6, 15);
    await batch_1.updateBatch(35, "Brazil Farm", "Farmer", "N/A", "Harvesting", "Crops matured and ready for harvest", "Favourable weather led to a healthy yield.");

    await increaseTimeAndMine(7, 4, 30);
    await batch_1.updateBatch(34, "Brazil Farm", "Harvester", "Cultivation", "Processing", "Beans harvested", "Collected and sorted, separating defects.");

    await increaseTimeAndMine(3, 2, 10);
    await batch_1.updateBatch(34, "Brazil Farm", "Processor", "Harvesting", "Drying", "Beans pulped and fermented", "Wet processing completed to remove mucilage.");

    await increaseTimeAndMine(14, 5, 20);
    await batch_1.updateBatch(33, "Brazil Farm", "Drying Specialist", "Processing", "Exporting", "Beans sun-dried to 12% moisture", "Ideal moisture level reached, ready for export.");

    await increaseTimeAndMine(10, 8, 45);
    await batch_1.updateBatch(32, "Brazil Port", "Exporter", "Drying", "Roasting", "Beans exported to the UK", "Shipment loaded and en route to roastery.");

    await increaseTimeAndMine(21, 7, 5);
    await batch_1.updateBatch(32, "London, UK", "Roaster", "Exporting", "Packaging", "Beans roasted to a light profile", "Optimal flavour developed after test batches.");

    await increaseTimeAndMine(5, 3, 55);
    await batch_1.updateBatch(31, "London, UK", "Packaging Specialist", "Roasting", "Distribution", "Packaged and sealed", "Vacuum-sealed to maintain freshness.");

    await increaseTimeAndMine(7, 6, 40);
    await batch_1.updateBatch(29, "London, UK", "Distributor", "Packaging", "Consumer", "Delivered to retailer", "Stock now available for sale.");

    await increaseTimeAndMine(90, 3, 25);
    await batch_2.updateBatch(26, "Kenya Farm", "Farmer", "N/A", "Harvesting", "All Crops have matured", "The weather was mostly perfect conditions");

    console.log("Batch updates completed with realistic timestamps.");
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});