
import { spyAll } from '../../src/core/spies/spy-all.js'

describe('spyAll', () => {
  it('should spy on all methods of object', () => {
    const o = {
      id: 1,
      foo () {},
      bar () {},
      baz () {}
    }

    spyAll(o)

    expect(jasmine.isSpy(o.foo)).toBe(true)
    expect(jasmine.isSpy(o.bar)).toBe(true)
    expect(jasmine.isSpy(o.baz)).toBe(true)

    expect(o.id).toBe(1)
  })
})
