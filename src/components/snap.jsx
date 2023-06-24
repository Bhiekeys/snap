/** @format */

const Snap = () => {
  return (
    <>
      <header>
        <div className="container flex justify-between items-center py-5">
          <div className="flex gap-6 md:gap-11">
            <h2 className="text-4xl font-semibold mb-2 text-almostBlack ml-2 sm:ml-0">
              snap
            </h2>

            <ul className="hidden sm:flex items-center gap-3 md:gap-6">
              <li className="text-mediumGray cursor-pointer text-lg">Features</li>
              <li className="text-mediumGray cursor-pointer text-lg">Company</li>
              <li className="text-mediumGray cursor-pointer text-lg">Careers</li>
              <li className="text-mediumGray cursor-pointer text-lg">About</li>
            </ul>
          </div>
          <div className="hidden sm:flex gap-6">
            <button type="button" className="text-mediumGray cursor-pointer text-lg">
              Login
            </button>
            <button
              type="button"
              className="border border-mediumGray px-4 py-1 rounded-xl text-mediumGray cursor-pointer text-lg">
              Register
            </button>
          </div>
          <div className="mr-2 sm:hidden">
            <i className="text-3xl cursor-pointer fas fa-bars"></i>
          </div>
        </div>
      </header>
    </>
  );
};

export default Snap;
