const keyValueToString = ([key, value]) => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    throw new Error('Please check your params');
  }
  return `${key}=${value}`;
};

export const queryString = obj =>
  Object.entries(obj).map(keyValueToString).join('&');

export const parse = string =>
  Object.fromEntries(string.split('&').map(item => item.split('=')));
