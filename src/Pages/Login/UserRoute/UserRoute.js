import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../../../Hooks/useAuth";

const UserRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();

    if (isLoading) {
        return (
            <div className="text-center my-5">
                <Spinner animation="border" variant="info" />
            </div>
        );
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && !admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/dashboard",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default UserRoute;
