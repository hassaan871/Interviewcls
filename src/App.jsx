import { useState } from "react";
import ChildComponent from "./ChildComponent";
import MyContext from "./Context/MyContext";

const App = () => {

  const [color, setColor] = useState('green')
  return (
   <MyContext.Provider value={{color, setColor}}>
    <h2>Parent Component</h2>
    <ChildComponent />
   </MyContext.Provider>
  );
}

export default App;
