import './Button.css'
import React from 'react'

export default function Button(props) {

    return (
        <button 
        // retornando conteudo do botao
        onClick={e => props.click(props.label)}

        // definindo classes
        className={`
            button
            ${props.operation ? 'operation' : ''}
            ${props.double ? 'double' : ''}
            ${props.triple ? 'triple' : ''}
        `}>

            { props.label }

        </button>
    )
}
