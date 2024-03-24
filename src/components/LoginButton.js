import { useAuth0 } from '@auth/auth0-react'
const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuthe();
    
    return (
        isAuthenticated && (
            <button onClick={() => loginWithRedirect()}>
                Sign Out 
            </button>
        )
    )
}
export default LoginButton