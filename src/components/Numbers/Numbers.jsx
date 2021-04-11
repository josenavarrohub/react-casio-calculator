// React
import React from 'react'

// Libraries
import PropTypes from 'prop-types'

// Components
import Button from '../Button/Button'

// CSS
import './Numbers.css'

// Functional component
const Numbers = ({onClickHandler}) => {
    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]

    return (
        <section className="c-numbers">
            { numbers.map(number => (
                <Button
                    text={number.toString()}
                    onClickHandler={onClickHandler}
                    key={number}
                />
            )) }
        </section>
    )
}

// Property types
Numbers.propTypes = {
    onClickHandler: PropTypes.func.isRequired
}

export default Numbers
