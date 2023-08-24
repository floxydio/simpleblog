import { createSignal } from "solid-js"
import "./Headers.css"
export default function Headers() {
  return (
    <>
       <div className="header__main">
       <h2>Dio Blog</h2>
        <div className="header__nav">
            <span>Github</span>
            <span>Linkedin</span>
            <span className="btn__login">Login</span>
        </div>
       </div>
    </>
  )
}
