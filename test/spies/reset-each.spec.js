/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2014-2016 Mickael Jeanroy <mickael.jeanroy@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import { resetEach } from '../../src/core/spies/reset-each.js'

describe('resetEach', () => {
  it('should reset specified spy of object', () => {
    const o = {
      foo: jasmine.createSpy('foo'),
      bar: () => {},
      baz: jasmine.createSpy('baz')
    }

    spyOn(o.foo.calls, 'reset').and.callThrough()
    spyOn(o.baz.calls, 'reset').and.callThrough()

    resetEach(o, 'foo')

    expect(o.foo.calls.reset).toHaveBeenCalled()
    expect(o.baz.calls.reset).not.toHaveBeenCalled()
  })

  it('should reset specified spies of object', () => {
    const o = {
      foo: jasmine.createSpy('foo'),
      bar: () => {},
      baz: jasmine.createSpy('baz')
    }

    spyOn(o.foo.calls, 'reset').and.callThrough()
    spyOn(o.baz.calls, 'reset').and.callThrough()

    resetEach(o, ['foo'])

    expect(o.foo.calls.reset).toHaveBeenCalled()
    expect(o.baz.calls.reset).not.toHaveBeenCalled()
  })
})
