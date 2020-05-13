/**
 * Retrieves data from an API endpoint.
 * @param endpoint The endpoint to retrieve data on
 * @param requestOptions The request options to be passed on to fetch
 */
export default async function GetJson<T>(
  endpoint: string,
  token?: string
): Promise<T> {
  const init: RequestInit = {
    headers: [
      ['User-Agent', 'denocto'],
      ['Authorization', token ? `token ${token}` : ''],
    ],
    method: "GET"
  };

  const res = await fetch(`https://api.github.com/${endpoint}`, init);
  const json = await res.json() as { message?: string } & T;

  if (json.message) {
    throw new Error(json.message);
  }

  return json;
}
