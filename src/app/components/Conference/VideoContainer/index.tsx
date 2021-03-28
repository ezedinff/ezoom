import React, { useContext, useEffect, useRef, useState } from 'react';
import { paintOnCanvas } from 'utils/paint';
import { requestPermission } from 'utils/requestPersmission';
import { RtcService } from '../../../services/rtc.service';
const VideoContainer: React.FC<{ video: boolean; audio: boolean }> = ({
  video,
  audio,
}) => {
  const playerRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  // @ts-ignore
  useEffect(() => {
    const remoteStream = new MediaStream();
    const pc = RtcService.getInstance().getPC();
    contextMenu();
    let interval;
    if (video || audio) {
      requestPermission(video, audio)
        .then(stream => {
          stream.getTracks().forEach(track => {
            pc.addTrack(track);
          });
        })
        .catch(err => console.log(err));
      pc.ontrack = event => {
        event.streams[0].getTracks().forEach(track => {
          remoteStream.addTrack(track);
        });
      };
      // @ts-ignore
      playerRef.current.srcObject = remoteStream;
      interval = setInterval(() => {
        paintOnCanvas(
          containerRef.current,
          canvasRef.current,
          playerRef.current,
        );
      }, 16);
    } else {
      try {
        //@ts-ignore
        let tracks = playerRef.current.srcObject.getTracks();
        //@ts-ignore
        tracks.forEach(track => track.stop());
      } catch (e) {}
    }
    return () => {
      interval = null;
    };
  }, [video, audio]);
  const contextMenu = () => {
    // @ts-ignore
    canvasRef.current.addEventListener(
      'contextmenu',
      function (e) {
        // alert("You've tried to open context menu"); //here you draw your own menu
        e.preventDefault();
      },
      false,
    );
  };
  return (
    <div ref={containerRef} className={'video-container'}>
      <video
        autoPlay
        controls={false}
        playsInline
        style={{ display: 'none' }}
        ref={playerRef}
      ></video>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default VideoContainer;
