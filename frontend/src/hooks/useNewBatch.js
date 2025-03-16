import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";
import { createNewSmartContract } from "../utils/BatchFactory";

export const useNewBatch = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // Use false instead of null for booleans
    const navigate = useNavigate();
    const { user } = useAuthContext();

    const newBatch = async (supply_chain_id, origin, batch_quantity, processing_type, roasting_type, bean_type, participant_addresses) => {
        setIsLoading(true);
        setError(null);

        // Verify batch details
        const response_verify = await fetch('/api/batch/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}` },
            body: JSON.stringify({ supply_chain_id, origin, batch_quantity, processing_type, roasting_type, bean_type, participant_addresses })
        });

        const data = await response_verify.json(); // Await JSON parsing

        if (!response_verify.ok) {
            console.log(data)
            setIsLoading(false);
            setError(data.error);  // Set the error message from backend
            return;  // Stop execution if verification fails
        }

        console.log("here0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")

        // Create smart contract only if verification is successful
        const smart_contract_address = await createNewSmartContract(supply_chain_id, origin, bean_type, roasting_type, processing_type, participant_addresses, batch_quantity, origin);

        // Save batch to database
        if (smart_contract_address) {
            const response = await fetch('/api/batch/new', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}` },
                body: JSON.stringify({ smart_contract_address, supply_chain_id, origin, batch_quantity, processing_type, roasting_type, bean_type, participant_addresses })
            });

            const json = await response.json();

            if (!response.ok) {
                setIsLoading(false);
                setError(json.error);
                return;  // Stop execution if saving batch fails
            }

            // Successfully created batch
            setIsLoading(false);
            alert("Batch successfully created, smart contract address: " + smart_contract_address);

            // Redirect user
            navigate('/managerDashboard');
        } else {
            setIsLoading(false);
            setError("Error with smart contract creation")
        }
    }

    return { newBatch, error, isLoading };
}