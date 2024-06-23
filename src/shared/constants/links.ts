export const LINKS = {
  main: '/',
  result: (id?: string) => `/result/${id}`,
  testing: (id?: string, params?: Record<string, string>) =>
    buildUrl(`/testing/${id}`, params),
};

export const buildUrl = (url: string, params?: Record<string, string>) => {
  if (!url) return '';

  if (!params) return url;

  const searchParams = new URLSearchParams();

  for (const key of Object.keys(params)) {
    if (params?.[key]) {
      searchParams.append(key, params?.[key] as string);
    }
  }

  return decodeURIComponent(`${url}?${searchParams.toString()}`);
};
