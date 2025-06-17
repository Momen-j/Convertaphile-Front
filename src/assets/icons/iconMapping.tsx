import { FileIcon } from "react-file-icon";

const iconStyling = { width: "40px", WebkitFontSmoothing: "antialiased" };

export const iconMap = {
  // IMAGE FILES
  jpg: (
    <div style={iconStyling}>
      <FileIcon
        color="var(--color-image-color)"
        gradientColor="var(--color-image-gradient)"
        gradientOpacity={1}
        labelTextColor="var(--color-icon-text)"
        labelUppercase
        fold={false}
        radius={6}
        type="image"
        glyphColor="var(--color-glyph-color)"
        extension="jpg"
      />
    </div>
  ),
  jpeg: (
    <div style={iconStyling}>
      <FileIcon
        color="var(--color-image-color)"
        gradientColor="var(--color-image-gradient)"
        gradientOpacity={1}
        labelTextColor="var(--color-icon-text)"
        labelUppercase
        fold={false}
        radius={6}
        type="image"
        glyphColor="var(--color-glyph-color)"
        extension="jpeg"
      />
    </div>
  ),
  png: (
    <div style={iconStyling}>
      <FileIcon
        color="var(--color-image-color)"
        gradientColor="var(--color-image-gradient)"
        gradientOpacity={1}
        labelTextColor="var(--color-icon-text)"
        labelUppercase
        fold={false}
        radius={6}
        type="image"
        glyphColor="var(--color-glyph-color)"
        extension="png"
      />
    </div>
  ),
  webp: (
    <div style={iconStyling}>
      <FileIcon
        color="var(--color-image-color)"
        gradientColor="var(--color-image-gradient)"
        gradientOpacity={1}
        labelTextColor="var(--color-icon-text)"
        labelUppercase
        fold={false}
        radius={6}
        type="image"
        glyphColor="var(--color-glyph-color)"
        extension="webp"
      />
    </div>
  ),
  bmp: (
    <div style={iconStyling}>
      <FileIcon
        color="var(--color-image-color)"
        gradientColor="var(--color-image-gradient)"
        gradientOpacity={1}
        labelTextColor="var(--color-icon-text)"
        labelUppercase
        fold={false}
        radius={6}
        type="image"
        glyphColor="var(--color-glyph-color)"
        extension="bmp"
      />
    </div>
  ),
  tiff: (
    <div style={iconStyling}>
      <FileIcon
        color="var(--color-image-color)"
        gradientColor="var(--color-image-gradient)"
        gradientOpacity={1}
        labelTextColor="var(--color-icon-text)"
        labelUppercase
        fold={false}
        radius={6}
        type="image"
        glyphColor="var(--color-glyph-color)"
        extension="tiff"
      />
    </div>
  ),
  avif: (
    <div style={iconStyling}>
      <FileIcon
        color="var(--color-image-color)"
        gradientColor="var(--color-image-gradient)"
        gradientOpacity={1}
        labelTextColor="var(--color-icon-text)"
        labelUppercase
        fold={false}
        radius={6}
        type="image"
        glyphColor="var(--color-glyph-color)"
        extension="avif"
      />
    </div>
  ),
  gif: (
    <div style={iconStyling}>
      <FileIcon
        color="var(--color-image-color)"
        gradientColor="var(--color-image-gradient)"
        gradientOpacity={1}
        labelTextColor="var(--color-icon-text)"
        labelUppercase
        fold={false}
        radius={6}
        type="image"
        glyphColor="var(--color-glyph-color)"
        extension="gif"
      />
    </div>
  ),

  // VIDEO FILES
  mp4: (
    <div style={iconStyling}>
      <FileIcon
        color="var(--color-video-color)"
        gradientColor="var(--color-video-gradient)"
        gradientOpacity={1}
        labelTextColor="var(--color-icon-text)"
        labelUppercase
        fold={false}
        radius={6}
        type="video"
        glyphColor="var(--color-glyph-color)"
        extension="mp4"
      />
    </div>
  ),
  avi: (
    <div style={iconStyling}>
      <FileIcon
        color="var(--color-video-color)"
        gradientColor="var(--color-video-gradient)"
        gradientOpacity={1}
        labelTextColor="var(--color-icon-text)"
        labelUppercase
        fold={false}
        radius={6}
        type="video"
        glyphColor="var(--color-glyph-color)"
        extension="avi"
      />
    </div>
  ),
  mov: (
    <div style={iconStyling}>
      <FileIcon
        color="var(--color-video-color)"
        gradientColor="var(--color-video-gradient)"
        gradientOpacity={1}
        labelTextColor="var(--color-icon-text)"
        labelUppercase
        fold={false}
        radius={6}
        type="video"
        glyphColor="var(--color-glyph-color)"
        extension="mov"
      />
    </div>
  ),
  webm: (
    <div style={iconStyling}>
      <FileIcon
        color="var(--color-video-color)"
        gradientColor="var(--color-video-gradient)"
        gradientOpacity={1}
        labelTextColor="var(--color-icon-text)"
        labelUppercase
        fold={false}
        radius={6}
        type="video"
        glyphColor="var(--color-glyph-color)"
        extension="webm"
      />
    </div>
  ),
  wmv: (
    <div style={iconStyling}>
      <FileIcon
        color="var(--color-video-color)"
        gradientColor="var(--color-video-gradient)"
        gradientOpacity={1}
        labelTextColor="var(--color-icon-text)"
        labelUppercase
        fold={false}
        radius={6}
        type="video"
        glyphColor="var(--color-glyph-color)"
        extension="wmv"
      />
    </div>
  ),
  mkv: (
    <div style={iconStyling}>
      <FileIcon
        color="var(--color-video-color)"
        gradientColor="var(--color-video-gradient)"
        gradientOpacity={1}
        labelTextColor="var(--color-icon-text)"
        labelUppercase
        fold={false}
        radius={6}
        type="video"
        glyphColor="var(--color-glyph-color)"
        extension="mkv"
      />
    </div>
  ),

  // AUDIO FILES
  mp3: (
    <div style={iconStyling}>
      <FileIcon
        color="var(--color-audio-color)"
        gradientColor="var(--color-audio-gradient)"
        gradientOpacity={1}
        labelTextColor="var(--color-icon-text)"
        labelUppercase
        fold={false}
        radius={6}
        type="audio"
        glyphColor="var(--color-glyph-color)"
        extension="mp3"
      />
    </div>
  ),
  aac: (
    <div style={iconStyling}>
      <FileIcon
        color="var(--color-audio-color)"
        gradientColor="var(--color-audio-gradient)"
        gradientOpacity={1}
        labelTextColor="var(--color-icon-text)"
        labelUppercase
        fold={false}
        radius={6}
        type="audio"
        glyphColor="var(--color-glyph-color)"
        extension="aac"
      />
    </div>
  ),
  flac: (
    <div style={iconStyling}>
      <FileIcon
        color="var(--color-audio-color)"
        gradientColor="var(--color-audio-gradient)"
        gradientOpacity={1}
        labelTextColor="var(--color-icon-text)"
        labelUppercase
        fold={false}
        radius={6}
        type="audio"
        glyphColor="var(--color-glyph-color)"
        extension="flac"
      />
    </div>
  ),
  ogg: (
    <div style={iconStyling}>
      <FileIcon
        color="var(--color-audio-color)"
        gradientColor="var(--color-audio-gradient)"
        gradientOpacity={1}
        labelTextColor="var(--color-icon-text)"
        labelUppercase
        fold={false}
        radius={6}
        type="audio"
        glyphColor="var(--color-glyph-color)"
        extension="ogg"
      />
    </div>
  ),
  wav: (
    <div style={iconStyling}>
      <FileIcon
        color="var(--color-audio-color)"
        gradientColor="var(--color-audio-gradient)"
        gradientOpacity={1}
        labelTextColor="var(--color-icon-text)"
        labelUppercase
        fold={false}
        radius={6}
        type="audio"
        glyphColor="var(--color-glyph-color)"
        extension="wav"
      />
    </div>
  ),
  m4a: (
    <div style={iconStyling}>
      <FileIcon
        color="var(--color-audio-color)"
        gradientColor="var(--color-audio-gradient)"
        gradientOpacity={1}
        labelTextColor="var(--color-icon-text)"
        labelUppercase
        fold={false}
        radius={6}
        type="audio"
        glyphColor="var(--color-glyph-color)"
        extension="m4a"
      />
    </div>
  ),

  // DOCUMENT FILES
  pdf: (
    <div style={iconStyling}>
      <FileIcon
        color="var(--color-document-color)"
        gradientColor="var(--color-document-gradient)"
        gradientOpacity={1}
        labelTextColor="var(--color-icon-text)"
        labelUppercase
        fold={false}
        radius={6}
        type="document"
        glyphColor="var(--color-glyph-color)"
        extension="pdf"
      />
    </div>
  ),
  doc: (
    <div style={iconStyling}>
      <FileIcon
        color="var(--color-document-color)"
        gradientColor="var(--color-document-gradient)"
        gradientOpacity={1}
        labelTextColor="var(--color-icon-text)"
        labelUppercase
        fold={false}
        radius={6}
        type="document"
        glyphColor="var(--color-glyph-color)"
        extension="doc"
      />
    </div>
  ),
  docx: (
    <div style={iconStyling}>
      <FileIcon
        color="var(--color-document-color)"
        gradientColor="var(--color-document-gradient)"
        gradientOpacity={1}
        labelTextColor="var(--color-icon-text)"
        labelUppercase
        fold={false}
        radius={6}
        type="document"
        glyphColor="var(--color-glyph-color)"
        extension="docx"
      />
    </div>
  ),
  txt: (
    <div style={iconStyling}>
      <FileIcon
        color="var(--color-document-color)"
        gradientColor="var(--color-document-gradient)"
        gradientOpacity={1}
        labelTextColor="var(--color-icon-text)"
        labelUppercase
        fold={false}
        radius={6}
        type="document"
        glyphColor="var(--color-glyph-color)"
        extension="txt"
      />
    </div>
  ),
  rtf: (
    <div style={iconStyling}>
      <FileIcon
        color="var(--color-document-color)"
        gradientColor="var(--color-document-gradient)"
        gradientOpacity={1}
        labelTextColor="var(--color-icon-text)"
        labelUppercase
        fold={false}
        radius={6}
        type="document"
        glyphColor="var(--color-glyph-color)"
        extension="rtf"
      />
    </div>
  ),
  odt: (
    <div style={iconStyling}>
      <FileIcon
        color="var(--color-document-color)"
        gradientColor="var(--color-document-gradient)"
        gradientOpacity={1}
        labelTextColor="var(--color-icon-text)"
        labelUppercase
        fold={false}
        radius={6}
        type="document"
        glyphColor="var(--color-glyph-color)"
        extension="odt"
      />
    </div>
  )
};