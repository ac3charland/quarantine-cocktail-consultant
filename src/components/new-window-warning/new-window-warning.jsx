import React from 'react'
import PropTypes from 'prop-types'

const NewWindowScreenReaderWarning = ({customMessage}) => <span className='sr-only'>{customMessage ? customMessage : '(Opens a new window)'}</span>

NewWindowScreenReaderWarning.propTypes = {
    customMessage: PropTypes.string,
}

export default NewWindowScreenReaderWarning
