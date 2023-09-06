import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from 'emailjs-com';



export const Contact = () => {
  // Initialize form input values and state variables
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  // Function to update form input values
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    // Initialize EmailJS using environment variables
    emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);

    // Prepare email data
    const emailData = {
      to_email: "ahmedalawi01@gmail.com", // Replace with the recipient's email address
      from_name: `${formDetails.firstName} ${formDetails.lastName}`,
      message: `Email Address: ${formDetails.email}\nPhone Number: ${formDetails.phone}\nMessage: ${formDetails.message}`,
    };

    // Send email using EmailJS
    emailjs
      .send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, emailData)
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          // Handle success, e.g., show a success message to the user
          setStatus({ success: true, message: "Message sent successfully" });
          setFormDetails(formInitialDetails); // Clear the form
          setButtonText("Send"); // Reset the button text
        },
        (error) => {
          console.error("Email sending failed:", error);
          // Handle error, e.g., show an error message to the user
          setStatus({ success: false, message: "Something went wrong, please try again later." });
          setButtonText("Send"); // Reset the button text
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>

          <Col md={6}>
            <h2>Get In Touch</h2>

            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>

                <Col>
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>

                {status.message && (
                  <Col>
                    <p className={status.success === false ? "danger" : "success"}>
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
