import React from 'react'

export default function Prueba() {
    
 
        const response = CustomFetch(`http://localhost:4000/api/movies/${1}/${1}`, 'GET')

        console.log(response)

        return(
            <div>prueba</div>
        ) 
}

