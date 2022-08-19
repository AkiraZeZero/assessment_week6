const shuffleArray = require('./utils')




// app.get('/api/robots/five', (req, res) => {
    //     try {
        //         let shuffled = shuffleArray(bots)
        //         let choices = shuffled.slice(0, 5)
        //         let compDuo = shuffled.slice(6, 8)
        //         res.status(200).send({choices, compDuo})
        //     } catch (error) {
//         console.log('ERROR GETTING FIVE BOTS', error)
//         res.sendStatus(400)
//     }
// }) 


// function shuffleArray(array) {
//     let arrCopy = [...array]
//     for (let i = arrCopy.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [arrCopy[i], arrCopy[j]] = [arrCopy[j], arrCopy[i]];
//     }
//     return arrCopy
// }


describe('shuffleArray should shuffle through our array', () => {
    //check that shuffleArray returns an array
    it(`shuffle array should return an array`, () => {
        expect(shuffleArray.toEqual('shuffleArray'))
        // tried bots, [], shuffleArray, shuffled, arrCopy
        // also tried to.Equal, to.Be, to.Return
        
    // check that the items have been shuffled around 
    // it(`check if array was shuffled`, () => {
    //     expect()
    // })
})

//check that it returns an array of the same length as the argument sent in
it(`should return an array of the same length as the argument sent in`, () => {
    expect(shuffleArray(0,5).toHaveLength(0,5))
})

// it(``, () => {
//         expect(shuffleArray.toEqual(9))
//     })
})
// it(`should return array length`, () => {
//     expect(shuffleArray(3).toHaveLength(3))
// })

// 	(ಥ﹏ಥ)

// (╮°-°)╮┳━┳ (╯°益°)╯彡┻━┻
