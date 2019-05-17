
/**
 * Reset a spy.
 *
 * @param {jasmine.Spy} spy The spy to reset.
 * @return {void}
 */
export function reset (spy) {
  spy.calls.reset()
}
