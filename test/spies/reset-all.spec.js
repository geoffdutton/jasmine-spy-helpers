
import { resetAll } from '../../src/core/spies/reset-all.js'

describe('resetAll', () => {
  it('should reset all spy of object', () => {
    const o = {
      foo: jasmine.createSpy('foo'),
      bar: () => {},
      baz: jasmine.createSpy('baz')
    }

    spyOn(o.foo.calls, 'reset').and.callThrough()
    spyOn(o.baz.calls, 'reset').and.callThrough()

    resetAll(o)

    expect(o.foo.calls.reset).toHaveBeenCalled()
    expect(o.baz.calls.reset).toHaveBeenCalled()
  })
})
