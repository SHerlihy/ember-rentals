import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class RentalsComponent extends Component {
  @service('shopping-cart') cart;

  @action remove(item) {
    this.cart.remove(item);
  }
}
