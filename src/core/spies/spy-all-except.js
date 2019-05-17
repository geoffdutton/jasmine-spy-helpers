
import { forEachWritableProperties } from './for-each-writable-properties.js'
import { spyIfAndCallThrough } from './spy-if-and-call-through.js'

/**
 * Spy all methods in object except specified methods.
 *
 * @param {Object} obj Object to spy.
 * @param {Array<string>|string} excepts The method or the array of methods to ignore.
 * @return {void}
 */
export function spyAllExcept (obj, excepts = []) {
  const exclude = Array.isArray(excepts) ? excepts : [excepts]

  forEachWritableProperties(obj, (target, propName) => {
    if (!exclude.includes(propName)) {
      spyIfAndCallThrough(target, propName)
    }
  })
}
