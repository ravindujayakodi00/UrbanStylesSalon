import { useState } from 'react';
import { useLogin } from '../hooks/useEmpLogin';
import { Link } from 'react-router-dom';

const EmployeeLogin = () => {
    const [empCode, setEmpCode] = useState('');
    const [password, setPassword] = useState('');
    const {employeeLogin, error, isLoading} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await employeeLogin(empCode, password);
    }

    return(
        <section className='login-section min-h-screen flex items-center justify-center'>
            <div className='bg-gray-100 flex rounded-2xl max-w-4xl p-3'>
                {/* form */}
                <div className='sm:w-1/2 px-12'>
                    <h2 className='mt-10 font-bold text-3xl text-[#181D31]'>Employee Login</h2>
                    <p className=' mt-4 text-sm text-gray-600'>If you already have an account Log in here</p>

                    <form onSubmit = {handleSubmit} className='flex flex-col gap-4'>
                        <input 
                            className='p-2 mt-8 rounded-xl border '
                            type="text" 
                            value={empCode} 
                            placeholder='Employee Code'
                            onChange={(e) => setEmpCode(e.target.value)} 
                        />
                        <input
                            className='p-2 rounded-xl border'
                            type="password"
                            value={password}
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button disabled={isLoading} type='submit' className='bg-[#181D31] rounded-xl text-white py-2 hover:bg-slate-700'>Login</button>
                        {error && <div className='error'>{error}</div>}
                    </form>

                    <div className='mt-10 grid grid-cols-3 items-center text-gray-400'>
                        <hr className='border-gray-400'/>
                        <p className='mt-3 text-center'>OR</p>
                        <hr className='border-gray-400'/>
                    </div>
                   
                    <div className='mt-2 ml-2 text-xs py-4 text-[#181D31]'>
                        <Link className='text-[#181D31]'>Forgot your password?</Link>
                    </div>

                    <hr className='border-gray-400 my-1 py-0'/>
                    <div className='mt-2 text-xs flex justify-between items-center'>
                        <p className='mt-3'>Don't have an account?</p>
                        <Link to='/signup' className='py-2 px-5 bg-white border rounded-xl text-[#181D31] hover:text-gray-600 hover:bg-slate-900'>Register</Link>
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

export default EmployeeLogin;
