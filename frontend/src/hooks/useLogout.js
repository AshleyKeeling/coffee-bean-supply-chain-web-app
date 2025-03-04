import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    const { dispatch: authDispatch } = useAuthContext();

    const logout = () => {
        // remove use from local storage (jwt token)
        localStorage.removeItem('user');

        // dispatch logout action
        authDispatch({ type: 'LOGOUT' });
    }

    return { logout }
}