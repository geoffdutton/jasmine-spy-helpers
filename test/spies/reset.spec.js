
import { reset } from '../../src/core/spies/reset'

describe('reset', () => {
  it('should reset spy', () => {
    const spy = jasmine.createSpy('spy')
    spy()

    reset(spy)

    expect(spy.calls.count()).toBe(0)
  })
})
