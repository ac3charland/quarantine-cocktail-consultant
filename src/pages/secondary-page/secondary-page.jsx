import React from 'react'
import './secondary-page.scss'

const cb = 'secondary'

export default function SecondaryPage() {
    return (
        <div className={cb}>
            <h1 className={`${cb}__heading`}>Short secondary page!</h1> 
            <p>(Footer sticks to bottom)</p>
        </div>
    )
}