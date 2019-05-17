
import { spyEach } from '../../src/core/spies/spy-each.js'

describe('resetAll', () => {
  it('should spy method of object', () => {
    const o = {
      id: 1,
      foo () {},
      bar () {},
      baz () {}
    }

    spyEach(o, 'foo')

    expect(jasmine.isSpy(o.foo)).toBe(true)
    expect(jasmine.isSpy(o.bar)).toBe(false)
    expect(jasmine.isSpy(o.baz)).toBe(false)

    expect(o.id).toBe(1)
  })

  it('should spy methods of object', () => {
    const o = {
      id: 1,
      foo () {},
      bar () {},
      baz () {}
    }

    spyEach(o, ['foo', 'bar'])

    expect(jasmine.isSpy(o.foo)).toBe(true)
    expect(jasmine.isSpy(o.bar)).toBe(true)
    expect(jasmine.isSpy(o.baz)).toBe(false)

    expect(o.id).toBe(1)
  })
})
