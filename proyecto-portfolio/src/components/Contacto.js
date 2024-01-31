import React from 'react'

export const Contacto = () => {
    return (
        <div className='page'>
            <h2 className='heading'>Contacto</h2>

            <form className='contact' action="mailto: malenajdev@gmail.com">
                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Apellidos" />
                <input type="text" placeholder="Email" />
                <textarea placeholder='Motivo de contacto' />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}
