// import React, { useState } from 'react'

// function Login() {

//     const [state,setState] = useState('Sign Up');

//     const [email,setEmail] = useState('');
//     const [password,setPassword] =  useState('');
//     const [name,setName] =  useState('');


//     const onSubmitHandler = async (event) => {
//         event.preventDefault();
//     }

//   return (
//     <form className='min-h-[80vh] flex items-center'>
//         <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg border-gray-200'>
//           <p className='text-2xl font-semibold'>{state==='Sign Up'?"Create Account":"Login"}</p>
//           <p>{state==='Sign Up'?"Please sign up to book appointment":"Please log in to book appointment"}</p>
//          {
//           state ==='Sign Up' &&  <div className='w-full'>
//             <p>Full Name</p>
//             <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e)=>setName(e.target.name)} value={name} required/>
//           </div>
//          }

//           <div className='w-full'>
//             <p>Email</p>
//             <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e)=>setEmail(e.target.name)} value={email} required/>
//           </div>

//           <div className='w-full'>
//             <p>Password</p>
//             <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e)=>setPassword(e.target.name)} value={password} required/>
//           </div>

//           <button className='bg-[#5f5FFF] text-white w-full py-2 rounded-md text-base cursor-pointer'>{state === 'Sign Up'?'Create an Account': 'Login'}</button>

//           {
//             state === 'Sign Up' ? <p>Already have an account? <span onClick={()=>setState('Login')}  className='text-[#5f5FFF] cursor-pointer underline'>Login here</span></p> : <p>Create an new account? <span onClick={()=>setState('Sign Up')} className='text-[#5f5FFF] cursor-pointer underline'>Click here</span></p>
//           }

//         </div>
      
//     </form>
//   )
// }

// export default Login



















import React, { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [state, setState] = useState('Sign Up');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const { login, signup } = useContext(AppContext);
    const navigate = useNavigate();

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');

        // Basic validation
        if (!email || !password) {
            setError('Please fill in all required fields');
            setLoading(false);
            return;
        }

        if (state === 'Sign Up' && !name) {
            setError('Please enter your full name');
            setLoading(false);
            return;
        }

        try {
            let result;
            if (state === 'Sign Up') {
                console.log('Attempting signup:', { name, email });
                result = await signup(name, email, password);
            } else {
                console.log('Attempting login:', { email });
                result = await login(email, password);
            }

            console.log('API response:', result);

            if (result.success) {
                console.log('Success, navigating to home...');
                navigate('/');
                window.scrollTo(0, 0);
            } else {
                setError(result.error || 'Something went wrong');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('An unexpected error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    const toggleState = (newState) => {
        setState(newState);
        setError('');
        // Clear form when switching
        if (newState === 'Login') {
            setName('');
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
            <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg border-gray-200'>
                <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
                <p className='text-gray-500'>{state === 'Sign Up' ? "Please sign up to book appointment" : "Please log in to book appointment"}</p>
                
                {error && (
                    <div className="w-full p-3 bg-red-100 text-red-700 rounded-md text-sm">
                        {error}
                    </div>
                )}
                
                {state === 'Sign Up' && (
                    <div className='w-full'>
                        <p className='font-medium text-gray-700'>Full Name</p>
                        <input 
                            className='border border-zinc-300 rounded w-full p-2 mt-1 focus:outline-none focus:border-[#5f5FFF] transition-colors' 
                            type="text" 
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            placeholder="Enter your full name"
                            disabled={loading}
                            required 
                        />
                    </div>
                )}

                <div className='w-full'>
                    <p className='font-medium text-gray-700'>Email</p>
                    <input 
                        className='border border-zinc-300 rounded w-full p-2 mt-1 focus:outline-none focus:border-[#5f5FFF] transition-colors' 
                        type="email" 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="Enter your email"
                        disabled={loading}
                        required 
                    />
                </div>

                <div className='w-full'>
                    <p className='font-medium text-gray-700'>Password</p>
                    <input 
                        className='border border-zinc-300 rounded w-full p-2 mt-1 focus:outline-none focus:border-[#5f5FFF] transition-colors' 
                        type="password" 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="Enter your password"
                        disabled={loading}
                        required 
                    />
                </div>

                <button 
                    type="submit"
                    disabled={loading}
                    className={`w-full py-2 rounded-md text-base font-medium transition-colors ${
                        loading 
                            ? 'bg-gray-400 cursor-not-allowed text-white' 
                            : 'bg-[#5f5FFF] hover:bg-[#4a4aff] text-white cursor-pointer'
                    }`}
                >
                    {loading ? (
                        <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                        </span>
                    ) : (
                        state === 'Sign Up' ? 'Create an Account' : 'Login'
                    )}
                </button>

                {state === 'Sign Up' ? (
                    <p className='text-center w-full text-gray-600'>
                        Already have an account?{' '}
                        <span 
                            onClick={() => toggleState('Login')} 
                            className='text-[#5f5FFF] cursor-pointer underline hover:text-[#4a4aff]'
                        >
                            Login here
                        </span>
                    </p>
                ) : (
                    <p className='text-center w-full text-gray-600'>
                        Create a new account?{' '}
                        <span 
                            onClick={() => toggleState('Sign Up')} 
                            className='text-[#5f5FFF] cursor-pointer underline hover:text-[#4a4aff]'
                        >
                            Click here
                        </span>
                    </p>
                )}
            </div>
        </form>
    )
}

export default Login