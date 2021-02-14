import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const OneAuthor = (props) => {
    const [oneAuthor, setOneAuthor] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/authors/view/${props._id}`)
            .then((res) => {
                console.log(res.data.author);
                setOneAuthor(res.data.author);
            });
    }, []);

    return (
        <div>
            {oneAuthor ? (
                <div className="text-left col-10 mx-auto">
                    <h4 className="col-10 text-info">
                        <u>{oneAuthor.name}</u>
                    </h4>
                    <p>
                        <b>Quote: </b>
                        {oneAuthor.quote}
                    </p>
                </div>
            ) : (
                <div>
                    <h1 className="Display-1 alert-danger text-danger">
                        Error 404
                    </h1>
                    <h5 className="col-10 mx-auto">Author doesn't exist...</h5>
                    <h5>
                        <Link to="/authors/new">Click here</Link> if you would
                        like to add one!
                    </h5>
                </div>
            )}
        </div>
    );
};

export default OneAuthor;
