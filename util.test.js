const { isAnagram } = require('./util');

test("Should output boolean ", () => {
    const result = isAnagram("bleat","table");
    expect(result).toBe(true);
});