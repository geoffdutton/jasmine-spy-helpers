
import '../../src/index'

describe('spyIf', () => {
  it('should spy a method that is not already a spy', () => {
    const obj = {
      foo () {}
    }

    const spy = jasmine.spyIf(obj, 'foo')

    expect(jasmine.isSpy(obj.foo)).toBeTruthy()
    expect(spy).toBeDefined()
    expect(spy).toBe(obj.foo)
  })

  it('should not spy a method that is already a spy', () => {
    const obj = {
      foo () {}
    }

    spyOn(obj, 'foo')

    const spy = jasmine.spyIf(obj, 'foo')

    expect(jasmine.isSpy(obj.foo)).toBeTruthy()
    expect(spy).toBeDefined()
    expect(spy).toBe(obj.foo)
  })
})
