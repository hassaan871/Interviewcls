import ParentComponent from "./components/ParentComponent"
import RenderCountTracker from "./components/RenderCountTracker.js/RenderCountTracker";
import {useState, createContext, useContext} from 'react';

const UserContext = createContext();
const App = () => {
  const [user, setUser] = useState('Hassaan');
  const handleChange = (event) => {
    setUser(event.target.value);
  }

  return(
    // <ParentComponent />
    // <RenderCountTracker />
    <UserContext.Provider value={user}>
      <h1>Component 01</h1>
      <input
        type="text"
        value={user}
        onChange={handleChange}
        placeholder="type something"
      />
      <Component2/>
    </UserContext.Provider>

  )
}

function Component2(){
  return(
    <>
    <h1>Component 2</h1>
    <Component3/>
    </>
  )
}

function Component3(){
  return(
    <>
    <h1>Component 3</h1>
    <Component4/>
    </>
  )
}

function Component4(){
  const user = useContext(UserContext);
  return(
    <>
    <h1>{`hello from ${user}`}</h1>
    </>
  )
}
export default App;