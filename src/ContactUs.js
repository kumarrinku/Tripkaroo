import React, { useState } from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/Contactpage.css";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import './css/ListYourBusiness.css';
import Swal from 'sweetalert2';

const Contactpage = () => {

  const [contactDetails, setContactDetails] = useState({
    fullName: "", mobileNumber: "", message: ""
  });

  let name, value;
  const postContactDetails = async (event) => {
    name = event.target.name;
    value = event.target.value;
    setContactDetails({ ...contactDetails, [name]: value });
  }

  function submitMessage(event) {
    event.preventDefault();
    const { fullName, mobileNumber, message } = contactDetails;

    if (!fullName || !mobileNumber || !message) {
      Swal.fire('Error', 'Please fill all the input fields carefully', 'error');
      return;
    }

    const res = fetch("https://contactus-bba43-default-rtdb.firebaseio.com//contactFormDetails.json", {
      method: "POST",
      Headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName, mobileNumber, message
      }),
    })
    if (res) {
      setContactDetails({
        fullName: "", mobileNumber: "", message: ""
      });
      Swal.fire('Form Submitted Successfully', 'Our team will contact you soon!', 'success');

    } else {
      Swal.fire('Error', 'Please fill all the input fields carefully', 'error');
    }
  }


  return (
    <>
      <div className="container mt-5 mb-5">
        <h3 className='text-center mb-5'>Contact us</h3>
        <div className="row">
          <div className="col-md-6 mb-5">
            <div className="benifits">
              <div className="contactUs_left_info_section">
                <div className="mb-4">
                  <CallOutlinedIcon color="" fontSize="medium" />
                  <h4 >Call</h4>
                  <p> Availabe between 10:00 AM - 05:00 PM (IST)</p>
                  <p><a style={{ color: "black" }} href="tel:8127775550">+91 812-777-5550</a></p>
                  <p><a style={{ color: "black" }} href="tel:8739841464">+91 873-984-1464</a></p>
                  <p><a style={{ color: "black" }} href="tel:9304677599">+91 930-467-7599</a></p>
                </div>
                <div className="mb-4">
                  <EmailOutlinedIcon color="" fontSize="medium" />
                  <h4>Email</h4>
                  <p className='d-block' >
                    <a style={{ color: "black" }} href="mailto:tripkaroohelpdesk@gmail.com">tripkaroohelpdesk@gmail.com</a>
                  </p>
                </div>
                <div className="mb-1">
                  <LocationOnOutlinedIcon color="" fontSize="medium" />
                  <h4>Address</h4>
                  <p>Tripkaroo Head Office Chowk Lucknow, Uttar Pradesh, 226003</p>
              <p>Lovely Professional University 13-Block DSW, Phagwara Punjab, 144411</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-5 m-auto" >
            <Form className="p-4 shadow " >
              <div className='form_heading'>
                <h3 className='text-center' style={{ fontFamily: "poppins" }}>Get in touch</h3>
                <p className='text-center'>Please fill the form we will contact you soon</p>
              </div>
              <FloatingLabel className="mb-3" controlId="fullName" label="Your full name">
                <Form.Control type="text" name="fullName" onChange={postContactDetails} value={contactDetails.fullName} placeholder="Your full name" />
              </FloatingLabel>

              <FloatingLabel className="mb-3" controlId="email" label="Email">
                <Form.Control type="email" name="email" placeholder="example@gmail.com" />
              </FloatingLabel>

              <FloatingLabel className="mb-3" controlId="MobileNumber" label="Mobile number">
                <Form.Control type="number" name="mobileNumber" onChange={postContactDetails} value={contactDetails.mobileNumber} placeholder="Mobile number" />
              </FloatingLabel>

              <FloatingLabel className="mb-3" controlId="message" label="Write your message here">
                <Form.Control type="text" name="message" onChange={postContactDetails} value={contactDetails.message} placeholder="Write your message here" as="textarea" rows={3} style={{ minHeight: "99px" }} />
              </FloatingLabel>
              <div className="d-grid gap-2 mt-3">
                <Button onClick={submitMessage} variant="contained" className='mb-3' endIcon={<SendIcon />} > Submit </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactpage;













