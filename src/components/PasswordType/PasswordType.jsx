import { useContext} from "react";
import { AuthContext } from "../../Auth/AuthProvider";

const PasswordType = () => {
  const {
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
  } = useContext(AuthContext);

  const handleSliderValue = (e) => {
    const intNum = parseInt(e.target.value);
    setLength(intNum);
  };
  return (
    <>
      <form>
        <h1 className="text-2xl font-semibold mb-8">
          Select Your Password Types
        </h1>
        <div className="grid grid-cols-2 place-items-center gap-5">
          <input
            checked={isNumber}
            type="checkbox"
            onChange={(e) => setIsNumber(e.target.checked)}
            className="btn btn-outline btn-neutral w-36 md:w-56"
            aria-label="Number"
            value="number"
          />
          <input
            type="checkbox"
            checked={isSymbol}
            onChange={(e) => setIsSymbol(e.target.checked)}
            className="btn btn-outline btn-neutral w-36 md:w-56"
            aria-label="Symbol"
            value="symbol"
          />
          <input
            type="checkbox"
            checked={isUpper}
            onChange={(e) => setIsUpper(e.target.checked)}
            className="btn btn-outline btn-neutral w-36 md:w-56"
            aria-label="Upper"
            value="upper"
          />
          <input
            type="checkbox"
            checked={isLower}
            onChange={(e) => setIsLower(e.target.checked)}
            className="btn btn-outline btn-neutral w-36 md:w-56"
            aria-label="Lower"
            value="lower"
          />
        </div>
        <div className="input input-bordered mt-5 flex items-center justify-between">
          <input
            type="range"
            name="passwordLength"
            min={0}
            max="36"
            onChange={handleSliderValue}
            value={length}
            className="passwordRange"
          />
          <output className="label">{length}</output>
        </div>
      </form>
    </>
  );
};

export default PasswordType;
