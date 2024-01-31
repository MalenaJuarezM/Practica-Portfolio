import React, { useEffect, useState } from 'react'
import { trabajos } from '../data/trabajos'
import { useParams } from 'react-router-dom'

export const Detalle = () => {

    const [proyecto, setProyecto] = useState({})

    const params = useParams()

    useEffect(() => {
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);
        setProyecto(proyecto[0])
    }, [])

    return (
        <div className='page page-work'>
            <div className='mask'>
                <img src={"/images/" + proyecto.id + ".png"}></img>
            </div>
            <h1 className="heading">{proyecto.nombre}</h1>
            <p>{proyecto.tecnologias}</p>
            <p>{proyecto.descripcion}</p>
            <a href={"https://" + proyecto.url} target="_blank">Visitar</a>
        </div>
    )
}
