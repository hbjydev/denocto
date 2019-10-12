/**
 * Retrieves data from an API endpoint.
 * @param endpoint The endpoint to retrieve data on
 * @param requestOptions The request options to be passed on to fetch
 */
export default async function GetJson<T>(
  endpoint: string,
  requestOptions: domTypes.RequestInit = {
    headers: [
      ['User-Agent', 'denocto']
    ],
    method: 'GET'
  }
): Promise<T> {
  const res = await fetch(`https://api.github.com/${endpoint}`, requestOptions);
  return await res.json();
}
