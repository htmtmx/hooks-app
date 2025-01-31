import { useEffect } from "react";
import { useSimpleForm } from "../hooks/useSimpleForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {

    const { formState, onChange, resetForm } = useSimpleForm({
        username: '',
        email: '',
        password: ''
    });

    const { username, email, password } = formState;

    return (
        <section className="container vh-100 d-flex flex-column justify-content-center align-items-center">
            <h1>Formulario con custom hook</h1>
            <form action="" className="d-flex flex-column gap-2">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Username"
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
                <input
                    className="form-control"
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    value={password}
                    onChange={onChange}
                />
                <button className="btn btn-secondary" onClick={resetForm}>Reset</button>
                <button type="submit" className="btn btn-primary">Submit</button>
                {username === 'htmtmx1' && <Message/>}
            </form>
        </section>
    )
}
