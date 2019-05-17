
import { isSpy } from '../../src/core/helpers'
import { spyAllExcept } from '../../src/core/spies/spy-all-except.js'

describe('spyAllExcept', () => {
  it('should spy methods of object except one', () => {
    const o = {
      id: 1,
      foo () {},
      bar () {},
      baz () {}
    }

    spyAllExcept(o, 'foo')

    expect(isSpy(o.foo)).toBe(false)
    expect(isSpy(o.bar)).toBe(true)
    expect(isSpy(o.baz)).toBe(true)

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

    expect(isSpy(o.foo)).toBe(false)
    expect(isSpy(o.bar)).toBe(false)
    expect(isSpy(o.baz)).toBe(true)

    expect(o.id).toBe(1)
  })

  it('should spy all if passed exceptions do not exist', () => {
    const o = {
      id: 1,
      foo () {},
      bar () {},
      baz () {}
    }

    spyAllExcept(o, 'nothing')

    expect(isSpy(o.foo)).toBe(true)
    expect(isSpy(o.bar)).toBe(true)
    expect(isSpy(o.baz)).toBe(true)

    expect(o.id).toBe(1)
  })
})
