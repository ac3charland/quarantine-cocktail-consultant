import React from 'react'
import './footer.scss'
import moment from 'moment'

const cb = 'footer'

export default function Footer(props) {
    return (
        <div className={cb}>
            <div className={`${cb}__text`}>Copyright &copy; {moment().format('YYYY')} [CHANGE_ME_SITE_COMPANY_HERE]</div>
            <div className={`${cb}__disclaimer`}>[CHANGE_ME_OPTIONAL_DISCLAIMER]</div>
        </div>
    )
}