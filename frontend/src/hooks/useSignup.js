import { useState } from "react";
import { useAuthContext } from './useAuthContext'


export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const signup = async (email, password, confirmPassword, role, ethereum_address) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, confirmPassword, role, ethereum_address })
        })

        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if (response.ok) {
            // save the user to local storage (jwt token)
            localStorage.setItem('user', JSON.stringify(json))

            // update Auth Context
            dispatch({ type: 'SIGNIN', payload: json })

            setIsLoading(false);
        }
    }
    return { signup, isLoading, error }
}