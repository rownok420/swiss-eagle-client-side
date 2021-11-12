import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./MakeAdmin.css";

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const [users, setUser] = useState();
    const [update, setUpdate] = useState(null);

    const onSubmit = (data) => {
        // sent to database
        fetch("https://thawing-caverns-72785.herokuapp.com/users/admin", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    setUpdate(!update);
                    Swal.fire(
                        "Congrats!",
                        "Admin Added Successfully!",
                        "success"
                    );
                    reset();
                } else {
                    Swal.fire("Sorry!", "Invalid Email Address", "success");
                    reset();
                    setUpdate(false);
                }
            });
    };

    useEffect(() => {
        fetch("https://thawing-caverns-72785.herokuapp.com/users")
            .then((res) => res.json())
            .then((data) => setUser(data));
    }, [update]);

    return (
        <div>
            <Container>
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

                <div className="my-5">
                    <Table striped bordered hover responsive className="mb-5">
                        <thead className="text-center">
                            <tr>
                                <th className="py-3 fs-5">Name</th>
                                <th className="py-3 fs-5">Email</th>
                                <th className="py-3 fs-5">Role</th>
                            </tr>
                        </thead>
                        {users?.map((user) => (
                            <tbody className="text-center" key={user._id}>
                                <tr>
                                    <td className="py-3">
                                        <span className="fw-bold text-muted">
                                            {user?.displayName}
                                        </span>
                                    </td>

                                    <td className="py-3">
                                        <span className="fw-bold text-muted">
                                            {user?.email}
                                        </span>
                                    </td>
                                    <td className="py-3">
                                        {user?.role === "admin" ? (
                                            <h6 className="text-success fw-bolder">
                                                {user?.role} {""}
                                            </h6>
                                        ) : (
                                            <h6 className="text-danger fw-bolder">
                                                basic
                                            </h6>
                                        )}
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </div>
            </Container>
        </div>
    );
};

export default MakeAdmin;
