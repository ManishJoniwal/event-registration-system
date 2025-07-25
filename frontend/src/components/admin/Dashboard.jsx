"use client";
import { useState, useEffect } from "react";
import { getAllUsers } from "../../services/adminServices";
import UserDetailModal from "./UserDetailModal";
import {
  SearchIcon,
  FilterIcon,
  XIcon,
  UsersIcon,
  TrendingUpIcon,
  CalendarIcon,
  MapPinIcon,
  BuildingIcon,
  UserCheckIcon,
  EyeIcon,
  DownloadIcon,
  SortAscIcon,
  SortDescIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [filters, setFilters] = useState({
    role: "",
    city: "",
    companyName: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        const data = await getAllUsers(token, filters);
        console.log("data", data);
        setUsers(data.users);
      } catch (err) {
        setError("Failed to load users. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setFilters((prev) => ({ ...prev, companyName: e.target.value }));
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setFilters({
      role: "",
      city: "",
      companyName: "",
      startDate: "",
      endDate: "",
    });
    setSearchTerm("");
    setCurrentPage(1);
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue < bValue) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedUsers = sortedUsers.slice(startIndex, endIndex);

  const handleViewDetails = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleDownloadUserData = (user) => {
    const dataStr = JSON.stringify(user, null, 2);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
    const exportFileDefaultName = `${user.name}_data.json`;
    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  };

  const hasActiveFilters = Object.values(filters).some((value) => value !== "");

  const stats = [
    {
      label: "Total Users",
      value: users.length,
      icon: UsersIcon,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      label: "Active Users",
      value: users.filter((user) => user.role === "user").length,
      icon: UserCheckIcon,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      label: "Admin Users",
      value: users.filter((user) => user.role === "admin").length,
      icon: TrendingUpIcon,
      color: "from-blue-600 to-blue-600",
      bgColor: "bg-gradient-to-r from-blue-50 to-blue-50",
      textColor: "text-blue-700",
    },
  ];

  const SortIcon = ({ column }) => {
    if (sortConfig.key !== column) {
      return <SortAscIcon className="w-4 h-4 text-gray-400" />;
    }
    return sortConfig.direction === "asc" ? (
      <SortAscIcon className="w-4 h-4 text-blue-600" />
    ) : (
      <SortDescIcon className="w-4 h-4 text-blue-600" />
    );
  };

  return (
    <div className="min-h-screen bg-white ml-20 mr-20">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-blue-800 bg-clip-text text-transparent mb-2">
                Admin Dashboard
              </h1>
              <p className="text-blue-800">
                Manage and monitor all users in your system
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-blue-800 bg-white/70 px-4 py-2 rounded-xl border border-blue-200">
                Last updated: {new Date().toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-200/50 p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-600 mb-1">
                      {stat.label}
                    </p>
                    <p className="text-3xl font-bold text-blue-800">
                      {stat.value}
                    </p>
                  </div>
                  <div
                    className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <Icon className={`w-8 h-8 ${stat.textColor}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-200/50 mb-8 overflow-hidden">
          {/* Search Bar */}
          <div className="p-6 border-b border-blue-200/50">
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-500" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder="Search by name, company, ID..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 bg-blue-50/50 focus:bg-white"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  showFilters || hasActiveFilters
                    ? "bg-blue-700 text-white shadow-lg shadow-blue-500/25"
                    : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                }`}
              >
                <FilterIcon className="w-5 h-5" />
                <span>Filters</span>
                {hasActiveFilters && (
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                )}
              </button>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="p-6 bg-gradient-to-r from-blue-50/50 to-blue-50/50 border-t border-blue-200/50">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm font-medium text-blue-800">
                    <MapPinIcon className="w-4 h-4" />
                    <span>City</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={filters.city}
                    onChange={handleFilterChange}
                    placeholder="Enter city"
                    className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 bg-white/70"
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm font-medium text-blue-800">
                    <UserCheckIcon className="w-4 h-4" />
                    <span>Role</span>
                  </label>
                  <select
                    name="role"
                    value={filters.role}
                    onChange={handleFilterChange}
                    className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 bg-white/70"
                  >
                    <option value="">All Roles</option>
                    <option value="admin">Admin</option>
                    <option value="visitor">Visitor</option>
                    <option value="executive">Executive</option>
                    <option value="organizer">Organizer</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm font-medium text-blue-800">
                    <CalendarIcon className="w-4 h-4" />
                    <span>Start Date</span>
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={filters.startDate}
                    onChange={handleFilterChange}
                    className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 bg-white/70"
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm font-medium text-blue-800">
                    <CalendarIcon className="w-4 h-4" />
                    <span>End Date</span>
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    value={filters.endDate}
                    onChange={handleFilterChange}
                    className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 bg-white/70"
                  />
                </div>
              </div>

              {hasActiveFilters && (
                <div className="flex justify-between items-center pt-4 border-t border-blue-200/50">
                  <div className="flex items-center space-x-2 text-sm text-blue-800">
                    <span>Active filters applied</span>
                  </div>
                  <button
                    onClick={clearFilters}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-200 text-blue-800 rounded-lg hover:bg-blue-300 transition-all duration-200"
                  >
                    <XIcon className="w-4 h-4" />
                    <span>Clear All</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Users Table */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-200/50 overflow-hidden">
          <div className="p-6 border-b border-blue-200/50 bg-gradient-to-r from-blue-50/50 to-blue-50/50">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-blue-800">
                Users ({sortedUsers.length})
              </h2>
              <div className="text-sm text-blue-800">
                Showing {startIndex + 1}-
                {Math.min(endIndex, sortedUsers.length)} of {sortedUsers.length}
              </div>
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center h-64 space-y-4">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
              <p className="text-blue-600">Loading users...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center h-64 space-y-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <XIcon className="w-8 h-8 text-red-500" />
              </div>
              <div className="text-center">
                <p className="text-red-600 font-medium">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="text-blue-500 hover:text-blue-600 text-sm mt-2"
                >
                  Try Again
                </button>
              </div>
            </div>
          ) : sortedUsers.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <UsersIcon className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-center">
                <p className="text-blue-600 font-medium">No users found</p>
                <p className="text-blue-500 text-sm">
                  Try adjusting your search criteria
                </p>
              </div>
            </div>
          ) : (
            <>
              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-blue-100/70 to-blue-100/70">
                    <tr>
                      <th
                        className="px-6 py-4 text-left text-xs font-medium text-blue-800 uppercase tracking-wider cursor-pointer hover:bg-blue-200/50 transition-colors"
                        onClick={() => handleSort("email")}
                      >
                        <div className="flex items-center space-x-1">
                          <span>Email</span>
                          <SortIcon column="email" />
                        </div>
                      </th>
                      <th
                        className="px-6 py-4 text-left text-xs font-medium text-blue-800 uppercase tracking-wider cursor-pointer hover:bg-blue-200/50 transition-colors"
                        onClick={() => handleSort("role")}
                      >
                        <div className="flex items-center space-x-1">
                          <span>Role</span>
                          <SortIcon column="role" />
                        </div>
                      </th>
                      <th
                        className="px-6 py-4 text-left text-xs font-medium text-blue-800 uppercase tracking-wider cursor-pointer hover:bg-blue-200/50 transition-colors"
                        onClick={() => handleSort("phone")}
                      >
                        <div className="flex items-center space-x-1">
                          <span>Phone</span>
                          <SortIcon column="phone" />
                        </div>
                      </th>
                      <th
                        className="px-6 py-4 text-left text-xs font-medium text-blue-800 uppercase tracking-wider cursor-pointer hover:bg-blue-200/50 transition-colors"
                        onClick={() => handleSort("city")}
                      >
                        <div className="flex items-center space-x-1">
                          <span>City</span>
                          <SortIcon column="city" />
                        </div>
                      </th>
                      <th
                        className="px-6 py-4 text-left text-xs font-medium text-blue-800 uppercase tracking-wider cursor-pointer hover:bg-blue-200/50 transition-colors"
                        onClick={() => handleSort("companyName")}
                      >
                        <div className="flex items-center space-x-1">
                          <span>Company</span>
                          <SortIcon column="companyName" />
                        </div>
                      </th>
                      <th
                        className="px-6 py-4 text-left text-xs font-medium text-blue-800 uppercase tracking-wider cursor-pointer hover:bg-blue-200/50 transition-colors"
                        onClick={() => handleSort("createdAt")}
                      >
                        <div className="flex items-center space-x-1">
                          <span>Joined</span>
                          <SortIcon column="createdAt" />
                        </div>
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-200/50">
                    {paginatedUsers.map((user, index) => (
                      <tr
                        key={user._id}
                        className={`hover:bg-blue-50/50 transition-colors ${
                          index % 2 === 0 ? "bg-white/50" : "bg-blue-25/30"
                        }`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-blue-800">
                            {user.email}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                              user.role === "admin"
                                ? "bg-gradient-to-r from-red-100 to-red-200 text-red-800"
                                : "bg-gradient-to-r from-blue-100 to-blue-100 text-blue-800"
                            }`}
                          >
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-800">
                          {user.phone}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-800">
                          {user.city}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-800">
                          {user.companyName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-800">
                          {new Date(user.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleViewDetails(user)}
                              className="bg-gradient-to-r from-blue-500 to-blue-500 text-white px-3 py-1 rounded-lg hover:from-blue-600 hover:to-blue-600 text-xs font-medium transition-all duration-200 flex items-center space-x-1 shadow-md hover:shadow-lg"
                            >
                              <EyeIcon className="w-3 h-3" />
                              <span>View</span>
                            </button>
                            <button
                              onClick={() => handleDownloadUserData(user)}
                              className="bg-gradient-to-r from-blue-500 to-blue-500 text-white px-3 py-1 rounded-lg hover:from-blue-600 hover:to-blue-600 text-xs font-medium transition-all duration-200 flex items-center space-x-1 shadow-md hover:shadow-lg"
                            >
                              <DownloadIcon className="w-3 h-3" />
                              <span>print</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="px-6 py-4 border-t border-blue-200/50 bg-gradient-to-r from-blue-50/30 to-blue-50/30">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-blue-600">
                      Page {currentPage} of {totalPages}
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() =>
                          setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                        disabled={currentPage === 1}
                        className="flex items-center space-x-1 px-3 py-2 bg-white border border-blue-300 rounded-lg text-sm font-medium text-blue-700 hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                      >
                        <ChevronLeftIcon className="w-4 h-4" />
                        <span>Previous</span>
                      </button>
                      <button
                        onClick={() =>
                          setCurrentPage((prev) =>
                            Math.min(prev + 1, totalPages)
                          )
                        }
                        disabled={currentPage === totalPages}
                        className="flex items-center space-x-1 px-3 py-2 bg-white border border-blue-300 rounded-lg text-sm font-medium text-blue-700 hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                      >
                        <span>Next</span>
                        <ChevronRightIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* User Detail Modal */}
      {showModal && selectedUser && (
        <UserDetailModal
          user={selectedUser}
          onClose={() => {
            setShowModal(false);
            setSelectedUser(null);
          }}
        />
      )}
    </div>
  );
};

export default Dashboard;
