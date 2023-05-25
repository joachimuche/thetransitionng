import React from "react";

const src="https://www.youtube.com/watch?v=Eg5k4fNyh_E"

const Video = () => {
  return (
    <iframe
        width="800"
        height="400"
        src={src}
        frameborder="2"
        allowFullScreen
        title="Player"

/>
    
  );
};

export default Video;
