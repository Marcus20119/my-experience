/**
 * Retrieves the namespace from the current URL's hostname.
 * Assumes the namespace is the first segment of the hostname, delimited by a period.
 *
 * @returns {string} The namespace extracted from the hostname.
 */
export const getNamespace = (): string => location.hostname.split('.')[0];
