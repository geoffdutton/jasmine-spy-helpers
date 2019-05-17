
import { spyIfAndCallThrough } from '../../src/core/spies/spy-if-and-call-through'

describe('spyIfAndCallThrough', () => {
  it('should spy method with callThrough strategy', () => {
    const o = {
      id: 1,
      foo () {
        this.id++
      }
    }

    const spy = spyIfAndCallThrough(o, 'foo')

    expect(spy).toBeDefined()
    expect(spy).toBe(o.foo)
    expect(jasmine.isSpy(o.foo)).toBe(true)
    expect(o.id).toBe(1)

    o.foo()

    expect(o.id).toBe(2)
  })

  it('should not re-spy method', () => {
    const spy = jasmine.createSpy('foo')
    const o = {
      foo: spy
    }

    const result = spyIfAndCallThrough(o, 'foo')

    expect(result).toBeDefined()
    expect(result).toBe(spy)
  })

  it('should not try to spy non function', () => {
    const o = {
      foo: 1
    }

    const result = spyIfAndCallThrough(o, 'foo')

    expect(result).toBeDefined()
    expect(result).toBe(1)
  })
})
