// React
import React from 'react'

// Libraries
import PropTypes from 'prop-types'

// Components
import Button from '../Button/Button'

// CSS
import './Operations.css'

// Functional component
const Operations = ({onOperationClickHandler, onEqualClickHandler}) => (
    <section className="c-operations">
        <Button text="+" onClickHandler={onOperationClickHandler} />
        <Button text="-" onClickHandler={onOperationClickHandler} />
        <Button text="x" onClickHandler={onOperationClickHandler} />
        <Button text="÷" onClickHandler={onOperationClickHandler} />
        <Button text="=" onClickHandler={onEqualClickHandler} />
    </section>
)

// Property types
Operations.propTypes = {
    onOperationClickHandler: PropTypes.func.isRequired,
    onEqualClickHandler: PropTypes.func.isRequired
}

export default Operations
