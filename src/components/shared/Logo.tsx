import logo from "/93920768.png";

const Logo = () => {
  return (
    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-primary/20 flex items-center justify-center shadow-md">
      <img src={logo} alt="Logo" className="w-full h-full" />
    </div>
  );
};

export default Logo;
