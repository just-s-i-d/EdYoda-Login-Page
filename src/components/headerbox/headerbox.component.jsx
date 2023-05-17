import Header from "../boxheaderitem/boxheaderitem.component"
import CircleItem from "./circleditem/circleditem.component"
import "./headerbox.styles.scss"
const HeaderBox=()=>{
    return(
        <div className="header-item-container">
               <Header><CircleItem>1</CircleItem><span>Sign up</span></Header>
               <Header><CircleItem>2</CircleItem><span>Subscribe</span></Header>
            </div>
    )
}
export default HeaderBox