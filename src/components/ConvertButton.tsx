import { useState, useRef, useEffect } from "react";
import MouseClickingIcon from "../assets/images/mouse-click.png";
import dragdrop from "../assets/images/dragdrop.png";
import { formatOptions } from "../constants/formatOptions";
import { useFormatSelection } from "../hooks/useFormatSelection";
import { getFileType } from "../utils/getFileType";
import FormatDropdown from "./formatDropdown";
import { RenderToast } from "./renderToast";
import { FaCheck } from "react-icons/fa";
import FileInfo from "./FileInfo";

const ConvertButton = () => {
  const [isHovered, setIsHovered] = useState(false); // NEED TO REMOVE
  const [isDraggedOver, setIsDraggedOver] = useState(false); // NEED TO REMOVE
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isConverting, setIsConverting] = useState(false);
  const [conversionError, setConversionError] = useState(null);
  const [isConverted, setIsConverted] = useState(false);
  const [convertedFileData, setConvertedFileData] = useState(null);
  const [toastError, setToastError] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const fileInputRef = useRef(null);
  const [ellipsis, setEllipsis] = useState("...");
  const [conversionMetadata, setConversionMetadata] = useState(null);

  const {
    activeCategory,
    selectedFormat,
    isDropdownOpen,
    handleCategoryChange,
    getAvailableFormats,
    handleFormatSelect,
    handleToggleDropdown,
    resetSelection,
  } = useFormatSelection(uploadedFile);

  // Validate file type function
  const validateFileType = (file) => {
    const fileType = getFileType(file.name);
    return fileType !== "unknown";
  };

  // Show toast error function
  const showToastError = (message) => {
    setToastError(message);
    setShowToast(true);
  };

  // Auto-hide toast after 5 seconds
  useEffect(() => {
    if (showToast) {
      const timeoutId = setTimeout(() => {
        setShowToast(false);
        setToastError(null);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [showToast]);

  // elipsis
  useEffect(() => {
    // Only run the interval when isConverting is true
    if (isConverting) {
      const intervalId = setInterval(() => {
        setEllipsis((prev) => {
          if (prev.length >= 3) return "";
          return prev + ".";
        });
      }, 500); // Change the speed of the animation here (in milliseconds)

      // This is the CRUCIAL cleanup function
      // It runs when the component unmounts or when isConverting changes to false
      return () => clearInterval(intervalId);
    }
  }, [isConverting]); // The dependency array ensures this effect re-runs when isConverting changes

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDraggedOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDraggedOver(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDraggedOver(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      const file = files[0];

      // Validate file type
      if (!validateFileType(file)) {
        showToastError("File type not supported");
        return;
      }

      setUploadedFile(file);
      console.log("File(s) dropped: ", files);
    }
  };

  // Triggers hidden file input
  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!validateFileType(file)) {
        showToastError("File type not supported");
        // Reset the file input
        e.target.value = "";
        return;
      }

      setUploadedFile(file);
      console.log("File selected:", file);
    }
  };

  const handleConvert = async () => {
    if (!uploadedFile || !selectedFormat) {
      showToastError("Please select a file and target format");
      return;
    }

    setIsConverting(true);
    setConversionError(null);

    try {
      // Create FormData object to send file and target format
      const formData = new FormData();
      formData.append("file", uploadedFile);
      formData.append("targetFormat", selectedFormat);

      console.log(`Converting ${uploadedFile.name} to ${selectedFormat}`);

      // MAKE POST REQUEST TO SERVER
      const response = await fetch("http://localhost:8080/conversion", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Conversion failed: ${response.status} - ${errorText}`);
      }

      // Parse the JSON response containing conversion metadata
      const metadata = await response.json();

      console.log("Conversion metadata received:", metadata);

      // Store the conversion metadata
      setConversionMetadata(metadata);
      setIsConverted(true);

      // Show success message with file info
      console.log(
        `File converted successfully: ${metadata.originalFileName} → ${metadata.convertedFileName}`
      );
      console.log(`File size: ${metadata.fileSizeMB} MB`);
    } catch (error) {
      console.error("Conversion error:", error);
      showToastError("Failed converting file");
    } finally {
      setIsConverting(false);
    }
  };

  const handleDownload = async () => {
    if (!conversionMetadata) {
      showToastError("No converted file available");
      return;
    }

    try {
      console.log(
        `Downloading file with ID: ${conversionMetadata.conversionId}`
      );

      // Make request to download endpoint using the conversion ID
      const response = await fetch(
        `http://localhost:8080/download/${conversionMetadata.conversionId}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        if (response.status === 404) {
          showToastError("Converted file no longer exists or has been deleted");
        } else {
          showToastError(`Download failed: ${response.status} - ${errorText}`);
        }
        return;
      }

      // Get the file as a blob
      const blob = await response.blob();

      // Create download link and trigger download
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;

      // Use the converted filename from metadata (without UUID prefix)
      link.download = conversionMetadata.convertedFileName.substring(
        conversionMetadata.convertedFileName.indexOf("_") + 1
      );

      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      console.log("File downloaded successfully");
    } catch (error) {
      console.error("Download error:", error);
      showToastError("Failed to download file");
    }
  };

  const handleReset = () => {
    setUploadedFile(null);
    //setSelectedFormat("");
    setConversionError(null);
    setIsConverted(false);
    setConvertedFileData(null);
    resetSelection();
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // If file is uploaded, show file info component instead of button
  // split up components below
  if (uploadedFile) {
    return (
      <>
        <div className="flex items-center justify-center">
          <div className="relative flex flex-col w-full max-w-4xl px-6 py-6 border border-black-100 bg-file-list  rounded-xl backdrop-blur-sm">
            {/* Main file info row */}
            <div className="flex items-center justify-between">
              {/* File Info */}
              <FileInfo uploadedFile={uploadedFile}></FileInfo>

              {/* Format Selection / Done Status */}
              <div className="flex items-center gap-2 text-black">
                {isConverted ? (
                  <>
                    <span className="text-xl font-medium text-app-text">
                      File Converted
                    </span>
                    <FaCheck className="text-xl font-medium text-green-600"></FaCheck>
                  </>
                ) : isConverting ? (
                  <span className="text-xl font-medium text-app-text">
                    Converting your file
                    <span className="inline-block w-6 text-left">
                      {ellipsis}
                    </span>
                  </span>
                ) : (
                  <>
                    <span className="text-xl">Convert to</span>
                    <FormatDropdown
                      activeCategory={activeCategory}
                      selectedFormat={selectedFormat}
                      isDropdownOpen={isDropdownOpen}
                      isConverting={isConverting}
                      uploadedFile={uploadedFile}
                      onCategoryChange={handleCategoryChange}
                      onFormatSelect={handleFormatSelect}
                      onToggleDropdown={handleToggleDropdown}
                      onClearError={() => setConversionError(null)}
                      formatOptions={
                        uploadedFile
                          ? getAvailableFormats().categories
                          : formatOptions
                      }
                    />
                  </>
                )}
              </div>

              {/* Action Button */}
              <div className="flex justify-end w-28">
                {isConverted ? (
                  <button
                    onClick={handleDownload}
                    className="px-4 py-1.5 text-xl font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Download
                  </button>
                ) : selectedFormat ? (
                  isConverting ? (
                    <div className="flex items-center justify-center px-4 py-2">
                      <div className="w-5 h-5 border-2 border-navbar-light border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  ) : (
                    <button
                      onClick={handleConvert}
                      className="px-4 py-1.5 text-xl font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Convert
                    </button>
                  )
                ) : (
                  <button
                    onClick={handleReset}
                    disabled={isConverting}
                    className="flex items-center justify-center w-12 h-12 text-black hover:text-red-500 hover:bg-red-50 rounded-full transition-colors disabled:opacity-50"
                    title="Remove file"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/*Convert more files button*/}
            {isConverted && (
              <div className="absolute top-full right-0 mt-3">
                <button
                  onClick={handleReset}
                  className="px-6 py-2 text-lg font-medium text-white bg-navbar-light border border-blue-200 rounded-lg hover:bg-blue-800 hover:border-blue-300 transition-colors"
                >
                  Convert More Files
                </button>
              </div>
            )}
          </div>
        </div>
        <RenderToast
          showToast={showToast}
          toastError={toastError}
          setShowToast={setShowToast}
          setToastError={setToastError}
        />
      </>
    );
  }

  // Original button component
  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileSelect}
        className="hidden"
        accept="*/*"
      />

      <div className="flex items-center justify-center">
        <div className="text-center">
          <div className="group relative inline-block">
            {/* Gradient background element */}
            <div className="absolute -inset-1 rounded-lg bg-gradient-conic opacity-0 blur transition duration-1000 group-hover:opacity-20 group-hover:duration-3000 animate-gradient-rotate"></div>

            {/* Main button */}
            <button
              className="relative w-210 text-app-text hover:text-app-text rounded-lg bg-gray-50/50 p-40 shadow-lg transition duration-200 cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={handleClick}
            >
              {/* Left icon and text */}
              <div className="absolute left-19 top-1/2 -translate-y-1/2 flex flex-col items-center ">
                <img
                  className="w-48 h-40"
                  src={MouseClickingIcon}
                  alt="Mouse Clicking Icon"
                />
                <span className="mt-2 font-semibold sm:text-2xl">
                  Click to Upload
                </span>
              </div>

              {/* Center text */}
              <div className="text-6xl font-semibold">Or</div>

              {/* Right icon and text */}
              <div className="absolute right-15 top-1/2 -translate-y-1/2 flex flex-col items-center">
                <img
                  className="w-54 h-40"
                  src={dragdrop}
                  alt="Drag and Drop Icon"
                />
                <span className="mt-2 text-xs font-semibold sm:text-2xl">
                  Drag & Drop to Upload
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <RenderToast
        showToast={showToast}
        toastError={toastError}
        setShowToast={setShowToast}
        setToastError={setToastError}
      ></RenderToast>
    </>
  );
};

export default ConvertButton;
