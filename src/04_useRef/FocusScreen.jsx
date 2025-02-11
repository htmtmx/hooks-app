import { useRef } from "react"

export const FocusScreen = () => {
    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select();
    }
    return (
        <>
            <div>FocusScreen</div>
            <hr />
            <input
                ref={inputRef}
                className="form-control"
                type="text"
                placeholder="Username" />
            <button className="btn btn-primary mt-3" onClick={onClick}>
                Focus input
            </button>
        </>

    )
}
