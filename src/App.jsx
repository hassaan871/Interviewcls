import { type } from "@testing-library/user-event/dist/type";
import ParentComponent from "./components/ParentComponent"
import RenderCountTracker from "./components/RenderCountTracker.js/RenderCountTracker";
import { useState, createContext, useContext, useReducer } from 'react';

const UserContext = createContext();

// const initialTodos = [{
//   id:1,
//   title:"Todo 1",
//   complete: false
// },{
//   id:2,
//   title:"Todo 2",
//   complete: true
// }];


// const [count, setCount] = useState(0);

const initialState = { count: 0 };
const reducer = (state, action) => {
  if (action.type === "increment") {
    return { count: state.count + 1 }
  } else if (action.type === "decrement") {
    return { count: state.count - 1 }
  } else if (action.type === "reset") {
    return initialState;
  } else {
    throw new Error("Unknown action type");
    ;

  }
}


const App = () => {
  return (
    <ReducerHook />
  )
}

const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => { dispatch({ type: "increment" }) }}>Increment</button>
      <button onClick={() => { dispatch({ type: "decrement" }) }}>Decrement</button>
      <button onClick={() => { dispatch({ type: "reset" }) }}>Reset</button>
    </div>
  )
}
// const App = () => {
//   const [user, setUser] = useState('Hassaan');
//   const handleChange = (event) => {
//     setUser(event.target.value);
//   }

//   return(
//     // <ParentComponent />
//     // <RenderCountTracker />
//     <UserContext.Provider value={user}>
//       <h1>Component 01</h1>
//       <input
//         type="text"
//         value={user}
//         onChange={handleChange}
//         placeholder="type something"
//       />
//       <Component2/>
//     </UserContext.Provider>

//   )
// }

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  )
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  )
}

function Component4() {
  const user = useContext(UserContext);
  return (
    <>
      <h1>{`hello from ${user}`}</h1>
    </>
  )
}
export default App;