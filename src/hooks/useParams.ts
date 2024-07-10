import { useMemo } from 'react';

export default function useParams(): [
  URLSearchParams,
  (name: string, value: string | number) => void,
] {
  const params = useMemo(() => new URLSearchParams(window.location.search), []);

  const setParams = (name: string, value: string | number) => {
    if (value === undefined) {
      params.delete(name);
    } else {
      params.set(name, String(value));
    }

    let redirectUrl = '';

    if (params.size) redirectUrl = `${window.location.pathname}?${params.toString()}`;
    else redirectUrl = `${window.location.pathname}`;

    window.history.pushState(null, null, redirectUrl);
  };

  return [params, setParams];
}
