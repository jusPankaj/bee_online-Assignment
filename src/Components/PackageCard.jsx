// eslint-disable-next-line react/prop-types
const PackageCard = ({icon,  title, content}) => {
  return (
    <div className="package-card">
        <div className="cardImage-div">
            <img src={icon} alt="icons" className="packageCard-image"/>
        </div>
        {/* <div> */}
            <h5 className="card-title">{title}</h5>
        {/* </div> */}
        <div className="CardLine"></div>
        <div className="cardContent">
          {content}
        </div>
            
    </div>
  )
}

export default PackageCard;