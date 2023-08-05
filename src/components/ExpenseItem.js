import  "./ExpenseItem.css";

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>August 5th 2023</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">
                    PLN 1200,90
                </div>
                
            </div>
        </div>
    )
}