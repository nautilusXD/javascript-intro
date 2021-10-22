const persona = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman'
}

const createHero = ({ name, age, codeName, power }) =>
    ({
        id: 1123416523,
        name,
        age,
        codeName,
        power
    })

console.log(createHero(persona))