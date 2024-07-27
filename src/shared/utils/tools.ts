import type { ParseKeys } from 'i18next';
import { forEach, uniq } from 'lodash-es';
import queryString from 'query-string';

/**
 * Omit properties from an object and return the result.
 *
 * @param {T} object - the input object
 * @param {Array<keyof T>} keys - the keys to omit from the object
 * @return {Omit<T, keyof typeof keys>} the object after omitting the specified keys
 */
function omitCustom<T>(object: T, keys: (keyof T)[]) {
  const objectAfter = {} as unknown as T;

  for (const p in object) {
    if (!keys.includes(p.valueOf() as keyof T)) {
      objectAfter[p] = object[p];
    }
  }

  return objectAfter as Omit<T, keyof typeof keys>;
}

/**
 * Checks if the given value is empty.
 *
 * @param {string | number | object} value - The value to be checked for emptiness.
 * @return {boolean} Returns true if the value is empty, false otherwise.
 */
function isEmpty(value?: number | object | string): boolean {
  if (
    typeof value === 'undefined' ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  ) {
    return true;
  }

  return false;
}

const classnames = (...args: string[]) => args.filter(Boolean).join(' ');

/**
 * Omit a specific key from an object, including nested objects and arrays.
 *
 * @param {object} obj - the input object
 * @param {string} key - the key to omit
 * @return {object} the new object with the key omitted
 */
const omitDeep = <T extends object>(obj: T, key: string) => {
  const keys = Object.keys(obj);
  const newObj: T = {} as T;
  keys.forEach(i => {
    if (i !== key) {
      const val = obj[i as keyof T];
      if (val instanceof Date) newObj[i as keyof T] = val;
      else if (Array.isArray(val))
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        newObj[i as keyof T] = omitDeepArrayWalk<T>(val, key);
      else if (typeof val === 'object' && val !== null)
        newObj[i as keyof T] = omitDeep(val, key);
      else newObj[i as keyof T] = val;
    }
  });
  return newObj;
};

/**
 * Recursively omits a specific key from all objects in an array.
 *
 * @param {T[]} arr - the array to process
 * @param {string} key - the key to omit
 * @return {T[keyof T]} the processed array
 */
const omitDeepArrayWalk = <T extends object>(arr: T[], key: string) =>
  arr.map(val => {
    if (Array.isArray(val)) return () => omitDeepArrayWalk(val, key);
    if (typeof val === 'object' && val !== null) return omitDeep(val, key);
    return val;
  }) as T[keyof T];

const isNumber = (value?: null | number) =>
  typeof value === 'number' && !Number.isNaN(value);

const isDefinedAndNotNull = <T>(value: T | null | undefined): value is T =>
  value !== null && value !== undefined;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function removeEmptyElements(obj: any): any {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function removeEmpty(obj: any): any {
    if (typeof obj === 'object' && !Array.isArray(obj) && obj !== null) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result = {} as any;

      for (const key in obj) {
        const value = removeEmpty(obj[key]);

        if (value !== undefined) {
          result[key] = value;
        }
      }

      return Object.keys(result).length > 0 ? result : undefined;
    }

    if (Array.isArray(obj)) {
      if (obj.length === 0) {
        return undefined;
      }

      return obj.filter(removeEmpty);
    }

    if (typeof obj === 'string') {
      const value = obj?.trim() || '';

      return value !== '' && value !== null && value !== undefined
        ? value
        : undefined;
    }

    return obj !== '' && obj !== null && obj !== undefined ? obj : undefined;
  }

  return removeEmpty(obj);
}

/**
 * Function to generate a valid href link based on the input URL.
 *
 * @param {string | null | undefined} url - The input URL
 * @return {string} The valid href link
 */
const getATagHref = (url?: null | string) => {
  if (!url) return '';
  return `https://${url.replace(/^(https:\/\/)|(http:\/\/)/g, '')}`;
};

const mapI18nKey = (key: ParseKeys) => key;

type Path<T> = T extends object
  ? { [K in keyof T]: `${Path<T[K]> & string}` }[keyof T]
  : string;

function getAllPaths<T>(obj: T): Path<T>[] {
  const paths: Path<T>[] = [];

  function traverse(currentObj: T, currentPath: string = ''): void {
    for (const key in currentObj) {
      const nextPath = currentPath ? `${currentPath}.${key}` : key;

      if (typeof currentObj[key] === 'object' && currentObj[key] !== null) {
        traverse(currentObj[key] as T, nextPath);
      } else {
        paths.push(nextPath as Path<T>); // Ensure type safety
      }
    }
  }

  traverse(obj);

  for (const key in obj) {
    paths.push(key as unknown as Path<T>); // Ensure type safety
  }

  return uniq(paths);
}

/**
 * Checks if two arrays are equal, regardless of the order of their elements.
 *
 * @param {T[]} arr1 - The first array to compare.
 * @param {T[]} arr2 - The second array to compare.
 * @return {boolean} Returns true if the arrays are equal, false otherwise.
 */
function arraysAreEqual<T>(arr1?: T[], arr2?: T[]) {
  if (arr1?.length !== arr2?.length) {
    return false;
  }

  // Sort arrays of objects based on JSON representation
  const sortedArr1 = arr1?.map(obj => JSON.stringify(obj)).sort();
  const sortedArr2 = arr2?.map(obj => JSON.stringify(obj)).sort();

  // Compare sorted arrays
  return JSON.stringify(sortedArr1) === JSON.stringify(sortedArr2);
}

/**
 * Returns an array with unique values from the input array.
 *
 * @param {T[]} arr - The input array.
 * @return {T[]} An array with unique values.
 */
function getUniqueArrayValues<T>(arr: T[]) {
  return Array.from([...new Set(arr)]);
}

/**
 * Joins the elements of an array into a string using a specified separator.
 *
 * @param {T[]} arr - The array to join.
 * @param {string} [separator=', '] - The separator used to join the array elements.
 * @return {string} The joined string.
 */
function joinArrayToString<T>(arr: T[], separator = ', ') {
  return arr.join(separator);
}

/**
 * Parses the query parameters from a URL search string and returns them as an object.
 *
 * @param {string} searchStr - The URL search string to parse.
 * @return {object} An object containing the parsed query parameters.
 */
const getQueryParamsFromUrl = (searchStr: string) => {
  const parsed = queryString.parse(searchStr);

  forEach(parsed, (value, key) => {
    if (typeof value === 'string') {
      try {
        parsed[key] = JSON.parse(value);
      } catch (error) {
        // console.log(error, 'error')
      }
    }
  });

  if (typeof parsed?.q === 'number') {
    parsed.q = String(parsed.q);
  }

  return parsed;
};

export {
  arraysAreEqual,
  classnames,
  getAllPaths,
  getATagHref,
  getQueryParamsFromUrl,
  getUniqueArrayValues,
  isDefinedAndNotNull,
  isEmpty,
  isNumber,
  joinArrayToString,
  mapI18nKey,
  omitCustom,
  omitDeep,
  omitDeepArrayWalk,
  removeEmptyElements,
};
