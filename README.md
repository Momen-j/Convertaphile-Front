# Convertaphile: Universal Media Converter

**Convertaphile** is a powerful, high-performance website built with Typescript & React on the frontend & Kotlin and Ktor on the backend that leverages FFmpeg for seamless conversion between a wide array of image, video, and audio formats. Whether you need to optimize images for the web, change video formats, or extract audio, Convertaphile provides an efficient solution.

## ✨ Features

- **Comprehensive Media Conversion:** Convert between popular image, video, and audio formats.
  - **Images:** JPG/JPEG, PNG, WEBP, GIF, BMP, TIFF, AVIF
  - **Video:** MP4, AVI, MOV, WEBM, WMV, MKV
  - **Audio:** MP3, AAC, FLAC, OGG, WAV, M4A
- **RESTful API:** Clean and intuitive API endpoints for file uploads and conversions.

## 🔗 How It Works

Convertaphile's [backend](https://github.com/Momen-j/Convertaphile) functions as a microservice:

1. Users send a `POST` request with a file and desired output format to the `/conversion` endpoint.
2. The server saves the uploaded file to a secure, temporary location.
3. The file is analyzed to determine its exact type and characteristics.
4. Based on the detected type and requested output, FFmpeg is invoked with specific, optimized commands to perform the conversion.
5. The converted file is streamed back to the user with appropriate HTTP headers (e.g., `Content-Disposition` for download).
6. All temporary files are immediately deleted from the server.

This ensures privacy, efficiency, and a clean server environment.
