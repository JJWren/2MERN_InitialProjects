import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const Planets = (props) => {
    const [planets, setPlanets] = useState({});

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/planets/${props.id}`)
            .then((res) => {
                setPlanets(res.data);
            })
            .catch(() => navigate(`/error`));
    }, [props.id]);

    return (
        <div className="d-flex flex-column justify-content-around align-items-center col-10 mx-auto m-4">
            <div className="p-2 bg-info m-1 rounded col-12 shadow">
                <h2 className="my-auto p-3 col-12 text-center bg-dark text-light display-4">
                    <u>{planets.name}</u>
                </h2>
            </div>
            <div className="bg-info rounded col-12 p-2 d-flex flex-column shadow">
                <table className="table-dark table-bordered table striped table-hover my-auto">
                    <tbody>
                        <tr>
                            <th scope="row">Rotation Period</th>
                            <td>{planets.rotation_period}</td>
                        </tr>
                        <tr>
                            <th scope="row">Orbital Period</th>
                            <td>{planets.orbital_period}</td>
                        </tr>
                        <tr>
                            <th scope="row">Diameter</th>
                            <td>{planets.diameter}</td>
                        </tr>
                        <tr>
                            <th scope="row">Climate</th>
                            <td>{planets.climate}</td>
                        </tr>
                        <tr>
                            <th scope="row">Gravity</th>
                            <td>{planets.gravity}</td>
                        </tr>
                        <tr>
                            <th scope="row">Terrain</th>
                            <td>{planets.terrain}</td>
                        </tr>
                        <tr>
                            <th scope="row">Population</th>
                            <td>{planets.population}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Planets;
