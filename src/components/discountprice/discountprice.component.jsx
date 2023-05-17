import "./discountprice.styles.scss"
import Clock from "../../assets/Vector.png"
const DiscountPrice=()=>{
    return(
<div className="discount-price-container">
    <div className="left-container">
        <span>Limited time offer</span>
        <span className="left-bottom"><img src={Clock} alt="clockicon" /> Offer valid till 25th March 2023</span>
    </div>
    <div className="right-container">
        -&#8377;18,401
    </div>
</div>
    )
}
export default DiscountPrice