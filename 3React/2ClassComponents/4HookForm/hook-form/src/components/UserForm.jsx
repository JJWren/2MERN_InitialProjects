import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
const [cPassword, setCPassword] = useState(""); 
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, cPassword };
        console.log("Welcome", newUser);
    };
    
    return(
    <div className="d-flex flex-column justify-content-center mx-auto">
        <div className="d-flex flex-column justify-content-center mx-auto col-9 border-bottom mb-3">
            <form className="" onSubmit={ createUser }>
                <div className="input-group col-12 border rounded p-1 m-1 bg-dark">
                    <div className="input-group-prepend col-4 bg-info rounded text-light mr-1">
                        <label className="">First Name</label>
                    </div>
                    <input type="text" className="border col-7 ml-2 rounded" onChange={ (e) => setFirstName(e.target.value) } value={ firstName } />
                </div>
                <div className="input-group col-12 border rounded p-1 m-1 bg-dark">
                    <div className="input-group-prepend col-4 bg-info rounded text-light mr-1">
                        <label className="">Last Name</label>
                    </div>
                    <input type="text" className="border col-7 ml-2 rounded" onChange={ (e) => setLastName(e.target.value) } value={ lastName } />
                </div>
                <div className="input-group col-12 border rounded p-1 m-1 bg-dark">
                    <div className="input-group-prepend col-4 bg-info rounded text-light mr-1">
                        <label className="">Email Address</label>
                    </div>
                    <input type="text" className="border col-7 ml-2 rounded" onChange={ (e) => setEmail(e.target.value) } value={ email } />
                </div>
                <div className="input-group col-12 border rounded p-1 m-1 bg-dark">
                    <div className="input-group-prepend col-4 bg-info rounded text-light mr-1">
                        <label className="">Password</label>
                    </div>
                    <input type="text" className="border col-7 ml-2 rounded" onChange={ (e) => setPassword(e.target.value) } value={ password } />
                </div>
                <div className="input-group col-12 border rounded p-1 m-1 bg-dark">
                    <div className="input-group-prepend col-4 bg-info rounded text-light mr-1">
                        <label className="">Confirm Password</label>
                    </div>
                    <input type="text" className="border col-7 ml-2 rounded" onChange={ (e) => setCPassword(e.target.value) } value={ cPassword } />
                </div>
            </form>
        </div>
        <div className="d-flex flex-column justify-content-center mx-auto col-9">
            <h6>Your Form Data</h6>
            <div className="text-left d-flex flex-row">
                <p className="col-4">First Name</p>
                <p className="col-6">{ firstName }</p>
            </div>
            <div className="text-left d-flex flex-row">
                <p className="col-4">Last Name</p>
                <p className="col-6">{ lastName }</p>
            </div>
            <div className="text-left d-flex flex-row">
                <p className="col-4">Email Address</p>
                <p className="col-6">{ email }</p>
            </div>
            <div className="text-left d-flex flex-row">
                <p className="col-4">Password</p>
                <p className="col-6">{ password }</p>
            </div>
            <div className="text-left d-flex flex-row">
                <p className="col-4">Confirm Password</p>
                <p className="col-6">{ cPassword }</p>
            </div>
        </div>
    </div>
    );
};
    
export default UserForm;