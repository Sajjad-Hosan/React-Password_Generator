import { VscWand } from "react-icons/vsc";
import passImage from "../../assets/password_insu.svg";
import PasswordType from "../../components/PasswordType/PasswordType";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import Setting from "../../components/SettingM/Setting";
import Bookmark from "../../components/Bookmark/Bookmark";

const Home = () => {
  const { generatePasswordRandom, password, length } = useContext(AuthContext);
  return (
    <div className="flex flex-col-reverse md:flex-row items-center  justify-between gap-6">
      <div className="flex-1">
        <img src={passImage} className="w-full" />
      </div>
      <div className="flex-1">
        <h1 className="text-2xl md:text-3xl font-light capitalize">
          make your strong
          <span className="text-primary font-bold"> password</span>
        </h1>
        <p className="text-xs md:text-sm my-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
          fugiat. Atque itaque consequuntur culpa, magni enim facilis,
          consequatur debitis suscipit tenetur adipisci magnam dolorem cum omnis
          sapiente quo nostrum fuga quidem aspernatur veritatis rem non totam
          eos animi! Temporibus porro nisi quasi repellendus id ipsa officiis
          illum ullam ut nemo!
        </p>
        <div className="w-full p-5 mt-10 flex flex-col items-center">
          <div className="border-neutral h-18 text-center font-semibold flex gap-2 items-center">
            <input
              className="input input-bordered"
              type="text"
              value={password}
              readOnly
            />
            <input
              className={`w-14 input input-bordered text-center ${
                length < 8 ? "input-error" : "input-success"
              }`}
              value={length < 10 ? "0" + length : length}
              readOnly
            ></input>
          </div>
          <button
            onClickCapture={generatePasswordRandom}
            className="btn btn-primary btn-outline px-10 capitalize mt-4"
          >
            <VscWand /> generate
          </button>
        </div>
      </div>
      {/* modales boxes */}
      <div className="absolute">
      <dialog id="bookmark" className="modal">
          <div className="modal-box max-w-2xl">
            <Bookmark />
            <div className="modal-action">
              <form method="dialog">
                <button className="btn px-8 btn-ghost">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        {/* 2nd mondal */}
        <dialog id="setting" className="modal">
          <div className="modal-box max-w-2xl">
            <Setting />
            <div className="modal-action">
              <form method="dialog">
                <button className="btn px-8 btn-ghost">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        {/* 3rd mondal */}
        <dialog id="passwordType" className="modal">
          <div className="modal-box max-w-2xl">
            <PasswordType />
            <div className="modal-action">
              <form method="dialog">
                <button className="btn px-8 btn-ghost">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Home;
