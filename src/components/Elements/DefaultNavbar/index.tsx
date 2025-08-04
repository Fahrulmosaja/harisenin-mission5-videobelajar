import { IoMenu } from "react-icons/io5";

const DefaultNavbar = () => {
  return (
    <nav>
      <div className="navbar top-0 right-0 left-0 flex py-4 px-7 justify-between items-center fixed z-50 bg-white bg-opacity-90 sm:px-8 md:px-16 lg:px-6 xl:px-90">
        <div>
          <img
            className="w-36 sm:w-32 md:w-38"
            src="/logo/LogoVideoBelajar.png"
            alt="videoBelajar-logo"
          />
        </div>
        <div className="flex items-center gap-3 sm:gap-5">
          <IoMenu
            onClick={() => {
              console.log("Cekk")
            }}
            size={30}
            className="sm:hidden text-textDark-primary focus:text-textDark-secondary cursor-pointer"
          />
          <p className="text-textDark-secondary text-[16px] hidden sm:block">
            Kategori
          </p>
          <img
            className="w-10 h-10 hidden sm:block"
            src="/profile/profileUser.png"
            alt="profile-user"
          />
        </div>
      </div>
    </nav>
  );
};

export default DefaultNavbar;