import { useState } from "react";
import ChildComponent from "./ChildComponent";

const App = () => {

  const [data, setData] = useState('');
  const handleChildData = (inputData) =>{
    setData(inputData);
  }

  return (
    <div>
      <h1>Child to Parent Data Transfer</h1>
      <h3>Data: {data}</h3>
      <ChildComponent data = {handleChildData} />
    </div>
  );
}

export default App;
