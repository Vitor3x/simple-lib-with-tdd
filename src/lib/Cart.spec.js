import { beforeEach, describe, expect, it } from 'vitest';
import Cart from './Cart';

describe('Cart', () => {
  let cart;
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
});
