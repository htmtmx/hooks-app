import { useContext } from "react"
import { AboutContext } from "./context/AboutContext";

export const AboutItem = () => {
    const aboutContext = useContext(AboutContext);
    console.log(aboutContext);
  return (
    <div>AboutItem</div>
  )
}
