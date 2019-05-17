
import {
  spyIf,
  resetAll,
  resetAllExcept,
  resetEach,
  spyAll,
  spyAllExcept,
  spyEach
} from './core/spies/index'

// Expose utility functions.
jasmine.spyIf = spyIf
jasmine.resetAll = resetAll
jasmine.resetAllExcept = resetAllExcept
jasmine.resetEach = resetEach
jasmine.spyAll = spyAll
jasmine.spyAllExcept = spyAllExcept
jasmine.spyEach = spyEach
