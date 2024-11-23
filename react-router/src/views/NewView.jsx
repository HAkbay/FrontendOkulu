import { Outlet } from "react-router-dom"

const NewView = () => {
    return (
        <>
            <h1>News</h1>
            <Outlet />
        </>
    )
}

export default NewView