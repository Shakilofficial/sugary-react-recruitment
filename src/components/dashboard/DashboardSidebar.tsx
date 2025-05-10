/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import { LayoutDashboard, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "../shared/Logo";

const mainLinks = [
  { title: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
];

const DashboardSidebar = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: any;
}) => {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-30 w-64 bg-accent shadow-xl transition-transform transform duration-300 ease-in-out",
          open ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0 lg:static lg:inset-0"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 py-5 border-b border-border">
            <div className="flex items-center space-x-2">
              <Logo />
              <span className="text-lg font-bold text-primary">Sugary</span>
            </div>
            <button
              className="p-1 rounded-md lg:hidden hover:bg-accent"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>

          <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
            {mainLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-primary/5"
                  )
                }
              >
                <item.icon className="h-5 w-5 mr-3" />
                <span>{item.title}</span>
              </NavLink>
            ))}
          </nav>

          <div className="p-4 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                &copy; {new Date().getFullYear()} Sugary React
              </span>
              <span className="text-xs text-muted-foreground">v1.0.0</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
