import React, { useState, useEffect } from "react"; // <-- Make sure useEffect is imported
import axios from "axios";

import flowerLeft from "../assets/images/gold_flower1.png";
import flowerRight from "../assets/images/gold_flower2.png";

const RsvpSection = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    message: "",
    rsvp_status: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // useEffect to show the modal when either successMessage or errorMessage changes
  useEffect(() => {
    if (successMessage || errorMessage) {
      const modal = new window.bootstrap.Modal(
        document.getElementById("messageModal")
      );
      modal.show();
    }
  }, [successMessage, errorMessage]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleRadioChange = (e) => {
    setFormData((prev) => ({ ...prev, rsvp_status: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const guestData = {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        mobile: formData.mobile,
        message: formData.message,
        rsvp_status: formData.rsvp_status,
      };

      const res = await axios.post(
        "https://wedding-backend-8y85.onrender.com/api/guests",
        guestData
      );

      if (res.status === 201 || res.status === 200) {
        setSuccessMessage("RSVP submitted successfully! 🎉");
        setErrorMessage("");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          mobile: "",
          message: "",
          rsvp_status: "",
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        // Duplicate email case
        setErrorMessage("This email has already been used to RSVP.");
      } else if (error.response && error.response.data?.message) {
        // Backend sent a specific message
        setErrorMessage(error.response.data.message);
      } else {
        // General fallback
        setErrorMessage("Oops! Failed to submit RSVP.");
      }

      setSuccessMessage("");
      console.error("RSVP Error:", error);
    }
  };

  return (
    <section
      className="container-fluid position-relative RSVP-form py-5"
      id="weddingRsvp"
    >
      {/* Decorative Images */}
      <div
        className="position-absolute"
        style={{ top: 10, right: 0, width: 160, height: 160 }}
      >
        <img
          src={flowerRight}
          className="img-fluid"
          alt="Gold Flower Right"
          loading="lazy"
        />
      </div>
      <div
        className="position-absolute"
        style={{ top: 10, left: 0, width: 160, height: 160 }}
      >
        <img
          src={flowerLeft}
          className="img-fluid"
          alt="Gold Flower Left"
          loading="lazy"
        />
      </div>

      <div className="container py-5">
        <div className="mb-5 text-center mx-auto" data-aos="fade-up">
          <h1 className="display-2 text-header">Join Our Celebration</h1>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-10">
            <div
              className="p-5 border-success position-relative"
              style={{ borderStyle: "double" }}
            >
              <form onSubmit={handleSubmit}>
                <div className="row gx-4 gy-3">
                  {/* Form Fields (same as before) */}
                  {/* ... */}
                </div>

                {/* Submit Button */}
                <div className="col-12 text-center">
                  <button
                    type="submit"
                    className="btn btn-outline-warning text-dark py-3 px-5"
                  >
                    Submit Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for displaying messages */}
      <div
        className="modal fade"
        id="messageModal"
        tabIndex="-1"
        aria-labelledby="messageModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="messageModalLabel">
                {successMessage ? "Success!" : "Oops!"}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{successMessage || errorMessage}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RsvpSection;
