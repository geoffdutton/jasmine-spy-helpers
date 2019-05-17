/**
 * Spy a method on an object if and only if it is not already a spy.
 * The spy (or the new created spy) is returned.
 *
 * @param {Object} obj Object.
 * @param {string} i The name of the method to spy.
 * @return {*} The spy, or the original value if it is alreay a spy or it cannot be spied.
 */
import { isSpy, isFunction } from '../helpers'

export function spyIfAndCallThrough (obj, i) {
  const current = obj[i]

  if (isFunction(current) && !isSpy(current)) {
    const spy = spyOn(obj, i)
    spy.and.callThrough()

    return spy
  }

  return current
}
