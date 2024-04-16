import { VscWand } from "react-icons/vsc";
import passImage from "../../assets/password_insu.svg";
import PasswordType from "../../components/PasswordType/PasswordType";
const Home = () => {
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
        <div className="w-full p-5 mt-10">
          <input
            type="text"
            className="input input-bordered border-neutral w-full h-20"
          />
          <button className="btn btn-primary btn-outline px-10 capitalize mt-4">
            <VscWand /> generate
          </button>
        </div>
      </div>
      {/* modales boxes */}
      <div className="absolute">
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="passwordType" className="modal">
          <div className="modal-box max-w-2xl">
            <PasswordType/>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button, it will close the modal */}
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
