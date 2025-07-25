// services/adminService.js
import api from "./api";

// Register Admin
export const registerAdmin = async (adminData) => {
  try {
    console.log("adminData", adminData);
    const res = await api.post("/admin/register", adminData);
    return res.data;
  } catch (error) {
    console.error(
      "Admin registration failed:",
      error.response?.data || error.message
    );
    throw error.response?.data || { message: "Admin registration failed" };
  }
};

// Login Admin
export const loginAdmin = async (credentials) => {
  try {
    const res = await api.post("/admin/login", credentials);
    return res.data;
  } catch (error) {
    console.error("Admin login failed:", error.response?.data || error.message);
    throw error.response?.data || { message: "Admin login failed" };
  }
};

// Get All Users (with optional filters)
export const getAllUsers = async (token, filters = {}) => {
  try {
    const res = await api.get("/admin/users", {
      params: filters,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error(
      "Fetching users failed:",
      error.response?.data || error.message
    );
    throw error.response?.data || { message: "Failed to fetch users" };
  }
};

// Get Single User by ID
export const getSingleUser = async (id, token) => {
  try {
    const res = await api.get(`/admin/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error(
      "Fetching single user failed:",
      error.response?.data || error.message
    );
    throw error.response?.data || { message: "Failed to fetch user" };
  }
};
