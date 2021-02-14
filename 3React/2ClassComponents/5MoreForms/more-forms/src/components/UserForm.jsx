import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        cPassword: "",
        hasBeenSubmitted: false
    })
    
    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onSubmission = (e) => {
        setForm({
            ...form,
            hasBeenSubmitted: true
        })
    }

    const firstNameValid = (firstNameInput) => {
        if(firstNameInput.length > 1) {
            return true;
        }
        return false;
    };

    const lastNameValid = (lastNameInput) => {
        if(lastNameInput.length > 1)
            return true;
        return false;
    }

    const emailValid = (emailInput) => {
        if(emailInput.length > 4)
            return true;
        return false;
    }

    const passwordValid = (passwordInput) => {
        if(passwordInput.length > 7)
            return true;
        return false;
    };

    const cPasswordValid = (cPasswordInput) => {
        if(cPasswordInput === form.password)
            return true;
        return false;
    };

    const formValid = (formInput) => {
        return firstNameValid(formInput.firstName)
            && lastNameValid(formInput.lastName)
            && emailValid(formInput.email)
            && passwordValid(formInput.password)
            && cPasswordValid(formInput.cPassword)
    };

    const formMessage1 = () => {
        return <h2 className="pt-3">Welcome, please submit the form</h2>;
    }
    const formMessage2 = () => {
        return <h2 className="pt-3">Thank you for your submission!</h2>;
    }

    return(
    <div className="d-flex flex-column justify-content-center mx-auto">
        <div className="d-flex flex-column justify-content-center mx-auto col-9">
            <form onSubmit={ onSubmission }>
                { form.hasBeenSubmitted ? formMessage2() : formMessage1()}
                <div className="input-group col-12 border rounded p-1 m-1 bg-dark">
                    <div className="input-group-prepend col-4 bg-info rounded text-light mr-1">
                        <label className="">First Name</label>
                    </div>
                    <input type="text" className="border col-7 ml-2 rounded" name="firstName" onChange={ onChangeHandler } />
                </div>
                {/* if firstNameValid is NOT true AND firstName length > 0 THEN display alert */}
                {!firstNameValid(form.firstName) && form.firstName.length > 0 && <p className="alert alert-danger col-12">Must be at least 2 characters!</p>}

                <div className="input-group col-12 border rounded p-1 m-1 bg-dark">
                    <div className="input-group-prepend col-4 bg-info rounded text-light mr-1">
                        <label className="">Last Name</label>
                    </div>
                    <input type="text" className="border col-7 ml-2 rounded" name="lastName" onChange={ onChangeHandler } />
                </div>
                {!lastNameValid(form.lastName) && form.lastName.length > 0 && <p className="alert alert-danger col-12">Must be at least 2 characters!</p>}

                <div className="input-group col-12 border rounded p-1 m-1 bg-dark">
                    <div className="input-group-prepend col-4 bg-info rounded text-light mr-1">
                        <label className="">Email Address</label>
                    </div>
                    <input type="text" className="border col-7 ml-2 rounded" name="email" onChange={ onChangeHandler } />
                </div>
                {!emailValid(form.email) && form.email.length > 0 && <p className="alert alert-danger col-12">Must be at least 5 characters!</p>}

                <div className="input-group col-12 border rounded p-1 m-1 bg-dark">
                    <div className="input-group-prepend col-4 bg-info rounded text-light mr-1">
                        <label className="">Password</label>
                    </div>
                    <input type="text" className="border col-7 ml-2 rounded" name="password" onChange={ onChangeHandler } />
                </div>
                {!passwordValid(form.password) && form.password.length > 0 && <p className="alert alert-danger col-12">Must be at least 8 characters!</p>}

                <div className="input-group col-12 border rounded p-1 m-1 bg-dark">
                    <div className="input-group-prepend col-4 bg-info rounded text-light mr-1">
                        <label className="">Confirm Password</label>
                    </div>
                    <input type="text" className="border col-7 ml-2 rounded" name="cPassword" onChange={ onChangeHandler } />
                </div>
                {!cPasswordValid(form.cPassword) && form.cPassword.length > 0 && <p className="alert alert-danger col-12">Must match your password!</p>}

                {formValid(form) ? <input type="submit" className="rounded px-2 btn-info shadow" value="Create User" onClick={ onSubmission }/> : <input type="submit" className="rounded px-2 btn-secondary shadow" value="Create User" disabled/>}
            </form>
        </div>
    </div>
    );
};
    
export default UserForm;