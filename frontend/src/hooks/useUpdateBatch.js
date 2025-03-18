import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";
import { updateBatch } from "../utils/BatchFactory";

export const useUpdateBatch = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // Use false instead of null for booleans
    const navigate = useNavigate();
    const { user } = useAuthContext();

    const updateSmartContract = async (smart_contract_address, batch_quantity, current_location, current_holder, previous_stage, next_stage, status, additional_notes) => {
        setIsLoading(true);
        setError(null);

        const update = await updateBatch(smart_contract_address, batch_quantity, current_location, current_holder, previous_stage, next_stage, status, additional_notes);

        if (!update) {
            setIsLoading(false)
            setError("error with smart contract update")
        }

        navigate('/participantDashboard');


    }

    return { updateSmartContract, error, isLoading }
}