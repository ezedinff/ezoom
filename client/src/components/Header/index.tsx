import React from 'react';
import { Grid, IconButton, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import './index.css';
const Header: React.FC = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <div>App Logo</div>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Button variant="outlined" className={"icon-button"}>
                    <DeleteIcon />
                </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default Header;