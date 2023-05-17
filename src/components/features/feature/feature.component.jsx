import "./feature.styles.scss"
const Feature=({children,...props})=>{
    return(
        <div className="feature-item" {...props}>{children}</div>
    )
}
export default Feature