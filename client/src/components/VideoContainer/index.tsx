import React, { useEffect, useRef } from "react";
import { paintOnCanvas } from "../../utils";
const VideoContainer: React.FC = () => {
  const playerRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    //  paintOnCanvas();
    //@ts-ignore
    playerRef.current.play();
    contextMenu();
  }, []);
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
        muted
        loop
        style={{ display: "none" }}
        onTimeUpdate={() =>
          paintOnCanvas(
            containerRef.current,
            canvasRef.current,
            playerRef.current
          )
        }
        ref={playerRef}
        src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4"
      ></video>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default VideoContainer;
