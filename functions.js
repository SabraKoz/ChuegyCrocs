const crocDetails = (shoes) => {
    let shoeDetails = []
    for (const shoe of shoes) {
        shoeDetails.push(`${shoe.color} ${shoe.name} ${shoe.type} \n`)
    }
    return shoeDetails
}

const getFlips = (shoes) => {
    let flips = []
    for (const shoe of shoes) {
        if (shoe.type === 'Flip') {
            flips += `\t${shoe.name}\n`
        }
    } 
    return flips
}

const getPuffBoots = (shoes) => {
    let puffs = []
    for (const shoe of shoes) {
        if (shoe.type === 'Puff Boot') {
            puffs += `\t ${shoe.name}\n`
        }
    }
    return puffs
}

const getCrushSandals = (shoes) => {
    let crush = []
    for (const shoe of shoes) {
        if (shoe.type === 'Crush Sandal') {
            crush += `\t ${shoe.name} \n`
        }
    }
    return crush
}

const getClassicClogs = (shoes) => {
    let classicClog = []
    for (const shoe of shoes) {
        if (shoe.type === 'Classic Clog') {
            classicClog += `\t ${shoe.name} \n`
        }
    }
    return classicClog
}

const getClassicBoots = (shoes) => {
    let classicBoot = []
    for (const shoe of shoes) {
        if (shoe.type === 'Classic Boot') {
            classicBoot += `\t ${shoe.name} \n`
        }
    }
    return classicBoot
}

const getSlides = (shoes) => {
    let slides = []
    for (const shoe of shoes) {
        if (shoe.type === 'Slide') {
            slides += `\t ${shoe.name} \n`
        }
    }
    return slides
}

module.exports = {
    crocDetails, 
    getFlips,
    getPuffBoots,
    getCrushSandals,
    getClassicClogs,
    getClassicBoots,
    getSlides
}