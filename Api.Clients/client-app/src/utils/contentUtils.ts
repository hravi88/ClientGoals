import * as DOMPurify from 'dompurify';
import { isNull, isDefined } from './valueUtils';

export const sanitize = (html: string): { __html: string } => {
    return {
        // eslint-disable-next-line no-constant-condition
        __html: typeof isDefined(html) ? DOMPurify.sanitize(html, {
            ADD_ATTR: ['href', 'target'],
        }) : '',
    };
};

export const filteredContent = (dynamicContent: string, params: string[]): string => {
    return dynamicContent.replace(/{(\d+)}/g, (match: string, index: number) => {
        return typeof isDefined(params[index]) && !isNull(params[index]) ? params[index] : match;
    });
};

// used to fetch data from input field
export const getAppValueById = (id: string): any => {
    const inputElement = document.getElementById(id) as HTMLInputElement;

    return inputElement && inputElement.value;
};

export const formatDate = (date: Date): string => {
    let newDate = new Date(date),
        month = '' + (newDate.getMonth() + 1),
        day = '' + newDate.getDate(),
        year = newDate.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [day, month, year].join('-');
}
