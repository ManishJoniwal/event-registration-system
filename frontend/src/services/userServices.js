// services/userService.js
import api from "./api";

export const registerUser = async (userData) => {
  try {
    const response = await api.post("/user/register", userData);
    return response.data;
  } catch (error) {
    console.error(
      "Registration failed:",
      error.response?.data || error.message
    );
    throw error.response?.data || { message: "Registration failed" };
  }
};
