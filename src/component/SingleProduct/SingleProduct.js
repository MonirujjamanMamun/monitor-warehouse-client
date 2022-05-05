import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventoris/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    console.log(product)
    const { _id, name, img, description, price, quantity, supplierName } = product;

    return (
        <div className='container mx-auto my-4'>
            <div className="flex flex-wrap mb-6 border-solid border-2 border-gray-300 p-3 rounded-lg items-center justify-center">
                <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
                    <div className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
                        data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <img src={img} className="w-full" alt="Louvre" />
                    </div>
                </div>
                <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
                    <h5 className="text-lg font-bold mb-3">{name}</h5>
                    <p className="text-lg mb-1">Price: {price}</p>
                    <p className="text-lg mb-1">Quantity: {quantity}</p>
                    <p className="text-lg mb-1">SupplierName: {supplierName}</p>
                    <p className="text-lg mb-1">Description: {description}</p>
                </div>
                <div>

                    <button className="bg-blue-900 text-white p-4 rounded-lg border-0" type="button">
                        Delivered
                    </button>
                    {/* onClick={() => handelNavigate(_id)} */}

                </div>

            </div>
        </div>
    );
};

export default SingleProduct;