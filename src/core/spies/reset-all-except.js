
import { isSpy } from '../helpers'
import { forEachWritableProperties } from './for-each-writable-properties.js'
import { reset } from './reset.js'

/**
 * Reset all spy methods in object except given methods.
 *
 * @param {Object} obj The object to reset.
 * @param {Array<string>|string} methods The method or the array of methods to ignore.
 * @return {void}
 */
export function resetAllExcept (obj, methods = []) {
  const excludes = Array.isArray(methods) ? methods : [methods]
  forEachWritableProperties(obj, (target, propName) => {
    const spy = target[propName]
    if (isSpy(spy) && !excludes.includes(propName)) {
      reset(spy)
    }
  })
}
