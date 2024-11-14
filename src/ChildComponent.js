import { useState } from "react";

const ChildComponent = (props) => {

    const [input, setInput] = useState('');

    const handleChange = (event) =>{
        setInput(event.target.value);
        props.data(event.target.value)
    }
    return(
        <div>
            <h2>Child Component</h2>
            <input 
            type="text" 
            value={input} 
            onChange={handleChange} 
            placeholder="Type something..."
            />
        </div>
    );
}

export default ChildComponent;