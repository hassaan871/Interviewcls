import { useContext, useState } from "react";
import MyContext from "../Context/MyContext";
import GrandChildComponent from "./GrandChildComponent";

const ChildComponent = (props) => {

    const {childColor, setChildColor} = useContext(MyContext);

    
    return(
        <div>
            <h2 style={{color: childColor}}>Child Component</h2>
            <GrandChildComponent />
        </div>
    );
}

export default ChildComponent;