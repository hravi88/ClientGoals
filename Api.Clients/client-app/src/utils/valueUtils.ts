export const isDefined = (value: any): boolean => {
    return typeof value !== 'undefined';
};

export const isNull = (value: any): boolean => {
    return value === null;
};

export const arrayToString = (array: string[]): string => {
    return Array.isArray(array) ? array.join(', ') : '';
};

export const isObject = (value: any): boolean => {
    return value !== null && typeof value === 'object';
};

export const isEmpty = (value: any): boolean => {
    return value === '';
};

export const select = 'Select';

export const isValidNumber = (value: any): boolean => {
    return /^\d+$/.test(value);
};

export const isObjectEmpty = (value: object): boolean => {
    return Object.keys(value).length === 0 && value.constructor === Object;
};


