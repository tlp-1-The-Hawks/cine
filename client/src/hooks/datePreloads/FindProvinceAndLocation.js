export async function FindPrivinces(){
    const response = await fetch('http://localhost:4000/api/province')

    const data = await response.json()

    return data
}

export async function FindLocation(provinceId){
    const response = await fetch(`http://localhost:4000/api/location/${provinceId}`)

    const data = await response.json()

    return data
}