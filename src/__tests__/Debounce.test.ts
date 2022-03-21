import { debounceMyFunction } from '../index';
import * as sinon from 'sinon';

let clock: any;

const myTestFunction = {
  test: jest.fn(),
};

beforeEach(() => {
  clock = sinon.useFakeTimers();
});

afterEach(() => {
  clock.restore();
});

it('Should not execute immediately', () => {
  const debounceFunction = debounceMyFunction(myTestFunction.test, 2000, null);

  debounceFunction();
  expect(myTestFunction.test).toHaveBeenCalledTimes(0);
});

it('Should not execute after 1000 ms', () => {
  const debounceFunction = debounceMyFunction(myTestFunction.test, 2000, null);

  debounceFunction();
  clock.tick(1000);

  expect(myTestFunction.test).toHaveBeenCalledTimes(0);
});

it('Should not execute after 2000 ms', () => {
  const debounceFunction = debounceMyFunction(myTestFunction.test, 2000, null);

  debounceFunction();
  clock.tick(2000);

  expect(myTestFunction.test).toHaveBeenCalledTimes(1);
});
