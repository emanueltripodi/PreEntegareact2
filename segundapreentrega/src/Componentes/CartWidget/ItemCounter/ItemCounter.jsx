import { useState } from "react"

const useCounter = () => {
    
}
export const ItemCounter = (initial=1, stock=7, onADD) => {
    const [counter, setcounter] = useState(initial)


    const handleAdd = () => {
        if (counter < stock){
            setcounter(counter+1)
        }
    }
    const handleRemove = () => {
        if (counter > initial){
        setcounter(counter-1)
        }
    }
    const handleOnADD = () => {
        onADD(counter)
    }
    return (
        <div className="w-25">
            <label>{counter}</label>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleRemove}>-</button>
            <button onClick={handleOnADD}>Agregar al carrito</button>
        </div>
      )
    }
