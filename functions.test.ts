// const shuffleArray = require('./utils')
const { shuffleArray } = require('./utils.js')

// Data base to test w
const testArr1 = []
const testArr2 = [1, 2, 3, 4, 5, 6, 7]
const testArr3 = [`stuff`, `♡`, `more stuff`]

describe('shuffleArray should shuffle through our array', () => {
    //check that shuffleArray returns an array
    test(`should return an array`, () => {
        expect(Array.isArray(shuffleArray(testArr1))).toBeTruthy()
        expect(Array.isArray(shuffleArray(testArr2))).toBeTruthy()
        expect(Array.isArray(shuffleArray(testArr3))).toBeTruthy()
    })
    
    //check that it returns an array of the same length as the argument sent in

    test(`should return an array of the same length as the argument sent in`, () => {
    expect(shuffleArray(testArr1)).toHaveLength(testArr1.length)
    expect(shuffleArray(testArr2)).toHaveLength(testArr2.length)
    expect(shuffleArray(testArr3)).toHaveLength(testArr3.length)
    })
})




// 	(ಥ﹏ಥ)

// (╮°-°)╮┳━┳ (╯°益°)╯彡┻━┻
