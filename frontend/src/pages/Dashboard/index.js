import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Api from '../../services/api'
import './style.css'

export default function Dashboard() {
    const [spots, setSpots] = useState([])

    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user')
            const response = await Api.get('/dashboards', {
                headers: { user_id }
            })

            setSpots(response.data)
        }

        loadSpots()
    }, []) //?array dependencia: toda vez que valor alterar, exec a função. Se vazio, executa 1x

    return (
        <>
            <ul className="spot-list">
                {spots.map(spot => (
                    <li key={spot._id}>
                        <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
                        <strong>{spot.company}</strong>
                        <span>{spot.price ? `R$${spot.price}/dia` : `GRATUITO`}</span>
                    </li>
                ))}
            </ul>
            <Link to="/new">
                <button className="btn">Register new spot</button>
            </Link>
        </>
    )
}
