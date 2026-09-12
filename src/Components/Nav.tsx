import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/logo-text.png";
const Nav = () => {
  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar lg:max-w-9/10 mx-auto flex justify-between">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <RxHamburgerMenu />
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Technologies</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <div className="">
            <a className="btn btn-ghost">
            <img
              src={Logo}
              alt="Logo"
              className="h-6 pl-11 md:pl-0 sm:h-11 md:h-11 w-auto object-contain shrink-0 max-w-45 sm:max-w-60 md:max-w-none"
            />
          </a>
          </div>
        </div>
        <div className="navbar-center text-gray-500 hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="hover:text-pink-600 transition-colors bg-white">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-pink-600 transition-colors bg-white">
                Technologies
              </a>
            </li>
            <li>
              <a className="hover:text-pink-600 transition-colors bg-white">
                Projects
              </a>
            </li>
            <li>
              <a className="hover:text-pink-600 transition-colors bg-white">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-pink-600 transition-colors bg-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <a className="btn-ghost btn-xs lg:btn-md text-sm lg:text-md font-semibold text-gray-700">
            Sign In
          </a>
          <a className="btn bg-theme-gradient text-white rounded-4xl btn-xs lg:btn-md">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
