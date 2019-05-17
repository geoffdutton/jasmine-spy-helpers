
import { spyAllExcept } from '../../src/core/spies/spy-all-except.js'

describe('resetAll', () => {
  it('should spy methods of object except one', () => {
    const o = {
      id: 1,
      foo () {},
      bar () {},
      baz () {}
    }

    spyAllExcept(o, 'foo')

    expect(jasmine.isSpy(o.foo)).toBe(false)
    expect(jasmine.isSpy(o.bar)).toBe(true)
    expect(jasmine.isSpy(o.baz)).toBe(true)

    expect(o.id).toBe(1)
  })

  it('should spy methods of object except ones', () => {
    const o = {
      id: 1,
      foo () {},
      bar () {},
      baz () {}
    }

    spyAllExcept(o, ['foo', 'bar'])

    expect(jasmine.isSpy(o.foo)).toBe(false)
    expect(jasmine.isSpy(o.bar)).toBe(false)
    expect(jasmine.isSpy(o.baz)).toBe(true)

    expect(o.id).toBe(1)
  })
})
