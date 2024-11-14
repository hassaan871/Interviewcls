import { useContext, useState } from "react";
import MyContext from "./Context/MyContext";

const GrandChildComponent = () => {

    const { grandChildColor, SetGrandChildColor } = useContext(MyContext)
    const { parentColor, setParentColor } = useContext(MyContext)
    const [temp, setTemp] = useState('')
    const handleChange = (event) => {
        // SetParentColor(event.target.value)
        setTemp(event.target.value)
    }

    const handleSubmit = () => {
        setParentColor(temp)
    }

    return (
        <div>
            <h2 style={{ color: grandChildColor }}>Grand Child Component</h2>
            <input
                type="text"
                value={temp}
                onChange={handleChange}
                placeholder="Enter Color for parent..."
            />
            <button onClick={handleSubmit}>
                Change Color
            </button>
        </div>
    )
}

export default GrandChildComponent;