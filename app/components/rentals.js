import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class RentalsComponent extends Component {
  @tracked query = '';

  @service('shopping-cart') cart;

  @action add(item) {
    this.cart.add(item);
  }
}
