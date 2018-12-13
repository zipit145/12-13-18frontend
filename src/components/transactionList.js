import React from 'react'

const TransList = (props) => {

    console.log(props.accounts)
    let account = props.accounts.filter(account => account.id === Number(props.match.params.id))

    //console.log(account)
    let transactions = props.transactions.map(transaction => {
        if (account.length > 0) {
            if (account.id === transaction.account_id) {
                return (
                    <>
                        <div>{transaction.title}</div>
                        <div>{transaction.amount}</div>
                        <div>{transaction.status}</div>
                    </>
                )

            }
        }
    })

    return (
        <div className='grey'>
            <div>{account.acct_name}</div>
            <div>{account.acct_type}</div>
            <div>{account.bank_name}</div>

            {transactions}
        </div>
    )
}

export default TransList