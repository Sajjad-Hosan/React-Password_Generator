import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(true);
  const [isSymbol, setIsSymbol] = useState(false);
  const [isUpper, setIsUpper] = useState(false);
  const [isLower, setIsLower] = useState(false);

  const handlePasswordType = () => document.getElementById("passwordType").showModal();
  const handleSetting = () => document.getElementById("setting").showModal();
  const handleBookmark = () => document.getElementById("bookmark").showModal();
  const handleAbout = () => document.getElementById("about").showModal();

  const generatePassword = () => {
    let getPassword = "";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!@#$%^&*()-_=+";
    const numbers = "0123456789";

    let validChar = "";
    if (isNumber) {
      validChar += numbers;
    }
    if (isSymbol) {
      validChar += symbols;
    }
    if (isUpper) {
      validChar += uppercase;
    }
    if (isLower) {
      validChar += lowercase;
    }

    for (let i = 0; i < length; i++) {
      const randowIndex = Math.floor(Math.random() * validChar.length);
      const char = validChar[randowIndex];
      getPassword += char;
    }
    if (!isNumber && !isSymbol && !isUpper && !isLower) {
      toast.warn("Select at least 1 password type!", {
        pauseOnHover: false,
        closeOnClick: true,
        position: "top-center",
        autoClose: 2000,
      });
      setPassword("");
      return;
    }
      setPassword(getPassword);

  };
  const generatePasswordRandom = () => {
    generatePassword();
  };
  //
  const dataInfo = {
    handlePasswordType,
    handleSetting,
    handleBookmark,
    handleAbout,
    generatePasswordRandom,
    password,
    length,
    isNumber,
    isSymbol,
    isUpper,
    isLower,
    setIsNumber,
    setIsSymbol,
    setIsUpper,
    setIsLower,
    setLength,
  };
  return (
    <AuthContext.Provider value={dataInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
