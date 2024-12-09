// utils/generateThumbnail.js

import videojs from 'video.js';
import 'video.js/dist/video-js.css'; // Ensure video.js styles are included

export const generateThumbnail = (videoUrl, callback) => {
  const videoElement = document.createElement('video');
  videoElement.src = videoUrl;
  videoElement.crossOrigin = 'anonymous'; // Handle CORS if needed

  videoElement.addEventListener('loadeddata', () => {
    videoElement.currentTime = Math.floor(videoElement.duration / 2); // Capture thumbnail at midpoint
  });

  videoElement.addEventListener('seeked', () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;

    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
    
    const thumbnailDataUrl = canvas.toDataURL('image/jpeg');
    callback(thumbnailDataUrl);
  });

  videoElement.load();
};
