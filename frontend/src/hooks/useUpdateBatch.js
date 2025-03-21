import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";
import { updateBatch } from "../utils/BatchFactory";

export const useUpdateBatch = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // Use false instead of null for booleans
    const navigate = useNavigate();
    const { user } = useAuthContext();

    const updateSmartContract = async (smart_contract_address, batch_quantity, current_location, current_holder, previous_stage, next_stage, status, additional_notes, selected_products) => {
        setIsLoading(true);
        setError(null);

        // updates smart contract
        const update = await updateBatch(smart_contract_address, batch_quantity, current_location, current_holder, previous_stage, next_stage, status, additional_notes);

        if (update) {
            const response = await fetch('/api/batch/update', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}` },
                body: JSON.stringify({ selected_products })
            })

            const json = await response.json();

            if (!response.ok) {
                setIsLoading(false);
                setError(json.error);
                return;  // Stop execution if saving batch fails
            }

            // Successfully updated batch
            setIsLoading(false);
            alert("Batch successfully updated, smart contract address: " + smart_contract_address);
            navigate('/participantDashboard');

        } else {
            setIsLoading(false);
            setError("Error with smart contract update")
        }



    }

    return { updateSmartContract, error, isLoading }
}