document.querySelector('#in-video-url')
  .addEventListener('paste', (event) => {
  
  const videoURL = event.clipboardData.getData('text');
  const videoID = extractYoutubeId(videoURL);
  
  console.log('video URL is ', videoURL);
  console.log('video ID is ', videoID);
  
  player.cueVideoById(videoID)
  
});


function extractYoutubeId(url) {
  const youtubeRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|shorts\/)?([a-zA-Z0-9_-]{11})/;
  const match = url.match(youtubeRegex);
  if (match && match[1]) {
    return match[1];
  }
  return null;
}

