import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | add-to-cart', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the button', async function (assert) {
    await render(hbs`<AddToCart @item={{"hellooo"}}/>`);

    assert.dom('button').exists();
    assert.dom('button').hasText(/+|add/i);
  });
});
