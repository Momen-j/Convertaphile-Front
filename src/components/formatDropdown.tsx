import { useEffect, useRef } from 'react';
import { getFileType } from '../utils/getFileType';
import { isAudioConversionAllowed } from '../utils/isAudioConversionAllowed';

const FormatDropdown = ({
  // State props
  activeCategory,
  selectedFormat,
  isDropdownOpen,
  isConverting,
  uploadedFile,
  
  // Callback props
  onCategoryChange,
  onFormatSelect,
  onToggleDropdown,
  onClearError,
  
  // Data props
  formatOptions,
  
  // Optional styling props
  className = "",
  disabled = false
}) => {
  const dropdownRef = useRef(null);

  const categories = formatOptions || {};
  const defaultCategory = Object.keys(categories)[0] || "";

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onToggleDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onToggleDropdown]);

  const categoryNames = Object.keys(categories);

  if (categoryNames.length === 0) return null;

  const currentCategory = activeCategory || defaultCategory;
  const currentFormats = categories[currentCategory] || [];

  const handleFormatSelect = (formatValue) => {
    onFormatSelect(formatValue);
    onToggleDropdown(false);
    onClearError();
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Dropdown Trigger */}
      <button
        onClick={() => onToggleDropdown(!isDropdownOpen)}
        disabled={isConverting || disabled}
        className="min-w-24 px-2 py-1 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent disabled:opacity-50 flex items-center justify-between"
      >
        <span>{selectedFormat ? selectedFormat.toUpperCase() : "..."}</span>
        <span className="ml-1">▼</span>
      </button>

      {/* Dropdown Content */}
      {isDropdownOpen && (
        <div className="absolute top-full left-0 mt-1 bg-gray-800 rounded-lg shadow-lg border border-gray-600 z-50 min-w-80">
          <div className="flex">
            {/* Categories Sidebar */}
            <div className="w-25 bg-gray-900 rounded-l-lg p-2">
              {categoryNames.map((category) => (
                <button
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  className={`w-full text-left px-2 py-2 text-sm rounded mb-1 transition-colors ${
                    currentCategory === category
                      ? "bg-gray-700 text-white"
                      : "text-gray-400 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Formats Grid */}
            <div className="flex-1 p-2">
              <div className="grid grid-cols-3 gap-2">
                {currentFormats.map((format) => (
                  <button
                    key={format.value}
                    onClick={() => handleFormatSelect(format.value)}
                    className="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-md transition-colors"
                  >
                    {format.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormatDropdown;