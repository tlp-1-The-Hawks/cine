import { CustomFetch } from "../../api/customFetch.js"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
export const AddHallSubmit = ({ formState, selectedButtons, request, hallId }) => {
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = await CustomFetch('http://localhost:4000/auth/user', 'TOKEN', localStorage.getItem('token'))
    if (request === 'POST') {
      const hall = {
        selectedButtons: selectedButtons,
        formState: formState
      }
      const response = await CustomFetch(`http://localhost:4000/api/hall/${user.cinemaId}`, 'POST', hall)
      if (response.errors) {
        return Swal.fire({
          title: 'Error',
          text: response.errors[0].msg,
          icon: 'error',
          width: '50%',
          padding: '1rem',
          background: '#DBCBCB',
          grow: 'row'
        })
      }

      Swal.fire({
        title: '¡Sala agregada!',
        showConfirmButton: 'ok',
        icon: 'success',
        width: '50%',
        padding: '1rem',
        background: '#DBCBCB',
        grow: 'row'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/')
        }
      })
    }
    if (request === 'PUT') {
      const hall = {
        formState: formState,
        selectedButtons: selectedButtons
      }
      const response = await CustomFetch(`http://localhost:4000/api/hall/${hallId}`, 'PUT', hall)
      const data = response.json()
      if (data.errors) {
        return Swal.fire({
          title: 'Error',
          text: response.errors[0].msg,
          icon: 'error',
          width: '50%',
          padding: '1rem',
          background: '#DBCBCB',
          grow: 'row'
        })
      }

      Swal.fire({
        title: '¡Sala actualizada!',
        showConfirmButton: 'ok',
        icon: 'success',
        width: '50%',
        padding: '1rem',
        background: '#DBCBCB',
        grow: 'row'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/')
        }
      })
    }
  }
  return (
    <div className="d-flex justify-content-end">
      <button onClick={handleSubmit} className="text-end btn bg-danger text-white mb-5">Guardar sala</button>
    </div>
  )
}