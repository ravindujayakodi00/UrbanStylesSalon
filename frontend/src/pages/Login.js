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
        <section className='login-section bg-gray-50 min-h-screen flex items-center justify-center'>
            <div className='bg-gray-100 flex rounded-2xl max-w-4xl p-3'>
                {/* form */}
                <div className='sm:w-1/2 px-12'>
                    <h2 className='font-bold text-2xl text-[#181D31]'>Login</h2>
                    <p className=' mt-4 text-sm text-[#181D31]'>If you already have an account Log in here</p>

                    <form onSubmit = {handleSubmit} className='flex flex-col gap-4'>
                        <input 
                            className='p-2 mt-8 rounded-xl border '
                            type="email" 
                            value={email} 
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <input
                            className='p-2 rounded-xl border'
                            type="password"
                            value={password}
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type='submit' className='bg-[#181D31] rounded-xl text-white py-2'>Login</button>
                        {error && <div className='error'>{error}</div>}
                    </form>

                    <div className='mt-10 grid grid-cols-3 items-center text-gray-400'>
                        <hr className='border-gray-400'/>
                        <p className='mt-3 text-center'>OR</p>
                        <hr className='border-gray-400'/>
                    </div>
                </div>
                {/* image */}
                <div className='sm:block hidden w-1/2'>
                    <img className=' rounded-2xl' src="https://images.pexels.com/photos/3268732/pexels-photo-3268732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="loginpageimage" />
                </div>

            </div>
        </section>
    )
}

export default Login;
