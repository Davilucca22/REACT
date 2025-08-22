import React from 'react'

//exporta a Div para ser usada no Main.js
export default function Div({name}) {
    return (
        <div>
            <h1>
                Hello, {name}
            </h1>
        </div>

    )
}
