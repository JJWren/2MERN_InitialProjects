import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const Main = (props) => {
    const [pirates, setPirates] = useState();
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates").then((res) => {
            setPirates(res.data.pirates);
            console.log(res.data.pirates);
        });
    }, [update]);

    const removePirate = (_id) => {
        axios
            .delete(`http://localhost:8000/api/pirate/delete/${_id}`)
            .then((res) => {
                console.log("A pirate has walked the plank");
                setUpdate(!update);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <div className="text-center">
                <h1>Pirate Crew</h1>
                <Link to="/pirate/new" className="btn btn-primary shadow">
                    Add Pirate
                </Link>
            </div>
            <div className="col-10 mx-auto">
                {pirates
                    ? pirates.map((pirate, i) => {
                          return (
                              <div className="d-flex m-3">
                                  <img
                                      src={pirate.imageURL}
                                      className="col-4"
                                      alt={`portrait of ${pirate.name}`}
                                  />
                                  <div className="col-9 text-center">
                                      <h5>{pirate.name}</h5>
                                      <div className="d-flex justify-content-around">
                                          <Link
                                              to={`/pirate/${pirate._id}`}
                                              className="btn btn-primary shadow col-5"
                                          >
                                              View Pirate
                                          </Link>
                                          <button
                                              className="btn btn-danger shadow col-5"
                                              onClick={() =>
                                                  removePirate(pirate._id)
                                              }
                                          >
                                              Walk the Plank
                                          </button>
                                      </div>
                                  </div>
                              </div>
                          );
                      })
                    : ""}
            </div>
        </div>
    );
};

export default Main;
