
import { forEachWritableProperties } from './for-each-writable-properties.js'
import { spyIfAndCallThrough } from './spy-if-and-call-through.js'

/**
 * Spy all specified methods in object.
 *
 * @param {Object} obj Object to spy.
 * @param {Array<string>|string} methods The method or the array of methods to spy.
 * @return {void}
 */
export function spyEach (obj, methods = []) {
  const includes = Array.isArray(methods) ? methods : [methods]
  const isEmpty = includes.length === 0
  forEachWritableProperties(obj, (target, propName) => {
    if (isEmpty || includes.includes(propName)) {
      spyIfAndCallThrough(target, propName)
    }
  })
}
