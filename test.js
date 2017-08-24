const valuesOfKeys = require('./index')

describe('values of keys', function () {
  const object = {
    name: 'Bob',
    age: 18,
    friend: {
      name: 'Alice'
    }
  }

  const keys = ['name', 'friend.name', (obj) => obj.age * 2, 'none']

  const expectedValues = ['Bob', 'Alice', 36, undefined]

  test('basic usage', () => {
    const values = valuesOfKeys(keys, object)
    expect(values).toEqual(expectedValues)
  })

  test('curry', () => {
    const values = valuesOfKeys(keys)(object)
    expect(values).toEqual(expectedValues)
  })
})