import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./MakeAdmin.css";

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        // sent to database
        fetch("http://localhost:5000/users/admin", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    Swal.fire(
                        "Congrats!",
                        "Admin Added Successfully!",
                        "success"
                    );
                    reset();
                }
            });
    };
    return (
        <div>
            <div>
                <h1 className="text-center hed-color my-4">Make Admin</h1>
            </div>
            <div>
                <div className="card-style py-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className="w-50 p-2 d-block rounded-2 mx-auto add-admin mt-5"
                            {...register("email", {
                                required: true,
                                maxLength: 20,
                            })}
                            type="email"
                            placeholder="Email Address"
                        />
                        <br />
                        <div className="text-center">
                            <input
                                className="home-button"
                                type="submit"
                                value="Add"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;
