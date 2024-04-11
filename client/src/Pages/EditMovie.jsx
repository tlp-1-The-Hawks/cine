import { FormAddMovie } from '../components/Formularios/FormAddMovie.jsx';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { CustomFetch } from '../api/customFetch.js';
import { AuthContext } from '../context/AuthProvider.jsx';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export const EditMovie = () => {
    const [cinemaId, setCinemaId] = useState(null)
    const [hallState, setHallState] = useState([]);
    const [info, setInfo] = useState({})
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const { authState } = useContext(AuthContext)
    const infoId = searchParams.get('info');

    if (!authState.cinema) return (<Navigate to={"/"} />)

    useEffect(() => {
        (async () => {
            const info = await CustomFetch(`http://localhost:4000/api/information/${infoId}`, 'GET')
            const user = await CustomFetch("http://localhost:4000/auth/user", 'TOKEN', localStorage.getItem('token'));
            console.log(info);
            setCinemaId(user.cinemaId);
            const halls = await CustomFetch(`http://localhost:4000/api/hall/${user.cinemaId}`, 'GET')
            setHallState(halls);
            setCinemaId(user.cinemaId)
            setInfo(info)
        })();
    }, []);
    return (
        <>
            <FormAddMovie
                cinemaId={cinemaId}
                hallState={hallState}
                request={'PUT'}
                info={info}
            />
        </>
    )

}