
import React, { useEffect, useState } from 'react';

const ManageItems = () => {
    const [product, setProduct] = useState([]);
    useEffect( ()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=>setProduct(data))
    },[]);

    return (
        <div>
            <h1>this is manage Item</h1>
            <p>Product:{product.length}</p>
        </div>
    );
};

export default ManageItems;