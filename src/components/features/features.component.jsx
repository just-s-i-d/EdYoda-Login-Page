import Feature from "./feature/feature.component"
import "./features.styles.scss"
import Book from '../../assets/Icon.png'
import Icon1 from "../../assets/Icon-1.png"
import Icon2 from "../../assets/Icon-2.png"
import Icon3 from "../../assets/Icon-3.png"
import Icon4 from "../../assets/Icon-4.png"
const Features=()=>{
    return(
        <div className="features-container">
            <h1 >Access curated courses worth &#8377; <span className="price-cut">18,500</span> at just <span className="imp-item">&#8377; 99</span> per year!</h1>
            <Feature><img src={Book} alt="icon"/> <span className="imp-item"> 100+</span>Job relevant courses </Feature>
            <Feature><img src={Icon1} alt="icon"/><span className="imp-item"> 20,000+</span>Hours of content</Feature>
            <Feature><img src={Icon2} alt="icon"/><span className="imp-item"> Exclusive</span>webinar access</Feature>
            <Feature><img src={Icon3} alt="icon"/>  Scholarship worth<span className="imp-item">₹94,500</span></Feature>
            <Feature><img src={Icon4} alt="icon"/> <span className="imp-item">  Ad Free</span>learning experience </Feature>
        </div>
    )
}
export default Features