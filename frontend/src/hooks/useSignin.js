import { useState } from "react";
import { useAuthContext } from './useAuthContext'


export const useSignin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const signin = async (email, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('/api/user/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })

        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if (response.ok) {
            // save JWT to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update Auth Context
            dispatch({ type: 'SIGNIN', payload: json })

            setIsLoading(false);
        }
    }
    return { signin, error, isLoading }
}