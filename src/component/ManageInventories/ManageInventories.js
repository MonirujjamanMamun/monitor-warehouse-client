import React, { useEffect, useState } from 'react';

const ManageInventories = () => {
    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <div>
                <section className="container mt-10 px-6 mx-auto" >
                    <h1 className='text-2xl font-bold my-3 text-blue-600'>All Product</h1>
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
                                    </div>
                                </div>
                            </div>
                        }
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ManageInventories;