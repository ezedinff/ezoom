import APIError from 'app/api/APIError';

export const getErrorMessage = error => {
  if (error instanceof APIError && error.status !== 500) {
    return error.message;
  }

  console.error(error);
  return 'An unkown error occured';
};
