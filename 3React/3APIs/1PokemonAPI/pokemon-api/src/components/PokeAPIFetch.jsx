import React, { useState, useEffect } from "react";
import axios from "axios";

const PokeAPIFetch = () => {
    const [pokemon, setPokemon] = useState([]);
    const [isClicked, setIsClicked] = useState(false);

    // Version #1 (basic fetch)
    // fetch("https://pokeapi.co/api/v2/pokemon?limit=60&offset=60")
    //     .then(response => {
    //         return response.json();
    //     }).then(response => {
    //         console.log(response);
    //     }).catch(err=>{
    //         console.log(err);
    //     })

    // Version #2 (intro useEffect)
    // useEffect(() => {
    //     fetch("https://pokeapi.co/api/v2/pokemon")
    //         .then(response => response.json())
    //         .then(response => console.log(response.results))
    // }, [])

    // Version #3 (Axios)
    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=1050")
            .then((res) => setPokemon(res.data.results));
    }, []);

    const clickHandler = (e) => {
        e.preventDefault();
        if (isClicked === false) {
            setIsClicked(true);
        } else {
            setIsClicked(false);
        }
    };

    return (
        <div className="d-flex flex-column text-center">
            <h3>Hello from the API Component!</h3>
            <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/25.gif"
                alt="Shiny Pikachu gif"
                className="col-2 mx-auto"
            />
            <button
                type="button"
                className="m-3 mx-auto col-3 p-3 btn-success rounded shadow"
                onClick={clickHandler}
            >
                Fetch Pokemon
            </button>

            <table class="table table-striped table-hover table-bordered col-10 mx-auto shadow">
                <thead>
                    <tr>
                        <th scope="col-4">#</th>
                        <th scope="col-8">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {isClicked
                        ? pokemon.map((mon, i) => {
                              return (
                                  <tr>
                                      <td scope="col-4">{i + 1}</td>
                                      <td scope="col-8">{mon.name}</td>
                                  </tr>
                              );
                          })
                        : null}
                </tbody>
            </table>
        </div>
    );
};

export default PokeAPIFetch;
