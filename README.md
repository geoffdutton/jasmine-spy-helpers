# jasmine-spy-helpers

jasmine-spy-helpers adds some helper functions to Jasmine.

jasmine-spy-helpers is compatible with __Jasmine 2.0+__, but it will track with the current Jasmine version.

## Utils Functions

- `jasmine.spyAll(object)`
  - Spy all functions of given object.
  - Spies are configured with `callThrough`

```javascript
it('should spy all methods', function() {
  var obj = {
    id: 1,
    method1: function() {
    },
    method2: function() {
    }
  };

  jasmine.spyAll(obj);

  expect(obj.method1).not.toHaveBeenCalled();
  expect(obj.method2).not.toHaveBeenCalled();
});
```

- `jasmine.spyIf(function)`
  - Spy function if and only if function is not already a spy.
  - Spy is returned.

```javascript
it('should spy method once', function() {
  var obj = {
    id: 1,
    method1: function() {
    },
    method2: function() {
    }
  };

  jasmine.spyIf(obj, 'method1');
  jasmine.spyIf(obj, 'method1');
});
```

- `jasmine.spyAllExcept(object, [excepts])`
  - Spy all functions of given object, excepts function names given in array (second arguments).
  - Spies are configured with `callThrough`

```javascript
it('should spy selected method', function() {
  var obj = {
    id: 1,
    method1: function() {
    },
    method2: function() {
    }
  };

  jasmine.spyAllExcept(obj, 'method2');
});
```

- `jasmine.spyEach(object, [only])`
  - Spy all functions of given object that are specified in array as second arguments.
  - Spies are configured with `callThrough`

```javascript
it('should spy selected method', function() {
  var obj = {
    id: 1,
    method1: function() {
    },
    method2: function() {
    },
    method3: function() {
    }
  };

  jasmine.spyEach(obj, ['method1', 'method2');
});
```

- `jasmine.resetAll(object)`
  - Reset all spy of given object.

```javascript
it('should reset all methods', function() {
  var obj = {
    id: 1,
    method1: function() {
    },
    method2: function() {
    }
  };

  spyOn(obj, 'method1');
  spyOn(obj, 'method2');

  obj.method1();
  obj.method2();

  expect(obj.method1).toHaveBeenCalled();
  expect(obj.method2).toHaveBeenCalled();

  jasmine.resetAll(obj);

  expect(obj.method1).not.toHaveBeenCalled();
  expect(obj.method2).not.toHaveBeenCalled();
});
```

- `jasmine.resetEach(object, [methods])`
  - Reset each specified spies of given object.

```javascript
it('should reset all methods', function() {
  var obj = {
    id: 1,
    method1: function() {
    },
    method2: function() {
    }
  };

  spyOn(obj, 'method1');
  spyOn(obj, 'method2');

  obj.method1();
  obj.method2();

  expect(obj.method1).toHaveBeenCalled();
  expect(obj.method2).toHaveBeenCalled();

  jasmine.resetEach(obj, ['method1']);

  expect(obj.method1).not.toHaveBeenCalled();
  expect(obj.method2).toHaveBeenCalled();
});
```

- `jasmine.resetAllExcept(object, [methods])`
  - Reset all spies of given object except specified methods.

```javascript
it('should reset all methods', function() {
  var obj = {
    id: 1,
    method1: function() {
    },
    method2: function() {
    }
  };

  spyOn(obj, 'method1');
  spyOn(obj, 'method2');

  obj.method1();
  obj.method2();

  expect(obj.method1).toHaveBeenCalled();
  expect(obj.method2).toHaveBeenCalled();

  jasmine.resetAllExcept(obj, ['method1']);

  expect(obj.method1).toHaveBeenCalled();
  expect(obj.method2).not.toHaveBeenCalled();
});
```

## Licence

MIT License (MIT)

## Credits
A lot of code was borrowed from [jasmine-utils](https://github.com/mjeanroy/jasmine-utils), but I was looking to create just the spy helpers.

## Contributing

Open to pull requests.
