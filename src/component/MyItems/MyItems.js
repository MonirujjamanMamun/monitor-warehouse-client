import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);

    // load data by email 
    const [products, setProduct] = useState([])
    useEffect(() => {
        const email = user.email;
        fetch(`https://nameless-journey-03794.herokuapp.com/products?email=${email}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [products]);

    // Delete one product 
    const handelDeleteProduct = (id) => {
        const confirm = window.confirm('Are Your Sure, Delete This Product')
        if (confirm) {
            const url = `https://nameless-journey-03794.herokuapp.com/manageInventories/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    const restProduct = products.filter(product => product._id !== id)
                    setProduct(restProduct)
                    toast('successfully delete')
                })
        }
    }
    return (
        <div>
            <section className="container mt-10 px-6 mx-auto" >
                <h1 className='text-2xl font-bold my-3 text-blue-600'>My Product</h1>
                <div className="mb-2 text-gray-800 text-center md:text-left">
                    {products.map(product => {
                        return <div key={product._id} className='container mx-auto my-4'>
                            <div className="flex flex-wrap mb-6 border-solid border-2 border-gray-300 p-3 rounded-lg items-center justify-center">
                                <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
                                    <div className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
                                        data-mdb-ripple="true" data-mdb-ripple-color="light">
                                        <img src={product.img} className="w-full" alt="Louvre" />
                                    </div>
                                </div>
                                <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
                                    <h5 className="text-lg font-bold mb-3">{product.name}</h5>
                                    <p className="text-lg mb-1">Price: {product.price}</p>
                                    <p className="text-lg mb-1">Quantity: {product.quantity}</p>
                                    <p className="text-lg mb-1">SupplierName: {product.supplierName}</p>
                                    <p className="text-lg mb-1">Description: {product.description}</p>
                                    <button onClick={() => handelDeleteProduct(product._id)} className="bg-blue-900 text-white p-4 mt-5 ml-7 rounded-lg border-0" type="button">
                                        Delete Product
                                    </button>
                                </div>

                            </div>
                        </div>
                    }
                    )}
                </div>
            </section>
        </div>)
};

export default MyItems;