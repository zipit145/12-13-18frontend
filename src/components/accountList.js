import React from 'react'
import { Link } from 'react-router-dom'

const AccountList = (props) => {
    let accounts = props.accounts.map(account => {
        return (
            <div key={`account ${account.id}`} className='container accountList'>
                <Link onClick={props.accountInfoClick} id={account.id} to={`/account/id/${account.id}`}>
                    <div onClick={props.accountDetailsClick} id={account.id}>
                        <div id={account.id} className='row'>{account.acct_name}</div>
                        <div id={account.id} className='row'>{account.bank_name}</div>
                        <div id={account.id} className='row'>{account.acct_type}</div>
                        {/* <div className='col-2'>{snack.rating}</div> */}
                        {/* <button onClick={props.editMovieButton} id={movie.id} className='col-2'>Edit</button> */}
                        {/* <Link className='col-3' to='/edit'><button id={snack.id}>Edit</button></Link> */}
                    </div>
                </Link>
                {/* <button onClick={props.deleteSnack} id={snack.id} className='col-3'>Delete</button> */}
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