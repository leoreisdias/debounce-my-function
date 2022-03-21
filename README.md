# debounce-my-function

## Description

Debounce My Function is a helper to transform any function passed in "debounced". Which means, the function passed will execute after X ms.

## Installation
```shell
yarn add @numpod/debounce-my-function

or

npm install @numpod/debounce-my-function --save
```

## Usage

```ts
import { debounceMyFunction } from "@numpod/debounce-my-function";

const debouncedFunction = debounceMyFunction(yourFunction, 1000);

debouncedFunction();

// Your function will execute with a delay of 1000 ms.
```

### Parameters
- *First Parameter (required):* Your function to be debounced
- *Second Parameter (optional):* time in ms for the delay

------------------------------------------------------------

## Thank you and be free to contribute.
