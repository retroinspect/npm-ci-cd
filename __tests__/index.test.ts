import hello from '../src';

if (hello('retro') !== undefined) {
  throw new Error('hello should return undefined');
}
