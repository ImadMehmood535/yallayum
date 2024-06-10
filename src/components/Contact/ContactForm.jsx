import React from "react";
import ContactFormComponent from "./ContactFormComponent";
import StoreDetails from "./StoreDetails";

const ContactForm = () => {
  return (
    <div className="ContactForm pageLayout px-0 mx-auto">
      <div className="container">
        <div className="form-header-area max-w-[33.33%] mx-auto text-center">
          <h2 className="mb-3">Reach out to us!</h2>
          <p>Submit your inquiry our team will get back to you with 24 hours</p>
        </div>
        <div className="form-area mt-10">
            <ContactFormComponent/>
        </div>
        <div className="">
            <StoreDetails/>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
