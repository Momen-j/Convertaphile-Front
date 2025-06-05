import MouseClickingIcon from "../assets/images/mouse-clicking.svg"
import dragdrop from "../assets/images/dragdrop.png"


const ConvertButton = () => {
  return (
    <>
    {/**/}
      <div className="flex items-center justify-center">
        <div className="text-center">
          <div className="group relative inline-block">
            {/* Gradient background element */}
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 blur transition duration-1000 group-hover:opacity-75 group-hover:duration-200 group-hover:animate-pulse"></div>

            {/* Main button */}
            <button className="relative w-200 text-indigo-500 hover:text-white rounded-lg bg-pink-200 hover:bg-pink-300 p-40 shadow-lg transition duration-200 cursor-pointer">
              {/* Top-left icon and text */}
              <div className="absolute left-20 top-1/2 -translate-y-1/2 flex flex-col items-center "> {/* Adjust w-20 if needed for text width */}
                <img
                  className="w-32 h-32" // Image size
                  src={MouseClickingIcon}
                  alt="Mouse Clicking Icon"
                />
                <span className="mt-2 text-xs sm:text-sm">Click to Upload File</span> {/* Text underneath, adjust mt-2, text-xs/sm as needed */}
              </div>

              {/* Center text */}
              <div className="text-5xl font-semibold">Or</div>

              {/* Bottom-right icon and text */}
              <div className="absolute right-20 top-1/2 -translate-y-1/2 flex flex-col items-center"> {/* Adjust w-20 if needed for text width */}
                <img
                  className="w-48 h-32" // Image size
                  src={dragdrop}
                  alt="Drag and Drop Icon"
                />
                <span className="mt-2 text-xs sm:text-sm">Drag & Drop</span> {/* Text underneath, adjust mt-2, text-xs/sm as needed */}
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConvertButton;
