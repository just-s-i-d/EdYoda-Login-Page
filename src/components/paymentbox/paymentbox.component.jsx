
import Buttons from "../buttons/buttons.component"
import DiscountPrice from "../discountprice/discountprice.component"
import FinalPrice from "../finalprice/finalprice.component"
import HeaderBox from "../headerbox/headerbox.component"
import SubcriptionForm from "../subscriptionform/subcriptionform.component"
import RazorPay from "../../assets/Razorpay Icon.png"
import "./paymentbox.styles.scss"
const PaymentBox = () => {
    return (
        <div className="paymentbox-container">
            <HeaderBox />
            <SubcriptionForm />
            <DiscountPrice />
            <FinalPrice />
            <Buttons />
            <img src={RazorPay} alt="RazorPay" className="razorpay"/>
        </div>
    )
}
export default PaymentBox