import { useState } from "react"
export const useCounter = (min,max) => {
    const [counter, setcounter] = useState(min)
    const handleAdd = () => {
        if (counter < max){
            setcounter(counter+1)
        }
    }
    const handleRemove = () => {
        if (counter > min){
        setcounter(counter-1)
        }
    }
    return {counter, handleAdd, handleRemove}
}