import React from 'react';
import { Grid, IconButton, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import './index.css';
const Header: React.FC = () => {
  return (
    <div className={'header'}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7}>
          <div className={'appLogo'}>
            <img
              src="https://res.cloudinary.com/dtz77duv8/image/upload/v1598378902/ezoom_x96oec.png"
              alt="logo"
              height={64}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={5}>
          <div className={'button-container'}>
            <div style={{ width: '100%' }}></div>
            <Button size={'small'} variant="outlined" className={'icon-button'}>
              <CloudUploadOutlinedIcon />
            </Button>
            <Button size={'small'} variant="outlined" className={'icon-button'}>
              <SettingsOutlinedIcon />
            </Button>
            <Button size={'small'} variant="outlined" className={'icon-button'}>
              <MoreHorizOutlinedIcon />
            </Button>
            <Button size={'small'} variant="outlined" className={'end-button'}>
              Finish the lesson
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
