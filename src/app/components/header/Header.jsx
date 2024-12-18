import { IoEarthOutline } from "react-icons/io5";
const Header = () => {
  return (
    <header className="h-48 w-full  border-2 bg-white text-black justify-center items-center m-0 p-0">
      <div className="top_Nav w-full h-8 bg-blue-dark ">
        <div className="container h-full flex justify-between items-center">
          <div className="time-serves text-white flex flex-1 h-full  justify-end items-center">
            <span className="mr-2">
              <IoEarthOutline />
            </span>
            <span>Available 24/7 at (018) 900-6690</span>
          </div>
          <p className="flex-1 flex justify-end items-center text-white ">
            First purchase offer: take 30% off shopwide. Code applied at
            checkout. Exclusion apply*
          </p>
        </div>
      </div>

      <div className="center-nav w-full h-32 flex justify-center items-center">
        <div className="container flex justify-between items-center">
          <div className="logo flex flex-1 h-full text-3xl  text-bold font-play-fair">
            TopRating
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
