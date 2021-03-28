import React from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Link,
  MenuItem,
  Typography,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import theme from 'theme';

const footerItems = [
  {
    title: 'Get to know us',
    items: [
      { name: 'About us', path: '/about-us' },
      { name: 'Blog', path: '/blog' },
    ],
  },
  {
    title: 'Grow with us',
    items: [
      { name: 'Register your company', path: '/register' },
      { name: 'Register your Stock', path: '/register' },
      { name: 'Register your loan products', path: '/register' },
    ],
  },
  {
    title: 'Let us help you',
    items: [
      { name: 'Help', path: '/help' },
      { name: 'Contact us', path: '/contact-us' },
    ],
  },
];
const FooterItem = ({ title, items }) => {
  return (
    <Container style={{ marginBottom: '24px', display: 'flex' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '0 24px',
          alignContent: 'space-around',
        }}
      >
        <Typography variant="subtitle1" color="primary">
          {title}
        </Typography>
        {items.map(item => {
          return (
            <Link
              {...{
                component: RouterLink,
                to: item.path,
                style: {
                  textDecoration: 'none',
                  color: '#c2d0da',
                  width: 'auto',
                },
                key: item.name,
              }}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </Container>
  );
};
export default function Footer() {
  return (
    <>
      <Container
        style={{
          borderBottom: '1px solid #c2d0da',
          paddingTop: '32px',
          paddingBottom: '32px',
          boxShadow: '0px -3px 5px 0px rgba(0,0,0,0.75)',
          backgroundColor: theme.palette.text.primary,
        }}
      >
        <Grid container spacing={2}>
          {footerItems.map(item => (
            <Grid key={item.title} item xs={12} md={4}>
              <FooterItem title={item.title} items={item.items} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <div
        style={{
          color: '#c2d0da',
          textAlign: 'center',
          padding: '8px',
          backgroundColor: '#212126',
        }}
      >
        Copyright
      </div>
    </>
  );
}
