import { Titulo } from "../Titulo/Titulo"

export const Formulario = () => {
    return (
      <div style={{border: '5px solid blue'}}>
        {/*<Titulo titulo={"Titulo de formulario"} subtitulo={"subtitulo de formulario"}/>
        <img src="https://images.emojiterra.com/google/android-11/512px/1f436.png" alt="perrito2" />*/}
        <form>
         <input type='text' name='nombre' placeholder='ingrese el nombre' /> 
        </form>
       </div>
    )
  }
