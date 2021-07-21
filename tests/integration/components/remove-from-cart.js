import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import Service from '@ember/service';
import click from '@ember/test-helpers/dom/click';

class ShoppingCartStub extends Service {
  items = A(['hellooo']);

  remove(item) {
    this.items.removeObject(item);
  }
}

module('Integration | Component | add-to-cart', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function (assert) {
    this.owner.register('service:shopping-cart-service', ShoppingCartStub);
  });

  test('it renders the button', async function (assert) {
    await render(hbs`<RemoveFromCart @item={{"hellooo"}}/>`);

    assert.dom('button').exists();
    assert.dom('button').hasText(/-|remove/i);
  });

  test('it renders the button', async function (assert) {
    await render(hbs`<RemoveFromCart @item={{"hellooo"}}/>`);

    assert.equal(this.cart.items.length, 1);

    await click('button');

    assert.equal(this.cart.items.length, 0);
  });
});
