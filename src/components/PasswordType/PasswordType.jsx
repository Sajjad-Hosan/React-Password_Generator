const PasswordType = () => {
  return (
    <>
      <form>
        <h1 className="text-2xl font-semibold mb-8">
          Select Your Password Types
        </h1>
        <div className="grid grid-cols-2 place-items-center gap-5">
          <input
            type="checkbox"
            name="number"
            className="btn btn-outline btn-primary w-56"
            aria-label="Number"
            value="number"
          />
          <input
            type="checkbox"
            name="symbol"
            className="btn btn-outline btn-secondary w-56"
            aria-label="Symbol"
            value="symbol"
          />
          <input
            type="checkbox"
            name="uppercase"
            className="btn btn-outline btn-success w-56"
            aria-label="Upper"
            value="upper"
          />
          <input
            type="checkbox"
            name="lowercase"
            className="btn btn-outline btn-error w-56"
            aria-label="Lower"
            value="lower"
          />
        </div>
        <div className="input input-bordered mt-5 flex ">
        <input
          type="range"
          min={0}
          max="100"
          defaultValue="40"
          className="passwordRange"
          />
          <output className="label">123</output>
          </div>
      </form>
    </>
  );
};

export default PasswordType;
