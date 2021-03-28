import axios from 'axios';
import { API_URL, authTokenName } from 'utils/constants';
import APIError from './APIError';
import { HeaderObj, UploadAPIConfigType } from './types';

const dataURLtoFile = (dataurl, filename) => {
  const arr = dataurl.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n) {
    u8arr[n - 1] = bstr.charCodeAt(n - 1);
    n -= 1; // to make eslint happy
  }
  return new File([u8arr], filename, { type: mime });
};

const sendToFileUploadRoutes = async (
  config: UploadAPIConfigType,
  onUploadProgress: (p: ProgressEvent) => void,
) => {
  // let refereshToken;
  let authToken;

  try {
    const headers: HeaderObj = config.header ? { ...config.header } : {};

    const file = dataURLtoFile(config.fileDataURL, config.fileFieldName);
    const data = new FormData();

    if (typeof config.body === 'object') {
      const bodyKeys = Object.keys(config.body);
      bodyKeys.forEach(key => {
        if (config.body && config.body[key]) {
          data.append(key, config.body[key]);
        }
      });
    }

    data.append(config.fileFieldName, file, config.fileFieldName);

    if (config.isSecureRoute) {
      authToken = window.localStorage.getItem(authTokenName);
      // refereshToken = window.localStorage.getItem(refereshTokenName);
      headers.Authorization = `Bearer ${authToken}`;
    }

    // headers['Content-Type'] = 'multipart/form-data';
    const fullUrl = `${API_URL}${config.route}`;

    const response = await axios.post(fullUrl, data, {
      headers,
      onUploadProgress,
    });
    if (response.statusText === 'OK') {
      return response.data;
    } else {
      throw new APIError(response.data?.message, response.status);
    }
  } catch (error) {
    if (error.response) {
      const { response } = error;

      if (error instanceof APIError) throw error;
      else throw new APIError(response.data?.message, response.status);
    }
  }
};

export default sendToFileUploadRoutes;
