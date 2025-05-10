import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-screen-2xl mx-auto">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
