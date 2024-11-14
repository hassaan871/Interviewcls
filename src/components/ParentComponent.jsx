import { useState } from "react";
import ChildComponent from "./ChildComponent";
import MyContext from "../Context/MyContext";

const ParentComponent = () => {

  const [parentColor, setParentColor] = useState('')
  const [childColor, setChildColor] = useState('green')
  const [grandChildColor, setGrandChildColor] = useState('blue')

  return (
    <MyContext.Provider value={{ 
        childColor, 
        setChildColor, 
        grandChildColor, 
        setGrandChildColor, 
        parentColor, 
        setParentColor 
      }}>
      <h2 style={{ color: parentColor }}>Parent Component</h2>
      <ChildComponent />
    </MyContext.Provider>
  );
}

export default ParentComponent;
