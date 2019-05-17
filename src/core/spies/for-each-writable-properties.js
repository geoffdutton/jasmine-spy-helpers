
import { isNil } from '../helpers'

/**
 * Iterate over all entries in object and execute iterator function on it.
 *
 * @param {*} obj Object to iterate over.
 * @param {function} iterator Iterator function.
 * @return {void}
 */
export function forEachWritableProperties (obj, iterator) {
  if (!isNil(obj)) {
    let current = obj

    const foundProps = new Set()
    while (current) {
      // First, use the for .. in loop.
      // eslint-disable-next-line guard-for-in
      for (let i in current) {
        const prop = current[i]
        if (!foundProps.has(prop)) {
          foundProps.add(prop)
          iterator(current, i)
        }
      }

      // Spy non enumerable properties.
      // Object.getOwnPropertyNames is supported since IE9.
      if (Object.getOwnPropertyNames) {
        let getProtoResult = null
        const props = Object.getOwnPropertyNames(current)
        if (!current.prototype && Object.getPrototypeOf) {
          getProtoResult = Object.getPrototypeOf(current)
          if (getProtoResult !== Object.getPrototypeOf({})) {
            Object.getOwnPropertyNames(getProtoResult).map((p) => {
              if (p !== 'constructor' && props.indexOf(p) === -1) {
                props.push(p)
              }
            })
          }
        }
        const size = props.length
        for (let i = 0; i < size; ++i) {
          const propName = props[i]
          const prop = current[propName]
          // Handle property if it is as not been seen yet.
          if (propName !== 'prototype' && !foundProps.has(prop)) {
            const descriptor = Object.getOwnPropertyDescriptor(current, propName) ||
              Object.getOwnPropertyDescriptor(Object.getPrototypeOf(current), propName)

            if (descriptor.writable) {
              foundProps.add(prop)
              iterator(current, propName)
            }
          }
        }
      }

      // Go up in the prototype chain.
      if (current.prototype) {
        current = current.prototype
      } else {
        current = null
      }
    }
  }
}
