import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from './ProductList'
export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                console.log(res.data.products);
                setProducts(res.data.products);
                setLoaded(true);
            })
    }, [])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    return (
        <div>
            <ProductForm/>
            <hr/>
            {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}