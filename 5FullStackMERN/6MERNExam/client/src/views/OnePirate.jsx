import React, { useEffect, useState } from "react";
import axios from "axios";

const OnePirate = (props) => {
    const [onePirate, setOnePirate] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/pirate/${props._id}`)
            .then((res) => {
                console.log(res.data.pirate);
                setOnePirate(res.data.pirate);
            });
    }, []);

    return (
        <div>
            <div className="text-center">
                <h1>{onePirate.name}</h1>
            </div>
            <div className="d-flex justify-content-around mt-4">
                <div className="col-5" id="imageSide">
                    <img
                        src={onePirate.imageURL}
                        className="col-12"
                        alt={`portrait of ${onePirate.name}`}
                    />
                    <h3>{onePirate.catchPhrase}</h3>
                </div>
                <div className="col-5 text-left" id="aboutSide">
                    <h4 className="m-3 text-center">About</h4>
                    <table class="table table-borderless table-hover">
                        <tbody>
                            <tr>
                                <th className="text-left" scope="row">
                                    Position:
                                </th>
                                <td>{onePirate.crewPosition}</td>
                            </tr>
                            <tr>
                                <th className="text-left" scope="row">
                                    Treasures:
                                </th>
                                <td>{onePirate.treasureChests}</td>
                            </tr>
                            <tr>
                                <th className="text-left" scope="row">
                                    Peg Leg:
                                </th>
                                {onePirate.hasPegLeg ? (
                                    <td>Yes</td>
                                ) : (
                                    <td>No</td>
                                )}
                            </tr>
                            <tr>
                                <th className="text-left" scope="row">
                                    Eye Patch:
                                </th>
                                {onePirate.hasEyePatch ? (
                                    <td>Yes</td>
                                ) : (
                                    <td>No</td>
                                )}
                            </tr>
                            <tr>
                                <th className="text-left" scope="row">
                                    Hook Hand:
                                </th>
                                {onePirate.hasHookHand ? (
                                    <td>Yes</td>
                                ) : (
                                    <td>No</td>
                                )}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OnePirate;
