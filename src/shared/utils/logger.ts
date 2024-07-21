import { captureMessage } from '@sentry/react';

/**
 * Logs the error and captures the error message.
 *
 * @param {string} error - the error to be logged
 * @return {void}
 */
const logError = (error: string) => {
  const message = (() => {
    if (typeof error === 'string') {
      return error;
    }

    if (typeof error === 'object') {
      const { message } = error as Error;
      return message;
    }

    return 'Internal server error!';
  })();
  console.error(message);
  captureMessage(message);
};

export { logError };
