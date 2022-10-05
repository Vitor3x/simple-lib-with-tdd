import { describe, expect, it } from 'vitest';
import { parse, queryString } from './queryString';

describe('Object to query setring', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Vitor',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=Vitor&profession=developer');
  });

  it('should create a valid query string even when an array is passed as value', () => {
    const obj = {
      name: 'Vitor',
      technologies: ['ReactJS', 'Tailwindcss'],
    };

    expect(queryString(obj)).toBe(
      'name=Vitor&technologies=ReactJS,Tailwindcss',
    );
  });

  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Joao',
      technologies: {
        front: 'Reactjs',
        backend: 'Nodejs',
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Joao&technologies=Reactjs';

    expect(parse(qs)).toEqual({
      name: 'Joao',
      technologies: 'Reactjs',
    });
  });

  it('should convert a query string of a single key-value pair to object', () => {
    const qs = 'name=Joao';

    expect(parse(qs)).toEqual({
      name: 'Joao',
    });
  });

  it('should convert a query string to an object taking care of comma separeted values', () => {
    const qs = 'name=Joao&technologies=Reactjs,Nodejs';

    expect(parse(qs)).toEqual({
      name: 'Joao',
      technologies: ['Reactjs', 'Nodejs'],
    });
  });
});
