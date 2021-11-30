export const debaunceMyFunction =
  (fn: Function, wait = 1000, time: any) =>
  (...args: any) => {
    clearTimeout(time);
    time = setTimeout(() => {
      fn(...args);
    }, wait);
  };
