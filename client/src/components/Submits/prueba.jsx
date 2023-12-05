import React from 'react'
import { CustomFetch } from '../../api/customFetch'


export const Prueba= ()=> {
  const estilo = {
    color: 'black',
    fontSize: '160px',
    backgroundColor: 'lightBlue',
  };
        (
            async () => {
                const response = await CustomFetch(`http://localhost:4000/api/movies/${1}/${2}`, 'GET')
                console.log(response)
            }
        )()
        return(
          <div style={estilo}>
            <p className='color'>Prueba</p></div>

        ) 
}


