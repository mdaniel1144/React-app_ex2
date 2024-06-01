import "./ExpenseForm.css"
import React , {useState} from "react"

function ExpenseForm({ onAddExpense }) {

    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [date, setDate] = useState("")

    const titleChangeHandeler = (event) =>{
        console.log(event)
        setTitle(event.target.value)
    }
    const DateChangeHandeler = (event) =>{
        console.log(event)
        setDate(event.target.value)

    }
    const AmountChangeHandeler = (event) =>{
        console.log(event)
        setAmount(event.target.value)
    }
    const submitHendler = (event) =>{
        event.preventDefault()

        const expenseData = {title: title, amount: amount, date: new Date(date),}
        console.log(event)
        setTitle("")
        setDate("")
        setAmount("")
        console.log(expenseData)

        onAddExpense(expenseData);
    }

    return (
        <form onSubmit={submitHendler} className="form-container">
            <div className="form-table">
                <label>title </label>
                <input type="text" value={title} onChange={titleChangeHandeler}/>
            </div>
            <div className="form-table">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={amount} onChange={AmountChangeHandeler}/>
            </div>
            <div className="form-table">
                <label>Date</label>
                <input type="date" min="2019-01-01"  value={date} onChange={DateChangeHandeler}/>
            </div>
            <div className="form-table">
                <button type="submit" >Submit</button>
            </div>
        </form>
    )
}

export default ExpenseForm