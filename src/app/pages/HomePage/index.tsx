import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {
  Card,
  CardActionArea,
  CardContent,
  Container,
  Link,
} from '@material-ui/core';
import { RtcService } from '../../services/rtc.service';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import theme from 'theme';

export function HomePage() {
  const [callId, setCallId] = useState();
  const createOffer = async () => {
    const rtc = RtcService.getInstance();
    const id = await rtc.createAnOffer();
    setCallId(id);
  };
  return (
    <>
      <Helmet>
        <title>Welcome</title>
        <meta name="description" content="Maleda homepage" />
      </Helmet>
      <Container maxWidth="md">
        <Card style={{ padding: '24px' }}>
          <CardContent>
            <TextField
              fullWidth
              value={callId}
              name="callID"
              disabled={true}
              variant="outlined"
            />
          </CardContent>
          <CardActionArea style={{ padding: '24px' }}>
            <Button onClick={createOffer} variant="contained" color="primary">
              Create A call
            </Button>
            <Button variant="contained" color="primary">
              copy call Link
            </Button>
            <Link
              {...{
                variant: 'button',
                component: RouterLink,
                to: `/calls/${callId}`,
                color: 'inherit',
                style: { textDecoration: 'none' },
                key: callId + '132',
              }}
            >
              Go Call page and wait
            </Link>
          </CardActionArea>
        </Card>
      </Container>
    </>
  );
}
