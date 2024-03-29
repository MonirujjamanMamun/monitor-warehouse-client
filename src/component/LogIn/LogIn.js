import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const LogIn = () => {
  const [signInWithGoogle, googleUser, googleLoading] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate()
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';
  let errorMessage;


  const handelGoogle = () => {
    signInWithGoogle();
  }

  const handelEmailPass = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  }

  const handelForgetEmailPassword = (event) => {
    const email = event.target.value;
    sendPasswordResetEmail(email);
    toast('Successfully Password Reset')
  }


  if (user || googleUser) {
    navigate(from, { replace: true })
  }

  if (error) {
    errorMessage = <p className='text-red-800'>{error?.message}</p>
  }
  if (loading || googleLoading) {
    return <div className="flex justify-center items-center">
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  }
  return (
    <div>
      <h1 className="inline-block px-7 py-3 mt-10 text-blue-600 font-medium text-sm leading-snug uppercase rounded shadow-md focus:outline-none focus:ring-0 active:text-blue-800 text-2xl">Log In</h1>
      <section className="h-screen">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone image"
              />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              {/* form start */}
              <form onSubmit={handelEmailPass}>
                {/* <!-- Email input --> */}
                <div className="mb-6">
                  <input type="text" name='email' className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email address" />
                </div>

                {/* <!-- Password input --> */}
                <div className="mb-6">
                  <input type="password" name='password' className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password" />
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" id="exampleCheck3"
                    // checked
                    />
                    <label className="form-check-label inline-block text-gray-800">Remember me</label>
                  </div>

                  <a onClick={handelForgetEmailPassword} className="cursor-pointer text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                  >Forgot password?</a>
                </div>
                {errorMessage}
                {/* <!-- Submit button --> */}
                <button type="submit" className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" data-mdb-ripple="true" data-mdb-ripple-color="light">
                  Sign in
                </button>

                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>

                {/* sing in with google button  */}
                <button onClick={handelGoogle} className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 bg-[#3b5998]">
                  {/* <!-- Facebook --> */}
                  <FaGoogle className="w-3.5 h-3.5 mr-2"></FaGoogle>
                  Continue with Google
                </button>

                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <Link to="/register" className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"> Register </Link></p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogIn;