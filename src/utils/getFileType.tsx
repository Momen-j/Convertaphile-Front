export const getFileType = (filename) => {
    const extension = filename.split(".").pop()?.toLowerCase();

    const imageExtensions = [
      "jpg",
      "jpeg",
      "png",
      "webp",
      "bmp",
      "tiff",
      "avif",
      "gif",
    ];
    const videoExtensions = ["mp4", "avi", "mov", "webm", "wmv", "mkv"];
    const audioExtensions = ["mp3", "aac", "flac", "ogg", "wav", "m4a"];
    //const documentExtensions = ["pdf", "doc", "docx", "txt", "rtf", "odt"];

    if (imageExtensions.includes(extension)) return "image";
    if (videoExtensions.includes(extension)) return "video";
    if (audioExtensions.includes(extension)) return "audio";
    //if (documentExtensions.includes(extension)) return "document";

    return "unknown";
  };