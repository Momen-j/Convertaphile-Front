import { useState, useCallback } from 'react';
import { getFileType } from '../utils/getFileType';
import { isAudioConversionAllowed } from '../utils/isAudioConversionAllowed';
import { formatOptions } from '../constants/formatOptions';

export const useFormatSelection = (uploadedFile) => {
  const [activeCategory, setActiveCategory] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const getAvailableFormats = useCallback(() => {
    if (!uploadedFile) return { categories: {}, defaultCategory: "" };

    const fileType = getFileType(uploadedFile.name);
    const currentExtension = uploadedFile.name.split(".").pop()?.toLowerCase();

    let availableCategories = {};
    let defaultCategory = "";

    // Determine which categories to show based on file type
      if (fileType === "video") {
        // Video files can convert to video and audio formats
        availableCategories.Videos = formatOptions.video.slice(1); // Remove "..." option
        availableCategories.Audio = formatOptions.audio.slice(1);
        defaultCategory = "Videos";
      } else if (fileType === "audio") {
        availableCategories.Audio = formatOptions.audio.slice(1);
        defaultCategory = "Audio";
      } else if (fileType === "image") {
        availableCategories.Images = formatOptions.image.slice(1);
        defaultCategory = "Images";
      } 
      // else if (fileType === "document") {
      //   availableCategories.Documents = formatOptions.document.slice(1);
      //   defaultCategory = "Documents";
      // }
  
      // Filter out current file extension and apply conversion rules
      Object.keys(availableCategories).forEach((category) => {
        availableCategories[category] = availableCategories[category].filter(
          (format) => {
            // Exclude current file extension
            if (format.value === currentExtension) return false;

            // Exclude JPG/JPEG conversions (both should be hidden if current is either)
            if (fileType === "image" && 
                (currentExtension === "jpg" || currentExtension === "jpeg") &&
                (format.value === "jpg" || format.value === "jpeg")) {
              return false;
            }
  
            // Apply audio conversion rules
            if (fileType === "audio" && category === "Audio") {
              return isAudioConversionAllowed(currentExtension, format.value);
            }
  
            return true;
          }
        );
      });
  
      return { categories: availableCategories, defaultCategory };
  }, [uploadedFile]);

  const handleCategoryChange = useCallback((category) => {
    setActiveCategory(category);
  }, []);

  const handleFormatSelect = useCallback((format) => {
    setSelectedFormat(format);
  }, []);

  const handleToggleDropdown = useCallback((isOpen) => {
    setIsDropdownOpen(isOpen);
  }, []);

  const resetSelection = useCallback(() => {
    setActiveCategory("");
    setSelectedFormat("");
    setIsDropdownOpen(false);
  }, []);

  return {
    activeCategory,
    selectedFormat,
    isDropdownOpen,
    getAvailableFormats,
    handleCategoryChange,
    handleFormatSelect,
    handleToggleDropdown,
    resetSelection,
  };
};