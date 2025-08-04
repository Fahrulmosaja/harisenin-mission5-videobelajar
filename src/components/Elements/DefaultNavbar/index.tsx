const DefaultNavbar = () => {
  return (
    <nav className="bg-opacity-90 fixed top-0 right-0 left-0 z-50 flex items-center justify-between bg-white px-7 py-4 sm:px-20 md:px-20">
      <div>
        <img
          className="w-36 sm:w-32 md:w-38"
          src="/logo/LogoVideoBelajar.png"
          alt="videoBelajar-logo"
        />
      </div>
    </nav>
  );
};

export default DefaultNavbar;