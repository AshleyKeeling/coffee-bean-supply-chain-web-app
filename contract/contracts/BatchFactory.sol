// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./Batch.sol"; // Import the Batch contract

contract BatchFactory {
    // Store the deployed Batch contracts
    Batch[] public batches;

    // Event to notify when a new batch is created
    event NewBatchCreated(uint256 batchId, address batchAddress);

    // Function to create a new batch
    function createBatch(
        Batch.BatchDetails memory _batchDetails,
        Batch.Participants memory _participants,
        Batch.BatchUpdate memory _initialUpdate
    ) public {
        // Deploy a new Batch contract
        Batch newBatch = new Batch(
            _batchDetails,
            _participants,
            _initialUpdate
        );

        // Add the new batch to the list of batches
        batches.push(newBatch);

        // Emit an event for the new batch creation
        emit NewBatchCreated(batches.length - 1, address(newBatch));
    }

    // Function to get total number of batches created
    function getTotalBatches() public view returns (uint256) {
        return batches.length;
    }

    // Function to get all batches
    function getAllBatches() public view returns (Batch[] memory) {
        return batches;
    }
}
