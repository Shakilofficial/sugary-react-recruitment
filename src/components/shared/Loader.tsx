import Logo from "./Logo";

const Loader = () => {
  return (
    <div className="max-w-screen-2xl mx-auto min-h-screen flex-col gap-4 w-full flex items-center justify-center">
      <div className="w-28 h-28 animate-spin flex items-center justify-center rounded-full border-8 border-gray-300 border-t-yellow-500">
        <div className="w-12 h-12">
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Loader;
