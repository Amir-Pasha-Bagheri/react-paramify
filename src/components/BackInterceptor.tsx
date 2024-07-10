import { useCallback, useContext, useEffect } from 'react';
import ParamifyContext from 'src/paramify-context';
import { usePopKey } from 'hooks/keys';

export default function BackInterceptor() {
  const { paramify } = useContext(ParamifyContext);

  const popKey = usePopKey();

  const popStateListener = useCallback(
    (event: PopStateEvent): void => {
      const lastKey = paramify.keys[paramify.keys.length - 1];
      popKey(lastKey);
    },
    [paramify.keys, popKey]
  );

  useEffect(() => {
    window.addEventListener('popstate', popStateListener);

    return () => {
      window.removeEventListener('popstate', popStateListener);
    };
  }, [popStateListener]);

  return null;
}
