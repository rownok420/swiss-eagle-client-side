import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import "./Subscribe.css";

const Subscribe = () => {
    return (
        <div className="py-5">
            <div className="container">
                <div className="text-center pt-5 pb-4 card-style">
                    <div>
                        <h1 style={{ color: "#00a3c8" }}>
                            Subscribe To Our NewsLetter !
                        </h1>
                    </div>
                    <div className="w-50 mx-auto my-5 form-style">
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Enter your email"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                className="p-2"
                            />
                            <button
                                className="btn text-white button-color"
                                id="button-addon2"
                            >
                                Subscribe
                            </button>
                        </InputGroup>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
