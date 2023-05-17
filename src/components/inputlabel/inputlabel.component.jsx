import "./inputlabel.styles.scss"
const InputLabel = (props) => {
    const {children,total,month,id,className,...otherprops}=props
    return (
        <div className={`offer-container ${className}`}>
            <input type="radio" id={id} {...otherprops} />
            <label htmlFor={id} className='label-container'>
                <span className="left-container">{children}</span>
                <span className="right-container">
                    <span className="total">{total}</span>
                    <span>{month}</span>
                </span>
            </label>
        </div>
        
    )
}
export default InputLabel