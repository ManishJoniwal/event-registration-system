"use client";
import { useState } from "react";
import { getSingleUser } from "../../services/adminServices";
import { EyeIcon, DownloadIcon, LoaderIcon } from "lucide-react";

const UserCard = ({ user }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleViewDetails = async () => {
    if (!showDetails && !userDetails) {
      setLoading(true);
      try {
        const token = localStorage.getItem("adminToken");
        const details = await getSingleUser(user._id, token);
        console.log("details", details);
        setUserDetails(details);
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setLoading(false);
      }
    }
    setShowDetails(!showDetails);
  };

  const handleDownloadCard = () => {
    const cardData = userDetails || user;
    const dataStr = JSON.stringify(cardData, null, 2);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
    const exportFileDefaultName = `${user.name}_card.json`;
    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-200/50 p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-blue-900">
            {user.fullname}
          </h3>
          <p className="text-blue-600">{user.email}</p>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            user.role === "admin"
              ? "bg-gradient-to-r from-red-100 to-red-200 text-red-800 border border-red-300"
              : "bg-gradient-to-r from-blue-100 to-blue-100 text-blue-800 border border-blue-300"
          }`}
        >
          {user.role}
        </span>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">
            Phone:
          </span>
          <span className="text-sm text-blue-700">{user.phone}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">
            City:
          </span>
          <span className="text-sm text-blue-700">{user.city}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">
            Company:
          </span>
          <span className="text-sm text-blue-700">{user.companyName}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">
            Joined:
          </span>
          <span className="text-sm text-blue-700">
            {new Date(user.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>

      {showDetails && userDetails && (
        <div className="mt-4 p-4 bg-gradient-to-r from-blue-50/50 to-blue-50/50 rounded-xl border border-blue-200/50">
          <h4 className="font-medium text-blue-900 mb-3 flex items-center space-x-2">
            <span>Full Details:</span>
            {loading && <LoaderIcon className="w-4 h-4 animate-spin" />}
          </h4>
          <pre className="text-xs text-blue-700 overflow-x-auto whitespace-pre-wrap bg-white/70 p-3 rounded-lg border border-blue-200/50">
            {JSON.stringify(userDetails, null, 2)}
          </pre>
        </div>
      )}

      <div className="flex space-x-2 mt-4">
        <button
          onClick={handleViewDetails}
          disabled={loading}
          className="flex-1 bg-gradient-to-r from-blue-500 to-blue-500 text-white px-4 py-2 rounded-xl hover:from-blue-600 hover:to-blue-600 text-sm font-medium disabled:opacity-50 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
        >
          {loading ? (
            <LoaderIcon className="w-4 h-4 animate-spin" />
          ) : (
            <EyeIcon className="w-4 h-4" />
          )}
          <span>
            {loading
              ? "Loading..."
              : showDetails
              ? "Hide Details"
              : "View Details"}
          </span>
        </button>
        <button
          onClick={handleDownloadCard}
          className="flex-1 bg-gradient-to-r from-blue-500 to-blue-500 text-white px-4 py-2 rounded-xl hover:from-blue-600 hover:to-blue-600 text-sm font-medium transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
        >
          <DownloadIcon className="w-4 h-4" />
          <span>Download</span>
        </button>
      </div>
    </div>
  );
};

export default UserCard;
