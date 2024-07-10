// used cloneDeep() function from lodash

export default function deepCopy<T>(value: T): T {
  if (typeof value !== 'object' || value === null) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(deepCopy) as T;
  }

  const copy: any = {};

  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      copy[key] = deepCopy(value[key]);
    }
  }

  return copy;
}
