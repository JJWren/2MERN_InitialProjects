import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

export default props => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props._id)
            .then(res => {
                console.log(res.data.products);
                setProduct(res.data.products);
            })
    }, [])
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/product/${product._id}/edit`}>Edit</Link>
        </div>
    )
}
