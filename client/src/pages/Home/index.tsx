import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import VideoContainer from '../../components/VideoContainer';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Home: React.FC = () => {
    return (
        <Grid container spacing={3}>

            <Grid item xs={12} sm={9}>
                <Header/>
                <VideoContainer/>
                <Footer/>
            </Grid>
            <Grid item xs={12} sm={3}>
            <Sidebar/>
            </Grid>
        </Grid>
    );
}
export default Home;