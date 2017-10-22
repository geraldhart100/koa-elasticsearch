import test from 'ava'

import es from '../'

const next = () => {}

test('Init', async t => {
  const ctx = {}

  // middleware
  const fn = es()

  fn(ctx, next)

  t.plan(2)

  t.truthy(fn.client, 'ref client to middleware')

  await ctx.client
    .ping()
    .then(() => t.pass('expose client'))
})

test('Options', async t => {
  const ctx = {}

  const fn = es({ key: 'es' })

  fn(ctx, next)

  t.truthy(ctx.es, 'assign to given key')
})
