import { beforeEach, describe, expect, it } from 'vitest';
import Cart from './Cart';

describe('Cart', () => {
  let cart;
  let product = {
    title: 'Headset',
    price: 35388,
  };

  beforeEach(() => {
    cart = new Cart();
  });

  it('should return 0 when getTotal() is executed in a newly created instance', () => {
    const cart = new Cart();

    expect(cart.getTotal()).toEqual(0);
  });

  it('should multiply quantity and price and receive the total amount', () => {
    const item = {
      quantity: 2,
      product: {
        title: 'Headset',
        price: 2000,
      },
    };

    cart.add(item);

    expect(cart.getTotal()).toEqual(4000);
  });

  it('should ensure no more than on product exists at a time', () => {
    cart.add({
      product,
      quantity: 2,
    });

    cart.add({
      product,
      quantity: 1,
    });

    expect(cart.getTotal()).toEqual(35388);
  });
});
