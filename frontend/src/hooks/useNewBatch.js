import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const useNewBatch = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const navigate = useNavigate();

    const newBatch = async (smart_contract_address, supply_chain_id, origin, batch_quantity, processing_type, roasting_type, bean_type, participant_addresses) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('/api/batch/new', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
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