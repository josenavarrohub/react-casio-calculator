// React
import React from 'react'

// Libraries
import PropTypes from 'prop-types'

// Components
import Button from '../Button/Button'

// CSS
import './Functions.css'

// Functional component
const Functions = ({onDelClickHandler, onAcClickHandler}) => (
    <section className="c-functions">
        <Button text="DEL" title="Delete" onClickHandler={onDelClickHandler} />
        <Button text="AC" title="All clear" onClickHandler={onAcClickHandler} />
    </section>
)

// Property types
Functions.propTypes = {
    onDelClickHandler: PropTypes.func.isRequired,
    onAcClickHandler: PropTypes.func.isRequired
}

export default Functions
