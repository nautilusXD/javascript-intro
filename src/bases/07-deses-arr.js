const characters = ['Goku', 'Vegeta', 'Trunks']

const [g, v, t, goten = 'No tiene valor'] = characters

console.log(t)

const returnArray = () => {
    return ['ABC', 123]
}

const [letters, numbers] = returnArray()

console.log(numbers, letters)