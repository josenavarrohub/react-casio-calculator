// Disable eval warnings
/* eslint no-eval: 0 */

// React
import React, { useState } from 'react'

// Components
import Display from './components/Display/Display'
import Functions from './components/Functions/Functions'
import Logo from './components/Logo/Logo'
import Numbers from './components/Numbers/Numbers'
import Operations from './components/Operations/Operations'

// CSS
import './Calculator.css'

// Functional component
const Calculator = () => {

    // Display's states
    const [displayText, setDisplayText] = useState("")
    const [displayResult, setDisplayResult] = useState("0")
    
    return (
    <main className="c-calculator">
        <Logo />
        <Display text={displayText} result={displayResult} />
        <Numbers
            onClickHandler = {number => 
                setDisplayText(`${displayText}${number}`)
            }
        />
        <Functions
            onDelClickHandler = {calcFunction => {
                if (displayText.length > 0) setDisplayText(displayText.slice(0, -1))
            }}
            onAcClickHandler = {calcFunction => {
                if (displayText.length > 0) setDisplayText("")
                if (displayResult.length !== "0") setDisplayResult("0")
            }}
        />
        <Operations
            onOperationClickHandler = {operation => {
                setDisplayText(`${displayText}${operation}`)
            }}
            onEqualClickHandler = {equal => {
                const result = text => {
                    text = text.replace('x', '*').replace('÷', '/')
                    return eval(text).toString()
                }
                setDisplayResult(result(displayText))
            }}
        />
    </main>
)}

export default Calculator
