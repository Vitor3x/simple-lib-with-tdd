import { beforeEach, describe, expect, it } from 'vitest';
import Cart from './Cart';

describe('Cart', () => {
  let cart;
  let product = {
    title: 'Headset - Logitech',
    price: 35388,
  };

  let product2 = {
    title: 'Headset - Razer',
    price: 41872,
  };

  beforeEach(() => {
    cart = new Cart();
  });

  describe('getTotal', () => {
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

    it('should update total when a product gets included and then removed', () => {
      cart.add({
        product,
        quantity: 2,
      });

      cart.add({
        product: product2,
        quantity: 2,
      });

      cart.remove(product);

      expect(cart.getTotal()).toEqual(83744);
    });
  });

  describe('Checkout', () => {
    it('should return an object with the total and the list of items', () => {
      cart.add({
        product,
        quantity: 5,
      });

      cart.add({
        product: product2,
        quantity: 3,
      });

      expect(cart.checkout()).toMatchSnapshot();
    });

    it('should return an object with the total and the list of items when summary() is called', () => {
      cart.add({
        product,
        quantity: 5,
      });

      cart.add({
        product: product2,
        quantity: 3,
      });

      expect(cart.checkout()).toMatchSnapshot();
    });

    it('should reset the cart when checkout() is called', () => {
      cart.add({
        product: product2,
        quantity: 3,
      });

      cart.checkout();

      expect(cart.getTotal()).toEqual(0);
    });
  });
});
