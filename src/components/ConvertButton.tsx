import MouseClickingIcon from "../assets/images/mouse-click.png";
import dragdrop from "../assets/images/dragdrop.png";

const ConvertButton = () => {
  return (
    <>
      {/**/}
      <div className="flex items-center justify-center">
        <div className="text-center">
          <div className="group relative inline-block">
            {/* Gradient background element */}
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 via-orange-600 to-green-600 opacity-0 blur transition duration-1000 group-hover:opacity-25 group-hover:duration-500 animate-gradient-shift"></div>

            {/* Main button */}
            <button className="relative w-200 text-indigo-500 hover:text-white rounded-lg bg-pink-200 hover:bg-pink-300 p-35 shadow-lg transition duration-200 cursor-pointer">
              {/* Left icon and text */}
              <div className="absolute left-20 top-1/2 -translate-y-1/2 flex flex-col items-center ">
                {" "}
                {/* Adjust w-20 if needed for text width */}
                <img
                  className="w-40 h-32" // Image size
                  src={MouseClickingIcon}
                  alt="Mouse Clicking Icon"
                />
                <span className="mt-2 text-xs sm:text-sm">
                  Click to Upload File
                </span>{" "}
                {/* Text underneath, adjust mt-2, text-xs/sm as needed */}
              </div>

              {/* Center text */}
              <div className="text-5xl font-semibold">Or</div>

              {/* Right icon and text */}
              <div className="absolute right-20 top-1/2 -translate-y-1/2 flex flex-col items-center">
                {" "}
                {/* Adjust w-20 if needed for text width */}
                <img
                  className="w-48 h-32" // Image size
                  src={dragdrop}
                  alt="Drag and Drop Icon"
                />
                <span className="mt-2 text-xs sm:text-sm">
                  Drag & Drop to upload a File
                </span>{" "}
                {/* Text underneath, adjust mt-2, text-xs/sm as needed */}
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConvertButton;
