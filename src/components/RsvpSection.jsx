import React, { useState } from "react";
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
  const [isSubmitting, setIsSubmitting] = useState(false); // Prevent multiple submissions

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleRadioChange = (e) => {
    setFormData((prev) => ({ ...prev, rsvp_status: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent form submission if already submitting

    setIsSubmitting(true); // Set submitting state to true

    try {
      // ✨ Normalize email
      const normalizedEmail = formData.email.trim().toLowerCase();

      const guestData = {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: normalizedEmail,
        mobile: formData.mobile,
        message: formData.message,
        rsvp_status: formData.rsvp_status,
      };

      const res = await axios.post(
        "https://wedding-backend-8y85.onrender.com/api/guests",
        guestData
      );

      if (res.status === 201) {
        setSuccessMessage(
          "🎉 RSVP submitted successfully! We look forward to seeing you."
        );
        setErrorMessage(""); // Clear any previous error message
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          mobile: "",
          message: "",
          rsvp_status: "",
        }); // Reset form after successful submission
      }
    } catch (error) {
      const status = error?.response?.status;

      if (status === 400) {
        setErrorMessage("⚠️ Please fill in all required fields.");
      } else if (status === 409) {
        setErrorMessage("🚫 This email has already been used to RSVP.");
      } else if (status === 500) {
        setErrorMessage("❌ Something went wrong. Please try again later.");
      } else {
        setErrorMessage("Unexpected error occurred.");
      }
      setSuccessMessage(""); // Clear any previous success message
    } finally {
      setIsSubmitting(false); // Reset submitting state
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
              <div
                className="fw-bold text-subheader bg-white d-flex align-items-center justify-content-center position-absolute border-success p-2"
                style={{
                  width: "75%",
                  borderStyle: "double",
                  top: 0,
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                Kindly respond before 20th of April, we look forward to
                celebrating with you!
              </div>

              <form onSubmit={handleSubmit}>
                <div className="row gx-4 gy-3">
                  {/* First Name */}
                  <div className="col-lg-6">
                    <div className="form-floating mb-2 mt-3">
                      <input
                        type="text"
                        className="form-control"
                        id="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        placeholder="First Name"
                        required
                      />
                      <label htmlFor="firstname" className="text-dark">
                        First Name
                      </label>
                    </div>
                  </div>

                  {/* Last Name */}
                  <div className="col-lg-6">
                    <div className="form-floating mb-2 mt-3">
                      <input
                        type="text"
                        className="form-control"
                        id="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        placeholder="Last Name"
                        required
                      />
                      <label htmlFor="lastname" className="text-dark">
                        Last Name
                      </label>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="col-lg-6">
                    <div className="form-floating mb-2 mt-3">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                      />
                      <label htmlFor="email" className="text-dark">
                        Enter Your Email
                      </label>
                    </div>
                  </div>

                  {/* Mobile */}
                  <div className="col-lg-6">
                    <div className="form-floating mb-2 mt-3">
                      <input
                        type="tel"
                        className="form-control"
                        id="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Mobile"
                        required
                      />
                      <label htmlFor="mobile" className="text-dark">
                        Enter Your Mobile No.
                      </label>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        id="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                      ></textarea>
                      <label htmlFor="message" className="text-dark">
                        Message
                      </label>
                    </div>
                  </div>

                  {/* Attendance Radio Buttons */}
                  <div className="col-12">
                    <div className="text-center border border-success p-4 my-4 position-relative">
                      <div
                        className="fw-bold text-subheader bg-white d-flex align-items-center justify-content-center position-absolute border-success p-2"
                        style={{
                          width: "50%",
                          borderStyle: "double",
                          top: 0,
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        Will you be attending?
                      </div>

                      <div className="mt-4 row g-4 justify-content-center">
                        <div className="col-lg-6">
                          <div className="form-check d-flex justify-content-center align-items-center">
                            <input
                              className="form-check-input me-2"
                              type="radio"
                              name="attendance"
                              id="attending_yes"
                              value="Accept With Pleasure!"
                              checked={
                                formData.rsvp_status === "Accept With Pleasure!"
                              }
                              onChange={handleRadioChange}
                              required
                            />
                            <label
                              className="form-check-label"
                              htmlFor="attending_yes"
                            >
                              Accept With Pleasure!
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-check d-flex justify-content-center align-items-center">
                            <input
                              className="form-check-input me-2"
                              type="radio"
                              name="attendance"
                              id="attending_no"
                              value="Decline With Regret"
                              checked={
                                formData.rsvp_status === "Decline With Regret"
                              }
                              onChange={handleRadioChange}
                              required
                            />
                            <label
                              className="form-check-label"
                              htmlFor="attending_no"
                            >
                              Decline With Regret
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Success/Error Messages */}
                  {successMessage && (
                    <div className="alert alert-success text-center">
                      {successMessage}
                    </div>
                  )}
                  {errorMessage && (
                    <div className="alert alert-danger text-center">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="btn btn-outline-warning text-dark py-3 px-5"
                      disabled={isSubmitting} // Disable button while submitting
                    >
                      {isSubmitting ? "Submitting..." : "Submit Now"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RsvpSection;
