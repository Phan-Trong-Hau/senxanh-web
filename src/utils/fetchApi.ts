import qs from 'qs';

type Props = {
  path: string;
  urlParamsObject?: Record<string, any>;
  options?: RequestInit;
  isAuthenticated?: boolean;
  isPopulate?: boolean;
};

export default async function fetchAPI({
  path,
  urlParamsObject = {},
  options = {},
  isAuthenticated = false,
  isPopulate = true,
}: Props) {
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

    const populateRequest = isPopulate ? { populate: '*' } : {};

    const mergedParams = {
      ...urlParamsObject,
      ...populateRequest,
    };

    // Build request URL
    const queryString = qs.stringify(mergedParams);

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
