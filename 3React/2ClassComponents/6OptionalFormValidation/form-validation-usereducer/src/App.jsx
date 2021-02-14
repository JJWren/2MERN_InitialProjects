import React, { useReducer } from  'react';

const initialState = {
  fname: {
    value: '',
    error: null
  },
  lname: {
    value: '',
    error: null
  },
  email: {
    value: '',
    error: null
  }
};

function reducer(state, action) {
  return {
    ...state,
    [action.type]: action.payload
  };
}

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(e) {
    const {name, value} = e.target;
    dispatch({
      type: name,
      payload: value
    });
  }

  return (
    <div>
        {JSON.stringify(state)}
        <div>
            <label>
                <span>Name:</span>{' '}
                <input
                    name="fname"
                    value={state.fname}
                    onChange={handleChange}
                />
            </label>
        </div>
        <div>
            <label>
                <span>Name:</span>{' '}
                <input
                    name="lname"
                    value={state.lname}
                    onChange={handleChange}
                />
            </label>
        </div>
        <div>
            <label>
                <span>Email:</span>{' '}
                <input
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                />
            </label>
        </div>
    </div>
  );
}

const ValidateEmail(emailInput) 
{
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailInput.value)) {
    return (true)
  }
  else {
    alert("You have entered an invalid email address!")
    return (false)
  }
}



function Form() {
  return (
    <div className="">
      <form>
        <div className="form group">
          <label>First Name</label>
          <input type="text"></input>
        </div>
      </form>
    </div>
  );
}

export default Form;
