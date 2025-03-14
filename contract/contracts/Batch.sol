// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Batch {
    // General batch details struct
    struct BatchDetails {
        string supply_chain_id;
        string creation_date;
        string origin;
        string bean_type;
        string roasting_type;
        string processing_type;
    }

    // Participants struct
    struct Participants {
        address manager;
        address farmer;
        address harvestor;
        address processor;
        address drying_specialist;
        address exporter;
        address roaster;
        address packaging_specialist;
        address distributor;
    }

    // Struct to store batch updates
    struct BatchUpdate {
        uint256 batch_quantity;
        string location;
        string current_holder;
        string previous_stage;
        string next_stage;
        string status;
        string latest_update;
        string additional_notes;
        uint256 timestamp;
    }

    BatchDetails public batchDetails;
    Participants public participants;
    BatchUpdate[] public updates;

    // Modifier to allow only participants to update batch details
    modifier onlyParticipant() {
        require(
            msg.sender == participants.manager ||
                msg.sender == participants.farmer ||
                msg.sender == participants.harvestor ||
                msg.sender == participants.processor ||
                msg.sender == participants.drying_specialist ||
                msg.sender == participants.exporter ||
                msg.sender == participants.roaster ||
                msg.sender == participants.packaging_specialist ||
                msg.sender == participants.distributor,
            "Only authorized participants can update batch details"
        );
        _;
    }

    // Event for tracking updates
    event BatchUpdated(
        uint256 batch_quantity,
        string location,
        string current_holder,
        string previous_stage,
        string next_stage,
        string status,
        string latest_update,
        string additional_notes,
        uint256 timestamp
    );

    // Constructor with struct parameters to reduce stack depth
    constructor(
        BatchDetails memory _batchDetails,
        Participants memory _participants,
        BatchUpdate memory _initialUpdate
    ) {
        batchDetails = _batchDetails;
        participants = _participants;

        // Store the initial batch state
        updates.push(_initialUpdate);
    }

    // Function to update batch details (only participants can call)
    function updateBatch(
        uint256 _batch_quantity,
        string memory _location,
        string memory _currentHolder,
        string memory _previousStage,
        string memory _nextStage,
        string memory _status,
        string memory _latestUpdate,
        string memory _additionalNotes
    ) public onlyParticipant {
        // Append the new update to the history
        updates.push(
            BatchUpdate({
                batch_quantity: _batch_quantity,
                location: _location,
                current_holder: _currentHolder,
                previous_stage: _previousStage,
                next_stage: _nextStage,
                status: _status,
                latest_update: _latestUpdate,
                additional_notes: _additionalNotes,
                timestamp: block.timestamp
            })
        );

        // Emit an event for tracking
        emit BatchUpdated(
            _batch_quantity,
            _location,
            _currentHolder,
            _previousStage,
            _nextStage,
            _status,
            _latestUpdate,
            _additionalNotes,
            block.timestamp
        );
    }

    // Function to get all updates (for timeline in frontend)
    function getAllUpdates() public view returns (BatchUpdate[] memory) {
        return updates;
    }
}
