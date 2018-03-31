const afrikaansBadWords = require('./index')
test('should export list of bad words', () => {
  expect(afrikaansBadWords).toBeDefined()
  expect(Array.isArray(afrikaansBadWords)).toBeTruthy()
})
