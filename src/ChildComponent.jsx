import { useContext, useState } from "react";
import MyContext from "./Context/MyContext";

const ChildComponent = (props) => {

    const {color, setColor} = useContext(MyContext);

    
    return(
        <div>
            <h2 style={{color: color}}>Child Component</h2>
        </div>
    );
}

export default ChildComponent;