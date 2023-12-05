import { CustomFetch } from "../api/customFetch"

export const Prueba = () => {
  (
    async () => {
      const response = await CustomFetch(`http://localhost:4000/api/movies/${2}/${1}`, 'GET')
      console.log(response);
    }
  )()
  return (
    <h1>Pruba</h1>
  )
}
