import { useContext } from "react"
import "./finalprice.styles.scss"
import { UserContext } from "../contex/usercontext.component"
const FinalPrice = () => {
    const {price}=useContext(UserContext)
    return (
        <div className="final-price-container">
            <span className="left-container"><span className="total">Total</span> (Incl. of 18% GST)</span>
            <span className="right-container">&#8377;{price}</span>
        </div>
    )
}
export default FinalPrice