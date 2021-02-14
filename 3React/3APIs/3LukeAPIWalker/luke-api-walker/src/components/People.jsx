import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const People = (props) => {
    const [people, setPeople] = useState({});

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/people/${props.id}`)
            .then((res) => {
                setPeople(res.data);
            })
            .catch(() => navigate(`/error`));
    }, [props.id]);

    return (
        <div className="d-flex flex-column justify-content-around align-items-center col-10 mx-auto m-4">
            <div className="p-2 bg-info m-1 rounded col-12 shadow">
                <h2 className="my-auto p-3 col-12 text-center bg-dark text-light display-4">
                    <u>{people.name}</u>
                </h2>
            </div>
            <div className="bg-info rounded col-12 p-2 d-flex flex-column shadow">
                <table className="table-dark table-bordered table striped table-hover my-auto">
                    <tbody>
                        <tr>
                            <th scope="row">Homeworld</th>
                            <td>
                                <a
                                    href={people.homeworld}
                                    alt="link to homeworld of character"
                                    className="text-light"
                                >
                                    <u>Go to galaxy far, far away...</u>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Height in cm</th>
                            <td>{people.height}</td>
                        </tr>
                        <tr>
                            <th scope="row">Mass in kg</th>
                            <td>{people.mass}</td>
                        </tr>
                        <tr>
                            <th scope="row">Hair</th>
                            <td>{people.hair_color}</td>
                        </tr>
                        <tr>
                            <th scope="row">Skin Color</th>
                            <td>{people.skin_color}</td>
                        </tr>
                        <tr>
                            <th scope="row">Eye Color</th>
                            <td>{people.eye_color}</td>
                        </tr>
                        <tr>
                            <th scope="row">Birth Year</th>
                            <td>{people.birth_year}</td>
                        </tr>
                        <tr>
                            <th scope="row">gender</th>
                            <td>{people.gender}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default People;
