
export const isFunction = fnToCheck => fnToCheck && {}.toString.call(fnToCheck) === '[object Function]'

export const isNil = obj => obj === null || typeof obj === 'undefined'

export const isSpy = spy => {
  if (!spy) {
    return false
  }

  return !!(spy.and && spy.calls)
}
