import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronDownIcon, UserIcon, LogOutIcon } from "lucide-react";

const AdminNavbar = ({ onLogout }) => {
  const router = useRouter();

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 backdrop-blur-lg border-b border-blue-700/50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-8">
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-1">
              <Link
                href="/admin/"
                className={`relative px-6 py-2 rounded-xl text-xl font-medium transition-all duration-300 ${
                  router.pathname === "/admin/"
                    ? "bg-white/10 text-white shadow-lg backdrop-blur-sm border border-white/20"
                    : "text-white hover:text-white hover:bg-white/5"
                }`}
              >
                Dashboard
                {router.pathname === "/admin/" && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                )}
              </Link>
            </div>
          </div>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onLogout}
              className="group flex items-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-5 py-2 rounded-xl text-sm font-medium text-white shadow-lg hover:shadow-red-500/30 transition-all duration-300 transform hover:scale-105"
            >
              <LogOutIcon className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
