import { CustomFetch } from "../../api/customFetch.js"
const token = localStorage.getItem('token')

export const AddHallSubmit = ({ formState, selectedButtons}) => {

    const handleSubmit = async (e) => {
      e.preventDefault()

        const user = await CustomFetch('http://localhost:4000/auth/user', 'TOKEN', token)


        const hall = {
          selectedButtons: selectedButtons,
          formState: formState
        }
   
        const response = await CustomFetch(`http://localhost:4000/api/hall/${user.cinemaId}`, 'POST', hall)

    }
    return(
        <div className="d-flex justify-content-end">
                <button onClick={handleSubmit} className="text-end btn bg-danger text-white mb-5">Guardar sala</button>
         </div>
    )
}