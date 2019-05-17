
import { isSpy } from '../helpers'

/**
 * Spy a method on an object if and only if it is not already a spy.
 * The spy (or the new created spy) is returned.
 *
 * @param {Object} obj Object.
 * @param {string} method Name of the method on the object to spy.
 * @return {function} The spy.
 */
export function spyIf (obj, method) {
  if (!isSpy(obj[method])) {
    spyOn(obj, method)
  }

  return obj[method]
}
