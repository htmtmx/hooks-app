import { UserContext } from "./UserContext";

const user = {
    id: 123,
    name: 'Cesar Pineda',
    email: 'mail@mail.com',
}

export const UserProvider = ({children}) => {
    return (
        <UserContext.Provider value={{ hola: 'Mundo', user }} >
            { children }
        </UserContext.Provider>
    );
}
