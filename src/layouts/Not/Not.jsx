import pageNot from '../../assets/404_pana.svg';
const Not = () => {
    return (
        <div className={`w-fit mx-auto`}>
            <h1 className="text-2xl font-semibold mt-4">Not ready yet ?</h1>
            <img src={pageNot} alt="" />
        </div>
    );
};

export default Not;