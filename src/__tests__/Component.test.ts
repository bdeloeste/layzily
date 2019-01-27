import { Component } from '../index';

describe('<Component />', () => {
  it('Should greet', () => {
    expect(Component('Delo')).toBe('Hello Delo');
  });
});
