# Values of Keys

Get values of keys from an object.

## Installation

```
npm i values-of-keys
```

## Usage

```ecmascript 6
const valuesOfKeys = require('values-of-keys')

const object = {
  name: 'Bob',
  age: 18,
  friend: {
    name: 'Alice'
  }
}

const keys = ['name', 'friend.name', (obj) => obj.age * 2, 'none']

const values = valuesOfKeys(keys, object)

// values is ['Bob', 'Alice', 36, undefined]
```

## Curry

This function is curried so you can call it like this:

```
valuesOfKeys(keys)(object)
```

## License

MIT