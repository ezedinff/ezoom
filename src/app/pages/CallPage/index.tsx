import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Header from 'app/components/Conference/Header';
import VideoContainer from 'app/components/Conference/VideoContainer';
import Footer from 'app/components/Conference/Footer';
import Sidebar from 'app/components/Conference/Sidebar';
import { useParams } from 'react-router-dom';
import { RtcService } from '../../services/rtc.service';
export const CallPage: React.FC = () => {
  const [videoEnabled, setVideoEnabled] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const params = useParams();
  useEffect(() => {
    joinCall();
  }, []);
  const joinCall = () => {
    const rtc = RtcService.getInstance();
    // @ts-ignore
    rtc.joinACall(params?.id);
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={9} style={{ paddingLeft: '24px' }}>
        <Header />
        <VideoContainer video={videoEnabled} audio={audioEnabled} />
        <Footer
          videoEnabled={videoEnabled}
          audioEnabled={audioEnabled}
          setVideoEnabled={setVideoEnabled}
          setAudioEnabled={setAudioEnabled}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Sidebar />
      </Grid>
    </Grid>
  );
};
