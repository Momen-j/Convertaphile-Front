// Check if audio conversion is allowed based on website rules
export const isAudioConversionAllowed = (fromFormat, toFormat) => {
  // Audio format categorization for conversion rules
  const lossyAudioFormats = ["mp3", "aac", "ogg", "m4a"];
  const losslessAudioFormats = ["flac", "wav"];
  
  const isFromLossy = lossyAudioFormats.includes(fromFormat);
  const isToLossless = losslessAudioFormats.includes(toFormat);

  // Rule: Lossy to lossless is NOT allowed
  if (isFromLossy && isToLossless) return false;

  // All other combinations are allowed:
  // - Lossy to lossy ✅
  // - Lossless to lossy ✅
  // - Lossless to lossless ✅
  return true;
};
