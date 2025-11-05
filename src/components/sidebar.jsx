import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  CheckSquare,
  Users,
  ClipboardList,
  PlusCircle,
  User,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
      exact: true,
    },
    {
      name: "My Tasks",
      path: "/my-tasks",
      icon: CheckSquare,
    },
    {
      name: "All Tasks",
      path: "/all-tasks",
      icon: ClipboardList,
    },

    {
      name: "Create Task",
      path: "/create-task",
      icon: PlusCircle,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: User,
    },
  ];

  const isActive = (path, exact = false) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <nav className="p-6">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path, item.exact);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  active
                    ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <Icon
                  className={`h-5 w-5 ${
                    active ? "text-blue-700" : "text-gray-400"
                  }`}
                />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Settings Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <Link
            to="/settings"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive("/settings")
                ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            <Settings
              className={`h-5 w-5 ${
                isActive("/settings") ? "text-blue-700" : "text-gray-400"
              }`}
            />
            <span className="font-medium">Settings</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
}
