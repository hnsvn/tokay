import test from 'node:test';
import assert from 'node:assert/strict';
import { createDefaultRegistry } from '../src/commands/registry.js';

test('huyd.invoke remains available as an alias', async () => {
  const registry = createDefaultRegistry();
  const a = registry.get('hnsai.invoke');
  const b = registry.get('huyd.invoke');
  assert.ok(a, 'expected hnsai.invoke to exist');
  assert.ok(b, 'expected huyd.invoke to exist');
  assert.equal(typeof a.run, 'function');
  assert.equal(typeof b.run, 'function');
});
