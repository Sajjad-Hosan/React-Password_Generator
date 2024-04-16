import { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { VscSettings,VscAccount,VscSymbolProperty,VscChecklist    } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";

const Navbar = () => {
    const {handlePasswordType} = useContext(AuthContext);
  return (
    <div>
      <ul className="menu menu-horizontal rounded-box gap-6 text-xl py-6 px-4">
        <li>
            {/* home */}
          <NavLink to='/'><FaHome/></NavLink>
        </li>
        <li>
            {/* save password */}
          <button to='/savepass'><VscChecklist/></button>
        </li>
        <li>
            {/* setting */}
          <NavLink to='/setting'><VscSettings/></NavLink>
        </li>
        <li>
            {/* password setting */}

          <button onClick={handlePasswordType}><VscSymbolProperty/></button>

        </li>
        <li>
            {/* about */}
          <NavLink to='/about'><VscAccount /></NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
