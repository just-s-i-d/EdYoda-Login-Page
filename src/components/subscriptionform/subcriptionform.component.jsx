import { useContext } from "react"
import InputLabel from "../inputlabel/inputlabel.component"
import "./subscription.styles.scss"
import { UserContext } from "../contex/usercontext.component"
const SubcriptionForm = () => {
    const {setPrice}=useContext(UserContext)
    const {price}=useContext(UserContext)
    const onSelectHandler=(event)=>{
        console.log(event.target.value)
        setPrice(event.target.value)
    }
    return (
        <div className="price-container">
            <div className="subcription-form-container">
                <h3>Select your subcription plan</h3>
                <InputLabel name="expired" checked total="Total &#8377;99" month="&#8377;8/mo" className="expired">12 Months Subscription<span className="tag">Offer Expired</span></InputLabel>
                <InputLabel name="plan" value="179" checked={price==="179"}  id="offer1" total="Total &#8377;179" month="&#8377;15/mo" onChange={onSelectHandler} className="recommended">12 Months Subscription<span className="tag">Recommended</span></InputLabel>
                <InputLabel name="plan" value="149" id="offer2" checked={price==="149"} total="Total &#8377;149" month="&#8377;25/mo" onChange={onSelectHandler}>6 Months Subscription</InputLabel>
                <InputLabel name="plan" value="99" id="offer3" checked={price==="99"} total="Total &#8377;99" month="&#8377;33/mo" onChange={onSelectHandler}>3 Months Subscription</InputLabel>
            </div>
            <div className="subcription-fee-container">
                <span>Subscription Fee</span>
                <span>&#8377;18,500</span>
            </div>
        </div>
    )
}
export default SubcriptionForm