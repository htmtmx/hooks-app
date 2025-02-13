import { AboutContext } from "./AboutContext"

export const AboutProvider = ({ children }) => {
    return (
        <AboutContext.Provider value={{ about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere rem nostrum odit voluptatum deleniti? Beatae sed quam laboriosam tempore illum officia modi labore officiis iusto? Quis debitis facere ipsa modi?' }} >
            {children}
        </AboutContext.Provider>
    );
}
