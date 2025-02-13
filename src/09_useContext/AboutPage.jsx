import { AboutProvider } from "./context/AboutProvider";
import { AboutItem } from "./AboutItem";

export const AboutPage = () => {
    return (
        <AboutProvider>
            <h1>About Page</h1>
            <AboutItem/>
            <hr />
        </AboutProvider>
    )
}
