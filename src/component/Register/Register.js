import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
    const [createUserWithEmailAndPassword, loading] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()

    // spinner 
    if (loading) {
        return <div className="flex justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    // registetion with email and password
    const handelRegistetionEmailPass = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPass = event.target.confirmPass.value;
        if (password === confirmPass) {
            createUserWithEmailAndPassword(email, password)
            navigate('/login')
        }
    }

    return (
        <div>
            <h1 className="inline-block px-7 py-3 mt-10 text-blue-600 font-medium text-sm leading-snug uppercase rounded shadow-md focus:outline-none focus:ring-0 active:text-blue-800 text-2xl">Register</h1>
            <section className="h-screen">
                <div className="container px-6 py-12 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="w-full" alt="Phone image" />
                        </div>
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                            {/* form start here  */}
                            <form onSubmit={handelRegistetionEmailPass}>
                                {/* <!-- Name input --> */}
                                <div className="mb-6">
                                    <input type="text" name='name' className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Full Name"/>
                                </div>
                                {/* <!-- Email input --> */}
                                <div className="mb-6">
                                    <input type="text" name='email' className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email address"/>
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="mb-6">
                                    <input type="password" name='password' className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password"/>
                                </div>
                                {/* <!--Confirm Password input --> */}
                                <div className="mb-6">
                                    <input type="password" name='confirmPass' className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Confirm Password"/>
                                </div>

                                <div className="flex justify-between items-center mb-6">
                                    <div className="form-group form-check">
                                        <input type="checkbox" className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" id="exampleCheck3"/>
                                        <label className="form-check-label inline-block text-gray-800">I accept the <span className='cursor-pointer text-blue-600 font-bold'>Terms of Use</span> & <span className='cursor-pointer text-blue-600 font-bold'>Privacy Policy</span> </label>
                                    </div>

                                </div>

                                {/* <!-- Submit button --> */}
                                <button type="submit" className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    Register
                                </button>

                                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                    Already have an account?
                                    <Link to="/login" className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"> LogIn </Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;