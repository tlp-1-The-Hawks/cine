import '../../assets/style/FormRegisterCinema.css'
import { Link } from 'react-router-dom'
export const FormRegisterCinema = () => {

    return(
        <>
        <div className='contenedorRegisterCine'>
       <div className='formBoxRegisterCine'>
         <form name='formregister'>
            <div className='container'></div>
                <h2 className='mt-2'>Registro de Cines: Solicitud de aprobación</h2>
                <div className='row'>
                    <div className='col d-flex justify-content-center'>
                        <div className="inputBoxRegister row">
                        <input placeholder='Nombre del cine' type="text" /> 
                        </div>
                    </div>
                    <div className='col d-flex justify-content-center'>
                        <div className="inputBoxRegister row">
                            <label htmlFor="">Ubicación</label>
                            <select className='w-50' name="" id="">
                                <option value="">Provincia</option>
                                <option value="">Formosa</option>
                            </select>
                            <select className='w-50' name="" id="">
                                <option value="">Departamento</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col d-flex justify-content-center'>
                        <div className="inputBoxRegister row">
                        <input placeholder='Dirección' type="text" /> 
                        </div>
                    </div>
                    <div className='col d-flex justify-content-center'>
                        <div className="inputBoxRegister row">
                         <input placeholder='Email' type="text" /> 
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col d-flex justify-content-center'>
                        <div className="inputBoxRegister row">
                        <input placeholder='Teléfono' type="text" /> 
                        </div>
                    </div>
                    <div className='col d-flex justify-content-center'>
                        <div className="inputBoxRegister row">
                         <input placeholder='CUIT de la empresa' type="text" /> 
                        </div>
                    </div>
                </div>
                <div className='groupRegisterCine'>
                    <div className='row'>
                        <div className='col'>
                        <button className='botonRegisterCine btn'>Enviar</button>
                
                        </div>
                        <div className="col">
                            <Link className='botonRegisterCine btn' to={'/soporte'}>Cancelar</Link>
                        </div>
                    </div>
              
             </div>
         </form>
       </div>
     </div>
    </>
    )

}