import React, { useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import emailjs from 'emailjs-com';

export const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [subscriptionMessage, setSubscriptionMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if email and message fields are empty
    if (!email || !subscriptionMessage) {
      setStatus({ success: false, message: "Please fill out both email and message fields." });
      return;
    }

    setStatus("Sending...");

    // Initialize EmailJS using environment variables
    emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);

    // Prepare email data
    const emailData = {
      to_email: "your_email@example.com", // Replace with your email address
      from_name: "Newsletter Subscriber",
      message: `Email Address: ${email}\nSubscription Message: ${subscriptionMessage}`,
    };

    // Send email using EmailJS
    emailjs
      .send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, emailData)
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          // Handle success, e.g., show a success message to the user
          setStatus({ success: true, message: "Subscription request sent successfully" });
          setEmail(""); // Clear email field
          setSubscriptionMessage(""); // Clear subscription message field
        },
        (error) => {
          console.error("Email sending failed:", error);
          // Handle error, e.g., show an error message to the user
          setStatus({ success: false, message: "Something went wrong, please try again later." });
        }
      );
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
            {status && <Alert variant={status.success ? "success" : "danger"}>{status.message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <textarea
                  value={subscriptionMessage}
                  onChange={(e) => setSubscriptionMessage(e.target.value)}
                  placeholder="Subscription Message"
                ></textarea>
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
