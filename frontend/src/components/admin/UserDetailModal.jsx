"use client";
import { useState, useEffect } from "react";
import { getSingleUser } from "../../services/adminServices";
import {
  XIcon,
  UserIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  BuildingIcon,
  CalendarIcon,
  ShieldIcon,
  DownloadIcon,
  LoaderIcon,
  IdCardIcon,
  ClockIcon,
} from "lucide-react";

const UserDetailModal = ({ user, onClose }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        const details = await getSingleUser(user._id, token);
        // console.log("details", details);
        setUserDetails(details);
      } catch (err) {
        setError("Failed to load user details");
        console.error("Error fetching user details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [user._id]);

  const handleDownload = () => {
    const dataToDownload = userDetails || user;
    const dataStr = JSON.stringify(dataToDownload, null, 2);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
    const exportFileDefaultName = `${user.name}_detailed_info.json`;
    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  };

  const displayUser = userDetails || user;

  const InfoCard = ({ icon: Icon, label, value, className = "" }) => (
    <div
      className={`bg-white backdrop-blur-sm rounded-xl p-4 border border-blue-200/50 hover:shadow-lg transition-all duration-300 ${className}`}
    >
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-100 rounded-lg flex items-center justify-center">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>
        <div className="flex-1">
          <p className="text-xs font-medium text-blue-600 uppercase tracking-wide">
            {label}
          </p>
          <p className="text-sm font-semibold text-blue-900 mt-1">
            {value || "Not provided"}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-white via-blue-50/30 to-blue-50/30 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-blue-200/50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 px-8 py-6 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                <UserIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {displayUser.name}
                </h2>
                <p className="text-blue-100">{displayUser.email}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                      displayUser.role === "admin"
                        ? "bg-red-500/20 text-red-100 border border-red-400/30"
                        : "bg-blue-500/20 text-blue-100 border border-blue-400/30"
                    }`}
                  >
                    <ShieldIcon className="w-3 h-3 mr-1" />
                    {displayUser.role?.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-200 border border-white/20"
            >
              <XIcon className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[60vh]">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-64 space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-100 rounded-2xl flex items-center justify-center">
                <LoaderIcon className="w-8 h-8 text-blue-600 animate-spin" />
              </div>
              <p className="text-blue-600 font-medium">
                Loading detailed information...
              </p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center h-64 space-y-4">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                <XIcon className="w-8 h-8 text-red-500" />
              </div>
              <p className="text-red-600 font-medium">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="text-blue-500 hover:text-blue-600 text-sm"
              >
                Try Again
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Basic Information */}
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center space-x-2">
                  <IdCardIcon className="w-5 h-5" />
                  <span>Basic Information</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InfoCard
                    icon={UserIcon}
                    label="Full Name"
                    value={displayUser.fullname}
                  />
                  <InfoCard
                    icon={MailIcon}
                    label="Email Address"
                    value={displayUser.email}
                  />
                  <InfoCard
                    icon={PhoneIcon}
                    label="Phone Number"
                    value={displayUser.phone}
                  />
                  <InfoCard
                    icon={MapPinIcon}
                    label="City"
                    value={displayUser.city}
                  />
                  <InfoCard
                    icon={BuildingIcon}
                    label="Company"
                    value={displayUser.companyName}
                  />
                  <InfoCard
                    icon={ShieldIcon}
                    label="Role"
                    value={displayUser.role}
                  />
                </div>
              </div>

              {/* Account Information */}
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center space-x-2">
                  <ClockIcon className="w-5 h-5" />
                  <span>Account Information</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InfoCard
                    icon={CalendarIcon}
                    label="Account Created"
                    value={new Date(displayUser.createdAt).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    )}
                  />
                  <InfoCard
                    icon={CalendarIcon}
                    label="Last Updated"
                    value={new Date(
                      displayUser.updatedAt || displayUser.createdAt
                    ).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  />
                  <InfoCard
                    icon={IdCardIcon}
                    label="User ID"
                    value={displayUser._id}
                    className="md:col-span-2"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-blue-50/80 to-blue-50/80 px-8 py-6 border-t border-blue-200/50 flex items-center justify-between">
          <div className="text-sm text-blue-600">
            Last updated: {new Date().toLocaleString()}
          </div>
          <div className="flex space-x-3">
            <button
              onClick={handleDownload}
              disabled={loading}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-500 text-white px-6 py-2 rounded-xl hover:from-blue-600 hover:to-blue-600 font-medium transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <DownloadIcon className="w-4 h-4" />
              <span>Download Data</span>
            </button>
            <button
              onClick={onClose}
              className="flex items-center space-x-2 bg-white/80 text-blue-700 px-6 py-2 rounded-xl hover:bg-white border border-blue-300 font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span>Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailModal;
