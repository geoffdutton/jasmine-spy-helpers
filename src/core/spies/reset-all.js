
import { resetAllExcept } from './reset-all-except.js'

/**
 * Reset all spy methods in object.
 *
 * @param {Object} obj The object to reset.
 * @return {void}
 */
export function resetAll (obj) {
  resetAllExcept(obj, [])
}
