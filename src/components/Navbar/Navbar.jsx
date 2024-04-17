import { useContext } from "react";
import { FaHome } from "react-icons/fa";
import {
  VscSettings,
  VscAccount,
  VscSymbolProperty,
  VscChecklist,
} from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";

const Navbar = () => {
  const { handlePasswordType, handleSetting, handleBookmark, handleAbout } =
    useContext(AuthContext);
  return (
    <div>
      <ul className="menu menu-horizontal rounded-box gap-6 text-xl py-6 px-4">
        <li className="tooltip" data-tip="Home">
          {/* home */}
          <NavLink to="/">
            <FaHome />
          </NavLink>
        </li>
        <li className="tooltip" data-tip="Bookmark">
          {/* save password */}
          <button onClickCapture={handleBookmark}>
            <VscChecklist />
          </button>
        </li>
        <li className="tooltip" data-tip="Setting">
          {/* setting */}
          <button onClickCapture={handleSetting}>
            <VscSettings />
          </button>
        </li>
        <li className="tooltip" data-tip="Password">
          {/* password setting */}

          <button onClickCapture={handlePasswordType}>
            <VscSymbolProperty />
          </button>
        </li>
        <li className="tooltip" data-tip="About">
          {/* about */}
          <button onClickCapture={handleAbout}>
            <VscAccount />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
