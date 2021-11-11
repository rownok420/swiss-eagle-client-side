import React from "react";
import img from "../../../images/sad.png";

const PayBill = () => {
    return (
        <div>
            <div className="text-center">
                <div className="container my-5">
                    <h1 className="hed-color">Payment system coming soon!</h1>
                    <div>
                        <img
                            src={img}
                            className="w-75 p-5 notFound-img"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PayBill;
