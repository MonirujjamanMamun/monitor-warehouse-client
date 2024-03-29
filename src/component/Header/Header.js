import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const Header = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const handelSingOut = () => {
        signOut(auth);
        navigate('/')
    }

    return (
        <>
            <nav className="relative w-full flex flex-wrap items-center justify-between py-6 bg-blue-900 text-gray-500 hover:text-white focus:text-white shadow-lg navbar navbar-expand-lg">
                <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                    <button className="navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path fill="currentColor"
                            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                        </path>
                        </svg>
                    </button>
                    <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
                        
                        {/* <!-- Left links --> */}
                        <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                            <li className="nav-item px-2">
                                <Link className="nav-link text-gray-400 hover:text-white focus:text-white p-0 font-bold text-lg" to="/">Home</Link>
                            </li>

                            <li className="nav-item pr-2">
                                <Link className="nav-link text-gray-400 hover:text-white focus:text-white p-0 font-bold text-lg" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item pr-2">
                                <Link className="nav-link text-gray-400 hover:text-white focus:text-white p-0 font-bold text-lg" to="/manageInventories">Inventories</Link>
                            </li>
                        </ul>

                        {/* <!-- right links --> */}
                        <ul className="navbar-nav flex flex-col pl-0 list-style-none">
                            {/* use tarnary operater */}
                            {user ? <div>
                                <Link to='/manageitems'>
                                    <button className="nav-link text-gray-400 hover:text-white focus:text-white p-0 font-bold text-lg" >Manage Items</button>
                                </Link>
                                <Link to='/additem'>
                                    <button className="nav-link text-gray-400 hover:text-white focus:text-white p-0 font-bold text-lg" >Add Item</button>
                                </Link>
                                <Link to="/myitems">
                                    <button className="nav-link text-gray-400 hover:text-white focus:text-white p-0 font-bold text-lg" >My items</button>
                                </Link>
                                <button onClick={handelSingOut} className="bg-blue-700 rounded-full text-gray-300  hover:text-white focus:text-white px-5 py-2 font-bold mx-2" >Log Out</button>

                            </div>
                                :
                                <Link className="bg-blue-700 rounded-full text-gray-300  hover:text-white focus:text-white px-5 py-2 font-bold mx-2" to="/login">Login</Link>

                            }
                        </ul>
                    </div>
                   
                </div>
            </nav>

        </>
    );
};

export default Header;