
import '../../src/index'
import { Klass } from '../fixtures/klass.js'

describe('resetAll, resetEach and resetAllExcept', () => {
  it('should reset all methods', () => {
    const obj = new Klass()
    spyOn(obj, 'foo')
    spyOn(obj, 'bar')

    obj.foo()
    obj.bar()

    expect(obj.foo).toHaveBeenCalled()
    expect(obj.bar).toHaveBeenCalled()

    jasmine.resetAll(obj)

    expect(obj.foo).not.toHaveBeenCalled()
    expect(obj.bar).not.toHaveBeenCalled()
  })

  it('should reset each specified methods', () => {
    const obj = new Klass()
    spyOn(obj, 'foo')
    spyOn(obj, 'bar')

    obj.foo()
    obj.bar()

    expect(obj.foo).toHaveBeenCalled()
    expect(obj.bar).toHaveBeenCalled()

    jasmine.resetEach(obj, ['foo'])

    expect(obj.foo).not.toHaveBeenCalled()
    expect(obj.bar).toHaveBeenCalled()
  })

  it('should reset all methods except specified', () => {
    const obj = new Klass()
    spyOn(obj, 'foo')
    spyOn(obj, 'bar')

    obj.foo()
    obj.bar()

    expect(obj.foo).toHaveBeenCalled()
    expect(obj.bar).toHaveBeenCalled()

    jasmine.resetAllExcept(obj, ['foo'])

    expect(obj.foo).toHaveBeenCalled()
    expect(obj.bar).not.toHaveBeenCalled()
  })
})
