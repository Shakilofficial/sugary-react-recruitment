"use client";

import { useAuth } from "@/context/AuthContext";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "../shared/ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface DashboardHeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashboardHeader = ({
  sidebarOpen,
  setSidebarOpen,
}: DashboardHeaderProps) => {
  const { user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-10 py-3 px-4 md:px-6 bg-transparent transition-shadow border-b-2 border-border ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button
            className="p-1 mr-3 rounded-md lg:hidden hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          </button>

          <h1 className="text-xl font-semibold text-gray-800 dark:text-white hidden md:block">
            Dashboard
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-8 w-8 rounded-full p-0"
              >
                <Avatar className="h-8 w-8">
                  {/* Handle avatar image with fallback */}
                  <AvatarImage
                    src={
                      user?.Avatar
                        ? `https://d1wh1xji6f82aw.cloudfront.net/${user.Avatar}`
                        : ""
                    }
                    alt={user?.FullName || "User"}
                  />
                  <AvatarFallback>
                    {user?.FullName?.charAt(0).toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {user?.FullName || "Guest User"}
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {user?.Email || "guest@example.com"}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logout}>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
