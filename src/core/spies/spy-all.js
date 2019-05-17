
import { spyAllExcept } from './spy-all-except.js'

/**
 * Spy methods in object.
 *
 * @param {Object} obj The object to spy.
 * @return {void}
 */
export function spyAll (obj) {
  spyAllExcept(obj, [])
}
