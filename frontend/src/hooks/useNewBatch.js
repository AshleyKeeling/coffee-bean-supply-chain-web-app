import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";
import { createNewSmartContract, updateBatch } from "../utils/BatchFactory";



export const useNewBatch = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const navigate = useNavigate();
    const { user } = useAuthContext();


    const newBatch = async (supply_chain_id, origin, batch_quantity, processing_type, roasting_type, bean_type, participant_addresses) => {
        setIsLoading(true);
        setError(null);

        const smart_contract_address = await createNewSmartContract(supply_chain_id, origin, bean_type, roasting_type, processing_type, participant_addresses, batch_quantity, origin);

        const response = await fetch('/api/batch/new', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}` },
            body: JSON.stringify({ smart_contract_address, supply_chain_id, origin, batch_quantity, processing_type, roasting_type, bean_type, participant_addresses })
        })

        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if (response.ok) {
            setIsLoading(false);

            // alert user new supply chain created
            alert("Batch succesfully Created, smart contract address for batch: " + smart_contract_address)

            // take user back to manager dashboard
            navigate('/managerDashboard');
        }
    }
    return { newBatch, error, isLoading }
}