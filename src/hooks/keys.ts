import { Key } from 'model/paramify';
import { useContext } from 'react';
import ParamifyContext from 'src/paramify-context';
import deepCopy from 'utils/deepCopy';
// import useParams from './useParams';

/**
 * These exported hooks are used inside paramify source code
 * and should NOT be exported from package
 */

export function usePopKey() {
  const { paramify, setParamify } = useContext(ParamifyContext);
  // const [params] = useParams();

  const popKey = (key: Key) => {
    let keys = deepCopy(paramify.keys);
    let category = deepCopy(paramify[key.category].items);

    // used JSON.stringify method for key, so there would be no conflict if an item has same key and different category
    // etc :  { key:'etc-key', category:'category-1' } and
    //        { key:'etc-key', category:'category-2' }
    keys = keys.filter((keyItem) => JSON.stringify(keyItem) !== JSON.stringify(key));

    category = category.filter((item) => item.key !== key.key) as any;

    setParamify({ ...paramify, keys, [key.category]: { items: category } });
  };

  return popKey;
}
