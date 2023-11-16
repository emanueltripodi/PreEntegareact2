import { useCounter } from "../../../hocks/UseCounter"


export const ItemCounter = (initial=1, stock=7, onADD) => {
    const {counter, handleAdd,handleRemove } = useCounter(initial,stock)

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
