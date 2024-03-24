import { useAuth0 } from '@auth/auth0-react'
const LoginButton = () => {
    const { loginwithRedirect, isAuthenticated } = useAuthe();
    
    return (
        !isAuthenticated && (
            <button onClick={() => loginWithRedirect()}>
                Sign In 
            </button>
        )
    )
}
export default LoginButton