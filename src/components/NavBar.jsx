const NavBar = () => {
  return (
    <nav className="flex justify-between items-center h-16 bg-gray-100">
      <div className="flex items-center">
        <a className="text-gray-800 hover:text-gray-900 font-bold text-xl px-4 border-r-4">
          Home
        </a>

        <div className="h-full w-0.5 bg-gray-300 mx-4"></div>

        <a className="text-gray-800 hover:text-gray-900 font-bold text-xl px-4 border-r-4">
          About
        </a>

        <div className="h-full w-0.5 bg-gray-300 mx-4"></div>

        <a className="text-gray-800 hover:text-gray-900 font-bold text-xl px-4 border-r-4">
          Pages
        </a>

        <div className="h-full w-0.5 bg-gray-300 mx-4"></div>

        <a className="text-gray-800 hover:text-gray-900 font-bold text-xl px-4 border-r-4">
          Project
        </a>

        <div className="h-full w-0.5 bg-gray-300 mx-4"></div>

        <a className="text-gray-800 hover:text-gray-900 font-bold text-xl px-4">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
