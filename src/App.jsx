import { useContext, useState } from "react";
import ChildComponent from "./components/ChildComponent";
import MyContext from "./Context/MyContext";
import GrandChildComponent from "./components/GrandChildComponent";

const App = () => {

  // const {parentColor, setParentColor} = useContext(MyContext)
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

export default App;
