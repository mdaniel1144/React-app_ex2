import './Menu.css'
import ExpenseForm from './ExpenseForm'
import Timer from './Timer'
import React, { useState } from "react"

function Menu({ onAddExpense }) {

    const [title, setTitle] = useState("")

    return (
        <div className='expenses'>
        <ExpenseForm onAddExpense={onAddExpense} />
        <Timer />
            <p className="counter-click"> </p>
        </div>
    )
}

export default Menu