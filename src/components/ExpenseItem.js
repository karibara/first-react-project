import  "./ExpenseItem.css";

function ExpenseItem(props) {
    
    return (
        <div className="expense-item">
            <div>{props.date.toLocaleString("pl-PL", {weekday: "short", day:"numeric", month:"long", year:"numeric"})}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">
                    PLN {props.amount}
                </div>
                
            </div>
        </div>
    )
}

export default ExpenseItem