

import { useState } from 'react'
import ExpenseItem from './ExpenseItem'

function Expenses(props) {

    const[my_props , setProps] = useState(props)

    const expenseItems = []
    my_props.items.forEach((item, index) => {
        expenseItems.push(
            <ExpenseItem
                key={index}
                title={item.title}
                amount={item.amount}
                date={item.date}
            />
    )})

    const addExpenseHandeler = (event) =>{
        setProps((my_props.push(event)))
    }


    return (
        <div className='expenses'>
            {expenseItems}
        </div>

    )
}
export default Expenses