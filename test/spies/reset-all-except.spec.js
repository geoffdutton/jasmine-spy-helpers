
import { resetAllExcept } from '../../src/core/spies/reset-all-except.js'

describe('resetAllExcept', () => {
  it('should reset all spy of object except one', () => {
    const o = {
      foo: jasmine.createSpy('foo'),
      bar: () => {},
      baz: jasmine.createSpy('baz')
    }

    spyOn(o.foo.calls, 'reset').and.callThrough()
    spyOn(o.baz.calls, 'reset').and.callThrough()

    resetAllExcept(o, 'baz')

    expect(o.foo.calls.reset).toHaveBeenCalled()
    expect(o.baz.calls.reset).not.toHaveBeenCalled()
  })

  it('should reset all spy of object except ones', () => {
    const o = {
      foo: jasmine.createSpy('foo'),
      bar: () => {},
      baz: jasmine.createSpy('baz')
    }

    spyOn(o.foo.calls, 'reset').and.callThrough()
    spyOn(o.baz.calls, 'reset').and.callThrough()

    resetAllExcept(o, ['baz'])

    expect(o.foo.calls.reset).toHaveBeenCalled()
    expect(o.baz.calls.reset).not.toHaveBeenCalled()
  })
})
