import React from "react";

const PirateForm = (props) => {
    return (
        <div>
            <form
                onSubmit={props.onSubmitHandler}
                className="d-flex justify-content-around"
            >
                <div className="d-flex flex-column" id="leftSide">
                    <div className="form-group">
                        <label>Pirate Name:</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            onChange={props.onChangeHandler}
                            value={props.form.name}
                        />
                    </div>
                    {props.error.name ? (
                        <span className="alert text-danger">
                            {props.error.name.message}
                        </span>
                    ) : (
                        ""
                    )}
                    <div className="form-group">
                        <label>Image Url:</label>
                        <input
                            type="text"
                            name="imageURL"
                            className="form-control"
                            onChange={props.onChangeHandler}
                            value={props.form.imageURL}
                        />
                    </div>
                    {props.error.imageURL ? (
                        <span className="alert text-danger">
                            {props.error.imageURL.message}
                        </span>
                    ) : (
                        ""
                    )}
                    <div className="form-group">
                        <label># of Treasure Chests:</label>
                        <input
                            type="text"
                            name="treasureChests"
                            className="form-control"
                            onChange={props.onChangeHandler}
                            value={props.form.treasureChests}
                        />
                    </div>
                    {props.error.treasureChests ? (
                        <span className="alert text-danger">
                            {props.error.treasureChests.message}
                        </span>
                    ) : (
                        ""
                    )}
                    <div className="form-group">
                        <label>Catch Phrase:</label>
                        <input
                            type="text"
                            name="catchPhrase"
                            className="form-control"
                            onChange={props.onChangeHandler}
                            value={props.form.catchPhrase}
                        />
                    </div>
                    {props.error.catchPhrase ? (
                        <span className="alert text-danger">
                            {props.error.catchPhrase.message}
                        </span>
                    ) : (
                        ""
                    )}
                </div>
                <div className="d-flex flex-column" id="righttSide">
                    <div className="form-group">
                        <label>Crew Position:</label>
                        <select
                            name="crewPosition"
                            className="form-control"
                            onChange={props.onChangeHandler}
                            value={props.form.crewPosition}
                        >
                            <option>Captain</option>
                            <option>First Mate</option>
                            <option>Quarter Master</option>
                            <option>Boatswain</option>
                            <option>Powder Monkey</option>
                        </select>
                    </div>
                    {props.error.crewPosition ? (
                        <span className="alert text-danger">
                            {props.error.crewPosition.message}
                        </span>
                    ) : (
                        ""
                    )}
                    <div className="form-group">
                        <input
                            className="col-1"
                            type="checkbox"
                            name="hasPegLeg"
                            onChange={props.checkHandler}
                            value={props.form.hasPegLeg}
                            checked={props.form.hasPegLeg}
                        />
                        <label className="text-left col-11">Peg Leg</label>
                    </div>
                    {props.error.hasPegLeg ? (
                        <span className="alert text-danger">
                            {props.error.hasPegLeg.message}
                        </span>
                    ) : (
                        ""
                    )}
                    <div className="form-group">
                        <input
                            className="col-1"
                            type="checkbox"
                            name="hasEyePatch"
                            onChange={props.checkHandler}
                            value={props.form.hasEyePatch}
                            checked={props.form.hasEyePatch}
                        />
                        <label className="text-left col-11">Eye Patch</label>
                    </div>
                    {props.error.hasEyePatch ? (
                        <span className="alert text-danger">
                            {props.error.hasEyePatch.message}
                        </span>
                    ) : (
                        ""
                    )}
                    <div className="form-group">
                        <input
                            className="col-1"
                            type="checkbox"
                            name="hasHookHand"
                            onChange={props.checkHandler}
                            value={props.form.hasHookHand}
                            checked={props.form.hasHookHand}
                        />
                        <label className="text-left col-11">Hook Hand</label>
                    </div>
                    {props.error.hasHookHand ? (
                        <span className="alert text-danger">
                            {props.error.hasHookHand.message}
                        </span>
                    ) : (
                        ""
                    )}
                    <input
                        type="submit"
                        value="Add Pirate"
                        className="btn-primary rounded shadow p-1 mx-auto"
                    />
                </div>
            </form>
        </div>
    );
};

export default PirateForm;
