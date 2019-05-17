
import { isSpy } from '../helpers'
import { forEachWritableProperties } from './for-each-writable-properties.js'
import { reset } from './reset.js'

/**
 * Reset the specified spy methods in the object.
 *
 * @param {Object} obj The object to reset.
 * @param {Array<string>|string} methods The method or the array of methods to reset.
 * @return {void}
 */
export function resetEach (obj, methods = []) {
  const excludes = Array.isArray(methods) ? methods : [methods]
  forEachWritableProperties(obj, (target, propName) => {
    const spy = target[propName]
    if (isSpy(spy) && excludes.includes(propName)) {
      reset(spy)
    }
  })
}
