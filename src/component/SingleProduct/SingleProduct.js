import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({});
    const { _id, name, img, description, price, quantity, supplierName } = product;

    useEffect(() => {
        const url = `http://localhost:5000/inventoris/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [quantity]);


    const handelUpadeQuantity = event => {
        event.preventDefault();
        const number = event.target.number.value;
        if (number > 0) {
            const { quantity, _id, ...rest } = product;
            const total = parseInt(quantity) + parseInt(number);
            const updateProduct = { quantity: total, ...rest }
            // console.log(updateProduct)

            const url = `http://localhost:5000/inventoris/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateProduct)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('success', data)
                    setProduct(data)
                    alert('Quantity Successfully Added.');
                    event.target.reset();
                })
        }
        // else{
        //     <h1>Please give a vaild number</h1>
        // }
    }

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
                    <button className="bg-blue-900 text-white p-4 rounded-lg border-0 " type="button">
                        Delivered
                    </button>
                </div>
                {/* update input fild */}
                <form onSubmit={handelUpadeQuantity} className="flex justify-center">
                    <div className="mb-3 xl:w-96">
                        <label className="form-label inline-block mb-3 text-xl text-blue-600"
                        >Update Quantity </label>
                        <input name='number' type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleNumber0" placeholder="Number input" />

                        <input className="text-white bg-blue-700 py-3 px-5 rounded-md mt-4 cursor-pointer" type="submit" value="Submit" />
                    </div>
                </form>

            </div>

        </div>
    );
};

export default SingleProduct;