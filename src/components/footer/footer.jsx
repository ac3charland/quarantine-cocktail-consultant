import React from 'react'
import './footer.scss'
import moment from 'moment'

const cb = 'footer'

export default function Footer(props) {
    return (
        <div className={cb}>
            <div className={`${cb}__text`}>Copyright &copy; {moment().format('YYYY')} <a href='https://www.alexcharland.com'>Alex Charland</a></div>
        </div>
    )
}