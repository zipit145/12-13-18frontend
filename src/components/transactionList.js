import React from 'react'

const TransList = (props) => {

    return(
        <div className="transaction-list">
            {props.transactions.map(transaction => {
                return(
                    <div className="transaction-container">
                        <div>{transaction.title}</div>
                        <div>{transaction.status}</div>
                        <button type="button" class="btn btn-outline-warning my-2 my-sm-0" data-toggle="modal" data-target={"#trans"+transaction.id}>View Transaction</button>
                        <div class="modal fade" id={"trans" + transaction.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">{transaction.title}</h5>

                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div>{transaction.title}</div>
                                    <div>$ {transaction.amount}.00</div>
                                    <div>{transaction.status}</div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" data-dismiss="modal">Save changes</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default TransList