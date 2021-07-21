import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CartContentsComponent extends Component {
  @service('shopping-cart') cart;

  @action
  remove(item) {
    this.cart.remove(item);
  }
}
