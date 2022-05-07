import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Fasility from '../Fasility/Fasility';
import Inventoris from '../Inventoris/Inventoris';
import Supplier from '../Supplier/Supplier';
import './Home.css';

const Home = () => {
    const [loading, setLoging] = useState(false)
    const navigate = useNavigate();
    const [sixProducts, setSixProducts] = useState([]);

    useEffect(() => {
        setLoging(true)
        fetch('http://localhost:5000/sixproducts')
            .then(res => res.json())
            .then(data => setSixProducts(data));
        setLoging(false)
    }, []);

    if (loading) {
        return <div className="flex justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    return (
        <div>

            {/* banar section start here */}
            <div className="container my-6 px-6 mx-auto">
                <section className="mb-3 background-radial-gradient">
                    <div className="px-6 py-12 md:px-12 text-center lg:text-left">
                        <div className="container mx-auto xl:px-32">
                            <div className="grid lg:grid-cols-2 gap-12 flex items-center">
                                <div className="mt-12 lg:mt-0">
                                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 color">The best monitor <br /><span className='color-another'>warehouse</span></h1>
                                    <a className="inline-block px-7 py-3 mr-2 bg-gray-200 text-gray-700 font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
                                    <a className="inline-block px-7 py-3 bg-transparent text-white font-medium text-sm leading-snug uppercase rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a>
                                </div>
                                <div className="mb-12 lg:mb-0">
                                    <img
                                        src="https://img.freepik.com/free-photo/blank-desktop-computer_74190-5685.jpg?size=338&ext=jpg&ga=GA1.2.140505214.1650403882"
                                        className="w-full rounded-lg shadow-lg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* banar section end here */}

            {/* products section  */}
            <section className="container mt-24 px-6 mx-auto" >
                <div className="mb-2 text-gray-800 text-center md:text-left">
                    {sixProducts.map(product => <Inventoris key={product._id} product={product}></Inventoris>)}
                </div>
            </section>
            {/* manageInventories navigate button */}
            <div>
                <button onClick={() => navigate('/manageInventories')} className="text-white bg-blue-700 py-3 px-5 rounded-md mt-0 cursor-pointer">Manage Inventories</button>
            </div>
            <Fasility></Fasility>
            <Supplier></Supplier>
        </div>
    );
};

export default Home;