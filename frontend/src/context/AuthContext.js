import { createContext, useReducer, useEffect } from 'react';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'SIGNIN':
            return { user: action.payload };
        case 'LOGOUT':
            return { user: null };
        default:
            return state;
    }
};

const verifyToken = async (token) => {
    try {
        const response = await fetch('/api/user/validate-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Token verification failed');
        }

        const data = await response.json();
        return data.isValid;
    } catch (error) {
        console.error('Token verification error:', error);
        return false;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    });

    useEffect(() => {
        const checkUser = async () => {
            const user = JSON.parse(localStorage.getItem('user'));

            if (user && user.token) {
                const isValid = await verifyToken(user.token);

                if (isValid) {
                    dispatch({ type: 'SIGNIN', payload: user });
                } else {
                    localStorage.removeItem('user');
                    dispatch({ type: 'LOGOUT' });
                }
            }
        };

        checkUser();
    }, []);

    console.log("AuthContext state: ", state);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );

}