import React, { useState } from 'react'
import axios from 'axios';
import { PromiseProvider } from 'mongoose';
import { navigate } from '@reach/router';

export default () => {
    // keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    // handler when the form is submitted
    const onSubmitHandler = e => {
        // prevent default behavior of the submit
        e.preventDefault();
        // make a post request to create a new person
        axios.post('http://localhost:8000/api/product/add', {
            title,
            price,
            description
        })
            .then(res=>{
                console.log(res);
            })
            .catch(err=>console.log(err))
    }

    // onChange to update data
    return (
        <form onSubmit={onSubmitHandler}>
            <h1>Product Manager</h1>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>
            </p>
            <input type="submit" value="Create"/>
        </form>
    )
}