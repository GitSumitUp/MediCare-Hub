import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="hospital" />
        </div>
        <div className="banner">
          <h1>Welcome to MediCare Hub</h1>
          <h3>Your Health, Our Priority</h3>
          <p>
            We are committed to providing the highest quality healthcare services to our patients. Our state-of-the-art Hospital Management System ensures efficient and accurate management of patient records, appointments, and medical data.
          </p>
          <p><br/>
            <h3>Benefits of our MediCare Hub:</h3>
            <ul>
              <li>Faster appointment scheduling</li>
              <li>Improved patient care coordination</li>
              <li>Enhanced data security</li>
              <li>Reduced wait times</li>
              <li>Access to detailed medical records</li>
            </ul>
          </p>
          <p>
            Our team of experienced healthcare professionals is dedicated to providing compassionate and comprehensive care. We are constantly striving to improve our services and stay at the forefront of medical advancements.
          </p>
          <p>
            Ready to experience the future of healthcare? Contact us today to learn more.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;