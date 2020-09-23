import React, { useEffect, useRef, useState } from "react";
import { paintOnCanvas, requestPermission } from "../../utils";
const VideoContainer: React.FC<{video: boolean; audio: boolean}> = ({video, audio}) => {
  const playerRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    //@ts-ignore
  //  playerRef.current.play();
    contextMenu();
    let interval;
    if (video || audio) {
      requestPermission(video, audio).then((stream) => {
        //@ts-ignore
        playerRef.current.srcObject = stream;
      });
      interval = setInterval(() => {
        paintOnCanvas(
          containerRef.current,
          canvasRef.current,
          playerRef.current
        )
      }, 16)
    } else {
      try {
         //@ts-ignore
        let tracks = playerRef.current.srcObject.getTracks();
         //@ts-ignore
				tracks.forEach(track => track.stop())
			} catch (e) {}
    }
    return () => {
     interval = null;
    }
  }, [video, audio]);
  const contextMenu = () => {
   // @ts-ignore
   canvasRef.current.addEventListener('contextmenu', function(e) {
      // alert("You've tried to open context menu"); //here you draw your own menu
      e.preventDefault();
    }, false);
  }
  return (
    <div ref={containerRef} className={"video-container"}>
      <video
        autoPlay
        style={{ display: "none" }}
        ref={playerRef}
      ></video>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default VideoContainer;
