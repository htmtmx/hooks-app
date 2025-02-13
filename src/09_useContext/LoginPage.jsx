import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
    const algo = useContext(UserContext);
    console.log(algo);
  return (
      <>
          <h1>Login Page</h1>
            <hr />
      </>
  )
}
