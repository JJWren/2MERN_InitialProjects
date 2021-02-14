import React, { useState, useEffect } from "react";
import axios from "axios";

const Main = (props) => {
    const [authors, setAuthors] = useState();
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/view/all").then((res) => {
            setAuthors(res.data.authors);
            console.log(res.data.authors);
        });
    }, [update]);

    const removeAuthor = (_id) => {
        axios
            .delete(`http://localhost:8000/api/authors/delete/${_id}`)
            .then((res) => {
                console.log("An author was removed");
                setUpdate(!update);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="text-left col-10 mx-auto">
            <p className="col-10">We have quotes by:</p>
            <table className="table table-borderless table-hover">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors
                        ? authors.map((author, i) => {
                              return (
                                  <tr>
                                      <th className="text-left" scope="row">
                                          <a
                                              href={`http://localhost:3000/authors/${author._id}`}
                                          >
                                              {author.name}
                                          </a>
                                      </th>
                                      <td>
                                          <a
                                              href={`http://localhost:3000/authors/${author._id}/edit`}
                                              className=" btn btn-info rounded m-1"
                                          >
                                              Edit
                                          </a>
                                          <button
                                              onClick={() =>
                                                  removeAuthor(author._id)
                                              }
                                              className="btn btn-danger rounded m-1"
                                          >
                                              Delete
                                          </button>
                                      </td>
                                  </tr>
                              );
                          })
                        : ""}
                </tbody>
            </table>
        </div>
    );
};

export default Main;
