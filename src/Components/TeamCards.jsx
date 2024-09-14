import fb from '../assets/facebook.png'
import insta from '../assets/instagram.png'
import twitter from '../assets/twitter.png'

// eslint-disable-next-line react/prop-types
const TeamCards = ({imgSrc, name, profession}) => {
  return (
      <div className="team-cards">
        <img src={imgSrc} alt="" />
        <h5>{name}</h5>
        <small>{profession}</small>
        <div className="team-card-social-icons">
          <img src={fb} alt="facebook" />
          <img src={insta} alt="instagram" />
          <img src={twitter} alt="twitter" />
        </div>
      </div>
  )
}

export default TeamCards