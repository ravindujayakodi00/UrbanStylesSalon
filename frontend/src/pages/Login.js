import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, error, isLoading} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(email, password);
    }

    return(
        <div className='min-h-screen bg-gradient-to-t from-gradientblue to-gradientpink h-screen'>
            <div className='container mx-auto'>
                

            </div>
        </div>
        // <form className='signup ' onSubmit = {handleSubmit}>
        //     <h3 className=''>Log In</h3>

        //     <label >Email: </label>
        //     <input 
        //         type="email" 
        //         value={email} 
        //         onChange={(e) => setEmail(e.target.value)} 
        //     />

        //     <label>Password: </label>
        //     <input
        //         type="password"
        //         value={password}
        //         onChange={(e) => setPassword(e.target.value)}
        //     />

        //     <button type="submit">Log In</button>
        //     {error && <div className='error'>{error}</div>}
        // </form>
    )
}

export default Login;
