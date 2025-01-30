import { useEffect } from "react";
import { useSimpleForm } from "../hooks/useSimpleForm";
import { Message } from "./Message";

export const SimpleForm = () => {
    const {formState, onChange } = useSimpleForm();
    const { username, email } = formState;

    useEffect(() => {
        // console.log("Use effect called");
    }, []);

    useEffect(() => {
        // console.log("formState changed");
    }, [formState]);

    useEffect(() => {
        // console.log("email changed");
    }, [email]);

    return (
        <section className="container vh-100 d-flex flex-column justify-content-center align-items-center">
            <h1>SimpleForm</h1>
            <form action="" className="d-flex flex-column gap-2">
                <input
                    className="form-control"
                    type="text"
                    placeholder="User name"
                    name="username"
                    value={username}
                    onChange={onChange}
                />
                <input
                    className="form-control"
                    type="email"
                    placeholder="email@example.com"
                    name="email"
                    value={email}
                    onChange={onChange}
                />
                {username === 'htmtmx1' && <Message/>}
            </form>
        </section>
    )
}
