import { useState } from "react";
function Button(props) {
 
    return(
    <button className="click-button" onClick={props.handleClick}>Click Me</button>
    )
}

export default Button;