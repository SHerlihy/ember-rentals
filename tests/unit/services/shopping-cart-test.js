import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | cart', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:shopping-cart');
    assert.ok(service);
  });

  test('can add/remove item to cart', function (assert) {
    let service = this.owner.lookup('service:shopping-cart');
    assert.ok(service);
    service.add('item1');
    assert.strictEqual(service.items.length, 1);
    service.remove('item1');
    assert.strictEqual(service.items.length, 0);
  });

  test('can empty cart', function (assert) {
    let service = this.owner.lookup('service:shopping-cart');
    assert.ok(service);
    service.add('item1');
    service.add('item2');
    assert.strictEqual(service.items.length, 2);
    service.empty();
    assert.strictEqual(service.items.length, 0);
  });
});
