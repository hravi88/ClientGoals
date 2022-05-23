export const get = async(url: string, params: any = {}): Promise<Response> => {
    let getUrl = url;
    const parameters = Object.keys(params);
    // setup query parameters
    if (params && parameters && parameters.length > 0) {
        const query = Object.keys(params)
            .filter((k: string) => params[k] !== null) // skip null values
            .map((k: string) => `${encodeURIComponent(k)} = ${encodeURIComponent(params[k])}`) // concatenate key=value
            .join('&'); // separate by &

        getUrl = `${url}?${query}`; // add ?parameters=values
    }

    const redirectForUnAuthorisedResponse = () => {
        const unAuthorizedUrl = `/src/ErrorBoundary/Error.tsx`;
        window.location.href = unAuthorizedUrl;
    }

    const response = await fetch(getUrl, { credentials: 'same-origin' });
    if (response.ok) {
        return response;
    }
    if(response && response.status === 401) {
        redirectForUnAuthorisedResponse();
    }
    throw Error(`Request rejected with status ${response.status}`);
}

export const getCsrfToken = () : string | null => {
    const element = document.getElementsByName(
        '__RequestVerificationToken')[0] as HTMLInputElement;
    if (element != null) {
        return element.value;
    }
    return null;
}

export const getHeaders = () : Headers => {
    const headers = new Headers();
    const token = getCsrfToken();
    headers.append('Content-Type', 'application/json');
    if(token != null) {
        headers.append('RequestVerificationToken', token);
    }
    return headers;
}

export const post = async (url: string, data: any): Promise<Response> => {
    const headers = getHeaders();
    const response = await fetch(url, {
        body: JSON.stringify(data),
        credentials: 'same-origin',
        headers,
        method: 'POST',
    });
    if (response.ok) {
        return response;
    }
    throw Error(`Request rejected with status ${response.status}`);
}

export const parseResponse = async<T>(response : Response) : Promise<T> => {
    const data = await response.json();
    return data as T;
}
