import { useState, useEffect } from "react"

export const Fetch =()=>{
    const [api, setApi]=useState() 
    const URL="http://localhost:4000/api/cinema"
    useEffect(()=>{
        fetch (URL)
        .then (res=> res.json())
        .then (api=>setApi(api))
    }, [])
    return(
        <>
        
        <ul>
            {api?.map((cine)=>
                (<li key={cine.id}> {cine.name}</li>)
            )}
        </ul>
        </>
    )
}