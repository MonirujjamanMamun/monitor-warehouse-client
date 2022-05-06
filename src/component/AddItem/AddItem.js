import React from 'react';
import { toast } from 'react-toastify';

const AddItem = () => {

    const handelAddItem = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const supplierName = event.target.suplierName.value;
        const img = event.target.imgUrl.value;
        const quantity = event.target.quantity.value;
        const price = event.target.price.value;
        const description = event.target.description.value;
        const updateItem = {
            name, supplierName, img, quantity, price, description
        }
        console.log(updateItem)
        const url = `http://localhost:5000/additem`;
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            toast('Succesfully Added Product')
        })
    }


    return (
        <div>
            <div className="container my-7 block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto">
                <h1 className='text-2xl text-blue-600 mb-7 font-bold'>Add Your Product</h1>
                <form onSubmit={handelAddItem}>
                    <div className="form-group mb-6">
                        <input type="text" name='name' className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7" placeholder="Name" />
                    </div>
                    <div className="form-group mb-6">
                        <input type="text" name='suplierName' className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7" placeholder="Suplier Name" />
                    </div>
                    <div className="form-group mb-6">
                        <input type="text" name='imgUrl' className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7" placeholder="Image Url" />
                    </div>

                    <div className="form-group mb-6">
                        <input type="number" name='quantity' className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8" placeholder="Quantity" />
                    </div>
                    <div className="form-group mb-6">
                        <input type="number" name='price' className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8" placeholder="Price" />
                    </div>

                    <div className="form-group mb-6">
                        <textarea name='description' className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlTextarea13" rows="3" placeholder="Description"></textarea>
                    </div>

                    <button type="submit" className=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add Item</button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;