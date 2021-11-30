# debounce-my-function

## Description

Debounce My Function is a helper to transform any function passed in "debounced". Which means, the function passed will execute after X ms.

## Usage

```ts
const debouncedFunction = debounceMyFunction(yourFunction, 1000, 500);

debouncedFunction();

// yourFunction will execute with a delay of 1000 ms.

// The 500ms in third parameter makes a small delay in the activation.
```

## Thank you and be free to contribute.
