import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";

export const useNewSupplyChain = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const navigate = useNavigate();
    const { user } = useAuthContext();


    const newSupplyChain = async (supply_chain_id) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('/api/supplyChain/new', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}` },
            body: JSON.stringify({ supply_chain_id })
        })

        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if (response.ok) {
            setIsLoading(false);

            // alert user new supply chain created
            alert("New Supply Chain created: " + supply_chain_id)

            // take user back to manager dashboard
            navigate('/managerDashboard');
        }
    }
    return { newSupplyChain, error, isLoading }
}