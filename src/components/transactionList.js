import React from 'react'

const TransList = (props) => {
    let account = props.accounts.filter(account => account.id === Number(props.match.params.id))
    if (account.length === 0) {
        return (
            <>
                loading...
            </>
        )
    }
    return (
        <div className='grey'>
            {account}
        </div>
    )
}

export default TransList