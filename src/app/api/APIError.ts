/**
 * API Error class
 * @extends Error
 */

class APIError extends Error {
  /**
   * @param {string} message - Message of the error
   * @param {number} status - HTTP status code
   */
  status = 500;
  constructor(message = 'An unknown error occured', status = 500) {
    super(message);
    this.status = status;
  }
}

export default APIError;
