// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./Batch.sol"; // Import the Batch contract

contract BatchFactory {
    // Store the deployed Batch contracts
    Batch[] public batches;

    // Mapping to track manager-created batches
    mapping(address => uint256[]) public managerBatches;

    // Event to notify when a new batch is created
    event NewBatchCreated(address manager, uint256 batchId);

    // Function to create a new batch
    function createBatch(
        Batch.BatchDetails memory _batchDetails,
        Batch.Participants memory _participants,
        Batch.BatchUpdate memory _initialUpdate
    ) public {
        // Only the manager can create a new batch
        require(
            msg.sender == _participants.manager,
            "Only the manager can create a new batch"
        );

        // Deploy a new Batch contract
        Batch newBatch = new Batch(
            _batchDetails,
            _participants,
            _initialUpdate
        );

        // Add the new batch to the list of batches
        batches.push(newBatch);

        // Track the batch by the manager
        managerBatches[msg.sender].push(batches.length - 1);

        // Emit an event for the new batch creation
        emit NewBatchCreated(msg.sender, batches.length - 1);
    }

    // Function to get all batches created by a specific manager
    function getBatchesByManager(
        address _manager
    ) public view returns (Batch[] memory) {
        uint256[] memory batchIds = managerBatches[_manager];
        Batch[] memory managerCreatedBatches = new Batch[](batchIds.length);

        for (uint256 i = 0; i < batchIds.length; i++) {
            managerCreatedBatches[i] = batches[batchIds[i]];
        }

        return managerCreatedBatches;
    }

    // Function to get total number of batches created
    function getTotalBatches() public view returns (uint256) {
        return batches.length;
    }
}
