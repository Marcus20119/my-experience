/* eslint-disable no-console */
const showError = (error: Error | string): void => {
  const errorMessage = error instanceof Error ? error.message : error;
  const stackTrace = error instanceof Error && error.stack ? error.stack : '';

  console.groupCollapsed(
    `%c🚨 ERROR: ${errorMessage}`,
    'color: red; font-weight: bold;',
  );
  stackTrace &&
    console.log(`%c📜 Stack Trace:`, 'font-weight: bold;', stackTrace);
  console.groupEnd();
};

export const LoggerTool = {
  showError,
};
