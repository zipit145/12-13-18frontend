import React from 'react'
import { Link } from 'react-router-dom'

const AccountList = (props) => {
    let accounts = props.accounts.map(account => {
        return (
            <div key={`account ${account.id}`} className='container accountList'>
                <Link onClick={props.accountInfoClick} id={account.id} to={`/transactions/id/${account.id}`}>
                    <div onClick={props.accountDetailsClick} id={account.id}>
                        <div id={account.id} className='row'>{account.acct_name}</div>
                        <div id={account.id} className='row'>{account.bank_name}</div>
                        <div id={account.id} className='row'>{account.acct_type}</div>
                    </div>
                </Link>
            </div>
        )
    })
    return (
        <>
            <div className='grey'>
                <div>{accounts}</div>
            </div>
        </>
    )
}

export default AccountList