import { useState } from "react";
function Button(props) {
 
    return(
    <button onClick={props.handleClick}>Click Me</button>
    )
}

export default Button;