
import { Klass } from '../fixtures/klass'
import { nonLooseClassFactory } from '../fixtures/non-loose-class-generator'
import { forEachWritableProperties } from '../../src/core/spies/for-each-writable-properties'
const NonLooseClass = nonLooseClassFactory()

describe('forEachWritableProperties', () => {
  it('should execute callback for all object properties', () => {
    const o = {
      id: 1,
      foo () {},
      bar () {}
    }

    const iteratee = jasmine.createSpy('iteratee')

    forEachWritableProperties(o, iteratee)

    expect(iteratee).toHaveBeenCalled()
    expect(iteratee.calls.count()).toBe(3)
    expect(iteratee).toHaveBeenCalledWith(o, 'id')
    expect(iteratee).toHaveBeenCalledWith(o, 'foo')
    expect(iteratee).toHaveBeenCalledWith(o, 'bar')
  })

  it('should execute callback for non enumerable and writable properties', () => {
    const o = {
      foo () {}
    }

    Object.defineProperty(o, 'bar', {
      value: 1,
      configurable: true,
      enumerable: false,
      writable: true
    })

    const iteratee = jasmine.createSpy('iteratee')

    forEachWritableProperties(o, iteratee)

    expect(iteratee).toHaveBeenCalled()
    expect(iteratee.calls.count()).toBe(2)
    expect(iteratee).toHaveBeenCalledWith(o, 'foo')
    expect(iteratee).toHaveBeenCalledWith(o, 'bar')
  })

  it('should execute callback and ignore non writable properties', () => {
    const o = {
      foo () {}
    }

    Object.defineProperty(o, 'bar', {
      value: 1,
      configurable: true,
      enumerable: false,
      writable: false
    })

    const iteratee = jasmine.createSpy('iteratee')

    forEachWritableProperties(o, iteratee)

    expect(iteratee).toHaveBeenCalled()
    expect(iteratee.calls.count()).toBe(1)
    expect(iteratee).toHaveBeenCalledWith(o, 'foo')
  })

  it('should execute callback for all class properties', () => {
    const iteratee = jasmine.createSpy('iteratee')

    forEachWritableProperties(Klass, iteratee)

    expect(iteratee).toHaveBeenCalledTimes(3)

    expect(iteratee).toHaveBeenCalledWith(Klass.prototype, 'constructor')
    expect(iteratee).toHaveBeenCalledWith(Klass.prototype, 'foo')
    expect(iteratee).toHaveBeenCalledWith(Klass.prototype, 'bar')
  })

  it('should execute callback for all class properties of a non-loose class', () => {
    const iteratee = jasmine.createSpy('iteratee')

    forEachWritableProperties(NonLooseClass, iteratee)
    expect(iteratee).toHaveBeenCalledTimes(4)

    expect(iteratee).toHaveBeenCalledWith(NonLooseClass, 'staticMethodOne')
    expect(iteratee).toHaveBeenCalledWith(NonLooseClass.prototype, 'constructor')
    expect(iteratee).toHaveBeenCalledWith(NonLooseClass.prototype, 'methodOne')
    expect(iteratee).toHaveBeenCalledWith(NonLooseClass.prototype, 'methodTwo')
  })

  it('should execute callback for all instance of class', () => {
    const o = new Klass()
    const iteratee = jasmine.createSpy('iteratee')

    forEachWritableProperties(o, iteratee)
    expect(iteratee).toHaveBeenCalledTimes(3)
    expect(iteratee).toHaveBeenCalledWith(o, 'id')
    expect(iteratee).toHaveBeenCalledWith(o, 'foo')
    expect(iteratee).toHaveBeenCalledWith(o, 'bar')
  })

  it('should execute callback for all instance of a non-loose class', () => {
    const o = new NonLooseClass()
    const iteratee = jasmine.createSpy('iteratee')
    forEachWritableProperties(o, iteratee)
    expect(iteratee).toHaveBeenCalledTimes(3)
    expect(iteratee).toHaveBeenCalledWith(o, 'id')
    expect(iteratee).toHaveBeenCalledWith(o, 'methodOne')
    expect(iteratee).toHaveBeenCalledWith(o, 'methodTwo')
  })
})
