import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/axiosConfig"; // Axios with auth header

const Dashboard = () => {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("Admin");
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("user_name") || "Admin";
    setUserName(storedName);

    const fetchGuests = async () => {
      try {
        const response = await API.get("/guests");
        setGuests(response.data);
      } catch (error) {
        console.error("Error fetching guests:", error);
        if (error.response?.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("user_name");
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchGuests();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_name");
    navigate("/login");
  };

  // RSVP Summary Counters
  const acceptCount = guests.filter(
    (g) => g.rsvp_status === "Accept With Pleasure!"
  ).length;
  const declineCount = guests.filter(
    (g) => g.rsvp_status === "Decline With Regret"
  ).length;

  return (
    <div className="container-fluid px-4">
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex justify-content-between align-items-center mb-4 mt-3">
            <h1>The Wedding Dashboard</h1>
            <div>
              <span className="me-3">Welcome, {userName}</span>
              <button className="btn btn-danger" onClick={handleLogout}>
                <i className="bi bi-box-arrow-right"></i> Logout
              </button>
            </div>
          </div>

          <div className="card shadow">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="mb-0">Guests List</h2>
                <span className="badge bg-primary">Total: {guests.length}</span>
              </div>

              {/* RSVP Summary Badges */}
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-success">
                  Accept with Pleasure: {acceptCount}
                </span>
                <span className="badge bg-danger">
                  Decline with Regret: {declineCount}
                </span>
              </div>

              <div className="table-responsive dashboard-table-container">
                {loading ? (
                  <div className="text-center py-5">Loading guests...</div>
                ) : guests.length === 0 ? (
                  <div className="text-center py-5">No guests found</div>
                ) : (
                  <table className="table table-striped table-hover align-middle w-100">
                    <thead className="table-dark">
                      <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>RSVP Status</th>
                        <th className="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {guests.map((guest, index) => (
                        <tr key={guest._id}>
                          <td>{index + 1}</td>
                          <td>{guest._id.slice(-6)}</td>
                          <td>{`${guest.firstname} ${guest.lastname}`}</td>
                          <td>{guest.mobile || "N/A"}</td>
                          <td>{guest.email}</td>
                          <td
                            title={guest.message || "N/A"}
                            style={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              maxWidth: "250px",
                            }}
                          >
                            {guest.message
                              ? guest.message.length > 30
                                ? `${guest.message.substring(0, 30)}...`
                                : guest.message
                              : "N/A"}
                          </td>
                          <td>
                            <span
                              className={`badge bg-${
                                guest.rsvp_status === "Accept With Pleasure!"
                                  ? "success"
                                  : guest.rsvp_status === "Decline With Regret"
                                  ? "danger"
                                  : "warning"
                              }`}
                            >
                              {guest.rsvp_status}
                            </span>
                          </td>
                          <td className="text-center">
                            <button
                              className="btn btn-sm btn-primary"
                              onClick={() =>
                                navigate(`/view-guest/${guest._id}`)
                              }
                            >
                              <i className="bi bi-eye"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
