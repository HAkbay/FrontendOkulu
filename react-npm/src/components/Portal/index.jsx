import ReactDOM from "react-dom"
const Portal = ({ target, text }) => {
    return ReactDOM.createPortal(
        <div>Hello world, I'm a portal, and my target is {text}.</div>, target
    )
}

export default Portal