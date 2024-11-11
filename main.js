const { crocCollection } = require("./data.js")

const { crocDetails, 
    getFlips,
    getPuffBoots,
    getCrushSandals,
    getClassicClogs,
    getClassicBoots,
    getSlides } = require("./functions.js")

console.log('ALL CROCS:')
console.log('---------------------------------')

const shoeDetails = crocDetails(crocCollection)
console.log(`${shoeDetails.join(" ")}`)

console.log('STYLES:')
console.log('---------------------------------')

console.log('FLIP CROCS:')
console.log(getFlips(crocCollection))

console.log('PUFF BOOTS:')
console.log(getPuffBoots(crocCollection))

console.log('CRUSH SANDALS:')
console.log(getCrushSandals(crocCollection))

console.log('CLASSIC CLOGS:')
console.log(getClassicClogs(crocCollection))

console.log('CLASSIC BOOTS:')
console.log(getClassicBoots(crocCollection))

console.log('SLIDES:')
console.log(getSlides(crocCollection))

