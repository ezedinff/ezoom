import { APIConfigType, HeaderObj } from './types';
import axios from 'axios';
import {
  authTokenName,
  API_URL,
  refereshTokenName,
} from '../../utils/constants';
import APIError from './APIError';
import routes from './routes';

const handleTokenReferesh = async (
  lastRequestConfig: APIConfigType,
  refereshToken: string,
) => {
  console.log('Refreshing token...');
  const unauthorizedError = new APIError('Unauthorized', 401);
  try {
    const config: APIConfigType = {
      header: { RFTOKEN: refereshToken },
      isSecureRoute: false,
      route: routes.user.refreshToken,
      method: 'POST',
    };

    const response = await apiCall(config);

    if (response && typeof response.token === 'string') {
      // Request for previous response again
      window.localStorage.setItem(authTokenName, response.token);
      const lastRequestResponse = await apiCall({
        ...lastRequestConfig,
        dontRefresh: true,
      });
      return lastRequestResponse;
    }

    throw unauthorizedError;
  } catch (error) {
    if (error instanceof APIError) throw error;
    else {
      console.log(error);
      throw unauthorizedError;
    }
  }
};

const apiCall = async (config: APIConfigType) => {
  let refereshToken;
  let authToken;

  try {
    const headers: HeaderObj = config.header ? { ...config.header } : {};
    // Add authorization token if route is secure
    if (config.isSecureRoute) {
      authToken = window.localStorage.getItem(authTokenName);
      refereshToken = window.localStorage.getItem(refereshTokenName);
      headers.Authorization = `Bearer ${authToken}`;
    }

    const fullUrl = `${API_URL}${config.route}`;

    const response = await axios({
      method: config.method,
      params: config.query,
      data: config.body,
      url: fullUrl,
      headers,
      responseType: config.responseType || undefined,
    });
    if (response.statusText === 'OK' && config.returnCleanResponse) {
      return response;
    } else if (response.statusText === 'OK') {
      return response.data;
    } else {
      throw new APIError(response.data?.message, response.status);
    }
  } catch (error) {
    if (error.response) {
      const { response } = error;

      // Refresh token and retry if unauthorized
      if (
        config.isSecureRoute &&
        typeof refereshToken === 'string' &&
        response.status === 401 &&
        authToken &&
        !config.dontRefresh
      ) {
        try {
          return handleTokenReferesh(config, refereshToken);
        } catch (error) {
          // Logout the user on error
          if (error instanceof APIError) throw error;
        }
      } else if (error instanceof APIError) throw error;
      else throw new APIError(response.data?.message, response.status);
    } else {
      throw new APIError('Network Error', 400);
    }
  }
};

export default apiCall;
