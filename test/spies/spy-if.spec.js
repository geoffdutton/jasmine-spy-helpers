
import { spyIf } from '../../src/core/spies/spy-if.js'

describe('spyIf', () => {
  it('should spy method', () => {
    const o = {
      foo () {}
    }

    const result = spyIf(o, 'foo')

    expect(result).toBeDefined()
    expect(jasmine.isSpy(result)).toBe(true)
  })

  it('should not re-spy method', () => {
    const spy = jasmine.createSpy('foo')
    const o = {
      foo: spy
    }

    const result = spyIf(o, 'foo')

    expect(result).toBeDefined()
    expect(result).toBe(spy)
  })
})
