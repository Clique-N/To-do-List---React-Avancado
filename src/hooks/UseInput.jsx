import { useState } from "react";

export function useInput(initialValue = ''){
    
    const [taskValue, setTaskValue] = useState(initialValue);

    const onChange = (e) => {
        setTaskValue(e.target.value);
    }
    const reset = () => setTaskValue("");

    return{
        taskValue,
        onChange,
        reset
    }
}