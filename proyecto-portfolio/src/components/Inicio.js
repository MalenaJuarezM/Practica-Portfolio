import React from 'react'
import { Link } from 'react-router-dom'
import { Listado } from './Listado'

export const Inicio = () => {
    return (
        <div className='home'>
            <h2 className='heading'>Sobre mí</h2>
            <p>Soy traductora de profesión abriéndome camino en mundo de la programación. En la búsqueda de mi próximo desafío.</p>
            <p>Si quieres saber más, pongamosnos en <Link to="/contacto">contacto</Link>.</p>

            <section className='last-works'>
                <h3 className='subheading'>Estos son algunos de mis proyectos.</h3>
                <Listado limite="2" />
            </section>
        </div>
    )
}
