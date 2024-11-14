import React, { useState } from 'react'
import useRenderCount from '../../hooks/useRenderCount'

const RenderCountTracker = () => {

    const useRender = useRenderCount();
    const [value, setValue] = useState(0);

    return (
        <div>
            <h2>Value: {value}</h2>
            <h3>Page Render: {useRender} </h3>
            <button onClick={()=>{setValue(value+5)}}>Increment</button>
        </div>
    )
}

export default RenderCountTracker
