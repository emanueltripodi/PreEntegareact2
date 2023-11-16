import { ItemCounter } from './Componentes/CartWidget/ItemCounter/ItemCounter'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const onADD = (cantidad) =>{
console.log("seleccionaste: "+cantidad);
  }
  return (
  <>
  <div className='container'>
<menu />
<Home greeting="saludo app"/>
<ItemCounter  initial= {1} stok ={7} onADD= {onADD} />

  </div>
  </>
  )
}


export default App