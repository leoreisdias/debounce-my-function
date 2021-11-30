export const debaunceMyFunction =
  (fn: (...args: any) => any, wait = 1000, time: any) =>
  (...args: any) => {
    clearTimeout(time);
    time = setTimeout(() => {
      fn(...args);
    }, wait);
  };
