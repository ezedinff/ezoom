import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import VideocamOffOutlinedIcon from '@material-ui/icons/VideocamOffOutlined';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import MicOffOutlinedIcon from '@material-ui/icons/MicOffOutlined';
import PermCameraMicOutlinedIcon from '@material-ui/icons/PermCameraMicOutlined';
import AlbumOutlinedIcon from '@material-ui/icons/AlbumOutlined';
import SlideshowOutlinedIcon from '@material-ui/icons/SlideshowOutlined';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import './index.css';
import { VideoCall } from '@material-ui/icons';
type enableFunc = (value: boolean) => void;
const Footer: React.FC<{
  videoEnabled: boolean;
  audioEnabled: boolean;
  setVideoEnabled: enableFunc;
  setAudioEnabled: enableFunc;
}> = ({ videoEnabled, audioEnabled, setVideoEnabled, setAudioEnabled }) => {
  return (
    <div className={'footer-container'}>
      <Tooltip title="Camera">
        <IconButton
          aria-label="camera"
          onClick={() => setVideoEnabled(!videoEnabled)}
        >
          {videoEnabled ? (
            <VideocamOutlinedIcon />
          ) : (
            <VideocamOffOutlinedIcon />
          )}
        </IconButton>
      </Tooltip>

      <Tooltip title="Microphone">
        <IconButton
          aria-label="mic"
          onClick={() => setAudioEnabled(!audioEnabled)}
        >
          {audioEnabled ? <MicNoneOutlinedIcon /> : <MicOffOutlinedIcon />}
        </IconButton>
      </Tooltip>

      <Tooltip title="Share Screen">
        <IconButton aria-label="share">
          <PermCameraMicOutlinedIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Record Screen">
        <IconButton aria-label="record" style={{ color: 'red' }}>
          <AlbumOutlinedIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Slides">
        <IconButton aria-label="slides">
          <SlideshowOutlinedIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Poll">
        <IconButton aria-label="poll">
          <PollOutlinedIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default Footer;
