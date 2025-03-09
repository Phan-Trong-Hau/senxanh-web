import qs from 'qs';

export default async function fetchAPI(
  path: string,
  urlParamsObject = {
    populate: '*',
  },
  options = {},
  isAuthenticated = false
) {
  try {
    // Merge default and user options
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        'Content-Type': 'application/json',
        Authorization: isAuthenticated
          ? `Bearer ${process.env.STRAPI_API_TOKEN}`
          : null,
      },
      ...options,
    } as RequestInit;

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);

    const requestUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api${path}${
      queryString ? `?${queryString}` : ''
    }`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}
