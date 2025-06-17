import { iconMap } from "../assets/icons/iconMapping";
import { FileIcon } from "react-file-icon";

const getFileIcon = (filename) => {
  const extension = filename.split(".").pop()?.toLowerCase();
  // Look up the icon in our simple map, or return a default
  return iconMap[extension] || <FileIcon />;
};

const shortenFileName = (fileName, maxLength = 20) => {
  if (fileName.length <= maxLength) return fileName;

  const extension = fileName.split(".").pop();
  const nameWithoutExt = fileName.substring(0, fileName.lastIndexOf("."));
  const availableLength = maxLength - extension.length - 4; // -4 for "..." and "."

  return `${nameWithoutExt.substring(0, availableLength)}...${extension}`;
};

const formatFileSize = (bytes) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

const FileInfo = ({ uploadedFile }) => {
  return (
    <>
      <div className="flex items-center gap-4">
        <span>{getFileIcon(uploadedFile.name)}</span>
        <div className="flex items-center gap-2">
          <span
            className="font-medium text-black text-xl truncate max-w-xs"
            title={uploadedFile.name}
          >
            {shortenFileName(uploadedFile.name)}
          </span>
          <span className=" text-gray-800">
            ({formatFileSize(uploadedFile.size)})
          </span>
        </div>
      </div>
    </>
  );
};

export default FileInfo;
