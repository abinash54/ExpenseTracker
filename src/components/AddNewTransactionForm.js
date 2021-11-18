import React, { Fragment, useState } from 'react';

const AddNewTransactionForm = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);



    return (
        <Fragment>
            <h3>Add new transaction</h3>
            <form id="form">
                <div class="form-control">
                <label for="text">Text</label>
                <input type="text" id="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div class="form-control">
                <label for="amount"
                    >Amount <br />
                    (negative - expense, positive - income)</label
                >
                <input type="number" id="amount" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button class="btn">Add transaction</button>
            </form>
        </Fragment>
    )
}

export default AddNewTransactionForm
