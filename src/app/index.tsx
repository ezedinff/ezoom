/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { SignInPage } from './pages/SignInPage/index';
import { SignupPage } from './pages/SignupPage/index';
import { AppMessages } from './pages/AppMessages';
import { CallPage } from './pages/CallPage/index';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Maleda"
        defaultTitle="Maleda Application"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="Maleda" />
      </Helmet>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/calls/:id" component={CallPage} />
        <Route exact path="/sign-in" component={SignInPage} />
        <Route exact path="/sign-up" component={SignupPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <AppMessages />
      <GlobalStyle />
    </BrowserRouter>
  );
}
