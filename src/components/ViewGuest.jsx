// src/components/ViewGuest.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../utils/axiosConfig"; // Axios with token

const ViewGuest = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [guest, setGuest] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGuest = async () => {
      try {
        const response = await API.get(`/guests/${id}`);
        setGuest(response.data);
      } catch (error) {
        console.error("Error fetching guest:", error);
        navigate("/dashboard"); // Redirect if error
      } finally {
        setLoading(false);
      }
    };

    fetchGuest();
  }, [id, navigate]);

  if (loading)
    return <div className="text-center mt-5">Loading guest details...</div>;

  if (!guest)
    return <div className="text-center mt-5 text-danger">Guest not found.</div>;

  return (
    <div className="container mt-5">
      <button
        className="btn btn-secondary mb-3"
        onClick={() => navigate("/dashboard")}
      >
        &larr; Back to Dashboard
      </button>

      <div className="card shadow p-4" style={{ maxWidth: "700px" }}>
        <h2 className="mb-3">Guest Details</h2>
        <p>
          <strong>ID:</strong> {guest._id}
        </p>
        <p>
          <strong>First Name:</strong> {guest.firstname}
        </p>
        <p>
          <strong>Last Name:</strong> {guest.lastname}
        </p>
        <p>
          <strong>Email:</strong> {guest.email}
        </p>
        <p>
          <strong>Mobile:</strong> {guest.mobile || "N/A"}
        </p>
        <p>
          <strong>Message:</strong> {guest.message || "N/A"}
        </p>
        <p>
          <strong>RSVP Status:</strong>{" "}
          <span
            className={`badge bg-${
              guest.rsvp_status === "Accept with Pleasure!"
                ? "success"
                : guest.rsvp_status === "Decline with Regret"
                ? "danger"
                : "secondary"
            }`}
          >
            {guest.rsvp_status}
          </span>
        </p>
        <p>
          <strong>Submitted:</strong>{" "}
          {new Date(guest.createdAt).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ViewGuest;
