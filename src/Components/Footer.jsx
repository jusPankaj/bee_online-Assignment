import fb from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import phone from "../assets/phone.png";
import location from "../assets/location.png";
import mail from "../assets/mail.png";
import '../assets/css/footer.css'

const Footer = () => {
  return (
    <>
    <footer className="footer-container">
      <div className="row footer">
        <div className="footer-list col-2 ">
          <h5 className="footer-header">Company Info</h5>
          <a href="#aboutus">About Us</a>
          <a href="#career">Career</a>
          <a href="#hiring">We are hiring</a>
          <a href="#blog">Blog</a>
        </div>

        <div className="footer-list col-2 ">
          <h5 className="footer-header">Legal</h5>
          <a href="#aboutus">About Us</a>
          <a href="#career">Career</a>
          <a href="#hiring">We are hiring</a>
          <a href="#blog">Blog</a>
        </div>

        <div className="footer-list col-2 ">
          <h5 className="footer-header">Company Info</h5>
          <a href="#aboutus">About Us</a>
          <a href="#career">Career</a>
          <a href="#hiring">We are hiring</a>
          <a href="#blog">Blog</a>
        </div>

        <div className="footer-list col-2 ">
          <h5 className="footer-header">Company Info</h5>
          <a href="#aboutus">About Us</a>
          <a href="#career">Career</a>
          <a href="#hiring">We are hiring</a>
          <a href="#blog">Blog</a>
        </div>

        <div className="footer-list col-3">
          <h5 className="footer-header">Get In Touch</h5>
          <div className="footer-phone">
            <img src={phone} alt="" />
            (480) 555-0103
          </div>
          <div className="footer-address">
            <img src={location} alt="" />
            4517 Washington Ave. Manchester, Kentucky 39495
          </div>
          <div className="footer-mail">
            <img src={mail} alt="" />
            debra.holt@example.com
          </div>
        </div>
      </div>


      
    </footer>
<div className="rightsReserved">
        <h6>Made With Love By Figmaland All Right Reserved </h6>
        <div className="footer-social-icon">
          <img src={fb} alt="facebook" />
          <img src={insta} alt="instagram" />
          <img src={twitter} alt="twitter" />
        </div>
      </div>
    </>
  );
};

export default Footer;
