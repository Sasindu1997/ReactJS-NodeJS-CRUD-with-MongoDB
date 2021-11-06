const multiply = require('./multiply')

test('properly * 2 numbers', () => {
    expect(multiply(3, 2)).toBe(6)
})