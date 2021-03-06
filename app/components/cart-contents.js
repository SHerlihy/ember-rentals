import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CartContentsComponent extends Component {
  @service('shopping-cart') cart;

  @action
  empty() {
    this.cart.empty();
  }
}
