import "bootstrap/dist/css/bootstrap.min.css";
import { SiPaytm, SiPhonepe } from 'react-icons/si';
import { FaCcMastercard, FaAmazonPay, FaGooglePay, FaStripe, FaCcVisa, FaFacebook, FaInstagram } from 'react-icons/fa';
import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { MdCall } from 'react-icons/md';

import "./css/Footer.css";


const Footer = () => {

  return (
    <>
      <footer>
        <div className="container-fluid  p-4 footer ">
          <div className="row">

            <div className="col-md-3 mb-4 company_logo_div">
              <div id="footer_logo"></div>
            </div>

            <div className="col-md-3 mb-4" style={{ minWidth: "250px" }}>
              <p className="mb-2">Get in touch</p>
              <ul>
                <li><FaInstagram className="footer_social_media" />
                  <a target="_blank" rel="noreferrer" href="https://www.instagram.com/tripkaroohelpdesk/" className="footer_social_media_name">Instagram</a></li>

                <li><FaFacebook className="footer_social_media" />
                  <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100081021051664" className="footer_social_media_name">Facebook </a> </li>

                <li><AiFillLinkedin className="footer_social_media" />  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/tripkaroo/" className="footer_social_media_name">LinkedIn </a>  </li>
              </ul>
            </div>

            <div className="col-md-3 mb-4">
              <p >Our payment partners</p>
              <SiPaytm className="payment_icon_style" />
              <FaGooglePay className="payment_icon_style" />
              <FaAmazonPay className="payment_icon_style" />
              <FaStripe className="payment_icon_style" />
              <FaCcVisa className="payment_icon_style" />
              <FaCcMastercard className="payment_icon_style" />
              <SiPhonepe className="payment_icon_style" />
            </div>

            <div className="col-md-3 mb-4">
              <p >Contact us</p>

              <p className="mb-2"><a style={{ color: "black" }} href="tel:8127775550"><MdCall />+91 812-777-5550</a></p>
              <p className="mb-2"><a style={{ color: "black" }} href="tel:8739841464"><MdCall />+91 873-984-1464</a></p>
              <p className="mb-2"><a style={{ color: "black" }} href="tel:9304677599"><MdCall />+91 930-467-7599</a></p>
              <p><AiOutlineMail /> tripkaroohelpdesk@gmail.com</p>
            </div>

          </div>

          <div className="row">

            <div className="col-md-12">
              <p className="mb-2">Address</p>
              <p className="mb-2">tripkaroo Head Office Chowk Lucknow, Uttar Pradesh, 226003</p>
              
            </div>
          </div>

          <hr />

          <div className="row">
            <div className="col-md-12">
              <p className="text-center p-0 m-0 footer_copyright">2022 Copyright tripkaroo. All RIGHTS RESERVED </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
