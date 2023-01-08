import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signup, error, isLoading , success} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        await signup(firstName,lastName,phone,email,password)
    }

    return(

        <section className='login-section min-h-screen flex items-center justify-center'>
            <div className='bg-gray-100 flex rounded-2xl max-w-4xl p-3'>
                {/* form */}
                <div className='sm:w-1/2 px-12'>
                    <h2 className='mt-4 font-bold text-2xl text-[#181D31]'>Sign Up</h2>
                    <p className=' mt-4 text-sm text-[#181D31]'>If you don't have an acoount, Sign up here.</p>

                    <form onSubmit = {handleSubmit} className='flex flex-col gap-4'>
                        <input
                            className='p-2 mt-8 rounded-xl border '
                            type="text"
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                            placeholder='First Name'
                        />

                        <input
                            className='p-2 rounded-xl border '
                            type="text"
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                            placeholder='Last Name'
                        />

                        <input
                            className='p-2 rounded-xl border '
                            type="text"
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                            placeholder='Phone'
                        />
                        <input 
                            className='p-2 rounded-xl border '
                            type="text" 
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

                        <button disabled={isLoading} type='submit' className='bg-[#181D31] rounded-xl text-white py-2'>Sign Up</button>
                        {error && <div className='error'>{error}</div>}
                        {success && <div className='success'>{success}</div>}

                    </form>

                    <div className='mt-8 grid grid-cols-3 items-center text-gray-400'>
                        <hr className='border-gray-400'/>
                        <p className='mt-3 text-center'>OR</p>
                        <hr className='border-gray-400'/>
                    </div>


                    <div className='mt-2 text-xs flex justify-between items-center'>
                        <p className='mt-3'>Already have an account?</p>
                        <Link to='/login' className='py-2 px-5 bg-white border rounded-xl text-[#181D31]'>Login</Link>
                    </div>
                </div>
                {/* image */}
                <div className='sm:block hidden w-1/2'>
                    <img className=' rounded-2xl' src="https://images.pexels.com/photos/3268732/pexels-photo-3268732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="loginpageimage" />
                </div>

            </div>
        </section>
        // <form className='signup' onSubmit = {handleSubmit}>
        //     <h3>Sign up</h3>

        

        //     <label>Email: </label>
        //     <input 
        //         type="email" 
        //         onChange={(e) => setEmail(e.target.value)}
        //         value={email}  
        //     />

        //     <label>Password: </label>
        //     <input
        //         type="password"
        //         onChange={(e) => setPassword(e.target.value)}
        //         value={password}
        //     />

        //     <button disabled = {isLoading} type="submit">Sign up</button>

        //     {error && <div className='error'>{error}</div>}
        //     {success && <div className='success'>{success}</div>}

        // </form>
    )
}

export default Signup;
