const sum = require('./sum');

describe("sum", () => {
    it("works", () => {
        const result = sum(1,1)

        expect(result).toBe(2)
    })
})