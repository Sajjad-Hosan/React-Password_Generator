import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const handlePasswordType = () => {
        document.getElementById("passwordType").showModal()
    }
    // 
    const dataInfo = {handlePasswordType};
  return <AuthContext.Provider value={dataInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
