export default class HttpClient {
  baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async fetch(url: string, options: RequestInit) {
    const response = await fetch(`${this.baseURL}${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    let data;
    try {
      data = await response.json();
    } catch (error) {
      console.error(error);
    }
    if (response.status > 299 || response.status < 200) {
      const message = data && data.message ? data.message : 'Something went wrong';
      throw new Error(message);
    }
    return data;
  }
}
